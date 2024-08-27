<template>
  <v-container class="mt-5">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>{{ $t('fileManagement') }}</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container class="white--bg">
            <v-file-input v-model="files" :show-size="1000" color="deep-purple-accent-4" label="File input"
                          placeholder="Select your files" prepend-icon="mdi-paperclip" variant="outlined" counter multiple>
              <template v-slot:selection="{ fileNames }">
                <template v-for="fileName in fileNames" :key="fileName">
                  <v-chip class="me-2" color="deep-purple-accent-4" size="small" label>
                    {{ fileName }}
                  </v-chip>
                </template>
              </template>
            </v-file-input>
            <v-row class="text-center mt-5">
              <v-col cols="12" class="mb-5">
                <v-btn color="deep-purple-accent-4" class="mt-3" @click="uploadFiles">
                  {{ $t('add') }}
                </v-btn>
              </v-col>
            </v-row>

            <v-row class="text-center mt-5">
              <v-col cols="12" class="mb-5">
                <h1>{{ $t('fileTitle') }}</h1>
              </v-col>
            </v-row>

            <v-table theme="dark" class="overflow-x-auto">
              <thead>
                <tr>
                  <th class="text-h5 text-center">
                    {{ $t('fileIndex') }}
                  </th>
                  <th class="text-h5 text-center">
                    {{ $t('fileName') }}
                  </th>
                  <th class="text-h5 text-center">
                    {{ $t('fileLength') }}
                  </th>
                  <th class="text-h5 text-center">
                    {{ $t('fileUploadDate') }}
                  </th>
                  <th class="text-h5 text-center">
                    {{ $t('fileFile') }}
                  </th>
                  <th class="text-h5 text-center">
                    {{ $t('fileAction') }}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="text-center" v-for="(file, index) in fileList" :key="file._id">
                  <td>
                    {{ index + 1 }}
                  </td>
                  <td>
                    {{ file.originalName }}
                  </td>
                  <td>
                    {{ file.fileLength }}
                  </td>
                  <td>
                    {{ file.fileUploadDate }}
                  </td>
                  <td>
                   <!-- <a :href="`${config.public.apiBase}/contatos/${fileId}`" target="_blank">{{ $t('download') }}</a>-->
                  </td>
                  <td>
                    <v-btn @click="openDeleteModal(file._id, 'file')" class="text-decoration-none bg-red-darken-4">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>

            <tr class="d-flex justify-center">
              <v-progress-circular v-if="loadingFlag" color="primary" indeterminate :size="74" :width="8"></v-progress-circular>
            </tr>

            <!-- Modal for delete-->
            <v-dialog v-model="deleteModal" max-width="350px">
              <v-card class="d-flex justify-center text-center align-center">
                <v-card-title>
                  <span class="headline">{{ $t('confirmDeletePhrase') }}</span>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDeleteModal">{{ $t('cancelDelete') }}</v-btn>
                  <v-btn color="red darken-1" text @click="confirmDelete">{{ $t('confirmDelete') }}</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const files = ref([]);
const fileList = ref([]);
const loadingFlag = ref(false);

//***************Lógica para confirmação da deleção***** */
const deleteModal = ref(false);
const deleteId = ref(null);
const deleteType = ref('');

const openDeleteModal = (id, type) => {
  deleteId.value = id;
  deleteType.value = type;
  deleteModal.value = true;
};

const closeDeleteModal = () => {
  deleteModal.value = false;
  deleteId.value = null;
  deleteType.value = '';
};

const confirmDelete = () => {
  if (deleteType.value === 'file') {
    deleteFile(deleteId.value);
  }
  closeDeleteModal();
};

//************************************* */

const uploadFiles = async () => {
  loadingFlag.value = true;
  try {
    const formData = new FormData();
    files.value.forEach(file => {
      formData.append('files', file);
    });
    await axios.post('https://rafael-portfolio-back-end.vercel.app/files', formData);
    fetchFiles();
  } catch (error) {
    console.error('Erro ao fazer upload dos arquivos:', error);
  } finally {
    files.value = [];
    loadingFlag.value = false;
  }
};

const fetchFiles = async () => {
  loadingFlag.value = true;
  try {
    const response = await axios.get('https://rafael-portfolio-back-end.vercel.app/files');
    fileList.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar arquivos:', error);
  } finally {
    loadingFlag.value = false;
  }
};

const deleteFile = async (id) => {
  loadingFlag.value = true;
  try {
    await axios.delete(`https://rafael-portfolio-back-end.vercel.app/files/${id}`);
  } catch (error) {
    console.error('Erro ao deletar arquivo:', error);
  } finally {
    fetchFiles();
    loadingFlag.value = false;
  }
};

onMounted(() => {
  fetchFiles();
});
</script>

<style scoped>
.white--bg {
  background-color: white;
}
</style>
