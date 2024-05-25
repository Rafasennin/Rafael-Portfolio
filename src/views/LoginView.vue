<template>
    <v-container class="bg-grey-darken-4" fluid style="height: 100vh;">
        <v-sheet class="mx-auto mt-16" width="350" >
            <v-form ref="form">
                <v-text-field v-model="email" label="E-mail" :rules="emailRules"  required ></v-text-field>
                <v-text-field v-model="password" label="Senha" :rules="passwordRules"  required></v-text-field>
                <div class="d-flex flex-column">
                    <v-btn class="mt-4 mb-2" color="success" block @click="validate">Logar</v-btn>
                </div>
            </v-form>
        </v-sheet>
    </v-container> 
</template>


<script>
import EventBus from "../helpers/EventBus";
export default {
    data: () => ({
        email: 'rafasennin@hotmail.com',
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
        password: 'Senha123',
        passwordRules: [
            value => !!value || 'A senha é necessária.',
            value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) || `
                A senha deve conter ter ao menos 8 caracteres, uma 
                letra maiúscula, uma minúscula e um número.
            `
        ]
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                // Validação do e-mail
                const emailValid = this.emailRules.every(rule => rule(this.email) === true);
                if (emailValid) {
                    if (this.email == "rafasennin@hotmail.com") {
                        const passwordValid = this.passwordRules.every(rule => rule(this.password) === true);
                        if (passwordValid) {
                            // Autenticado com sucesso, redirecionar para a página de login
                            this.$router.push("/admin");
                            // Disparar o evento isAuthenticated para true
                            EventBus.isAuthenticated = true;
                            console.log("Valor de isAuthenticated:", EventBus.isAuthenticated);
                        } else {
                            // Senha inválida
                            alert('Senha inválida. Por favor, verifique as regras de senha.');
                        }
                    } else {
                        // E-mail não cadastrado
                        alert('Usuário não cadastrado, contacte o administrador.');
                    }
                } else {
                    // E-mail inválido
                    alert('E-mail inválido. Por favor, verifique o e-mail inserido.');
                }
            }
        },
        
    }
}
</script>