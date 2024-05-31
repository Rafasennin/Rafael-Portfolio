<template>
    <v-container class="bg-black d-flex justify-center h-screen" >
    <v-sheet class="mx-auto mt-16 bg-grey-darken-4 pa-12" width="400" height="430" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form ref="form">
                <v-text-field prepend-inner-icon="mdi-account" 
                              v-model="email" 
                              label="Usuario" 
                              :rules="emailRules" 
                              variant="outlined" 
                              placeholder="Digite o usuario" 
                              required>
                </v-text-field>
                <v-text-field prepend-inner-icon="mdi-lock" 
                             :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append-inner="togglePasswordVisibility"
                             :type="showPassword ? 'text' : 'password'"
                              v-model="password" 
                              label="Senha"
                              :rules="passwordRules" 
                              variant="outlined" 
                              placeholder="Digite sua senha" 
                              required>
                </v-text-field>
                <div class="d-flex flex-column">
                    <v-btn color="success" 
                           block @click="validate" 
                           size="large" 
                           type="submit"
                           variant="elevated">
                            Logar
                    </v-btn>
                    <v-btn :to="linkAbout" 
                           class="mt-4 mb-2" 
                           color="primary" 
                           type="submit" 
                           size="large"
                           variant="elevated">
                             Voltar
                    </v-btn>
                </div>
            </v-form>
        </v-card>
    </v-sheet>
</v-container>
</template>


<script>
//import EventBus from "../helpers/EventBus";
import SecretPsw from "../secret";
import { mapState, mapMutations } from 'vuex';
export default {
    data: () => ({
        linkAbout: "/",
        email: '',
        emailRules: [
            value => {
                if (value) return true

                return 'E-mail is requred.'
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true

                return 'O E-mail deve ser válido.'
            },
        ],
        password: '',
        showPassword: false,
        passwordRules: [
            value => !!value || 'A senha é necessária.',
            value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) || `
                A senha deve conter ter ao menos 8 caracteres, uma 
                letra maiúscula, uma minúscula e um número.
            `
        ]
    }),

    computed: {
    ...mapState(['isLogged']), // Mapeie o estado de carregamento para o componente
  },

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                // Validação do e-mail
                const emailValid = this.emailRules.every(rule => rule(this.email) === true);
                if (emailValid) {
                    if (this.email == "rafasennin@hotmail.com") {
                        const passwordValid = this.passwordRules.every(rule => rule(this.password) === true);
                        if (passwordValid && SecretPsw === this.password) {
                            // Autenticado com sucesso, redirecionar para a página de login
                            this.$router.push("/admin");
                            // Define o evento isLogged para true
                            this.SET_LOGGED(true);
                        } else {
                            // Senha inválida
                            alert('Senha inválida. Por favor, contate o administrador.');
                        }
                    } else {
                        // E-mail não cadastrado
                        alert('Usuário não cadastrado, contate o administrador.');
                    }
                } else {
                    // E-mail inválido
                    alert('E-mail inválido. Por favor, verifique o e-mail inserido.');
                }
            } 
        },
        

        togglePasswordVisibility(){
        this.showPassword = !this.showPassword

    },
    ...mapMutations(['SET_LOGGED']),
}
}
</script>