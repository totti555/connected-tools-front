<template>
  <div class="card gels-list-card">
    <div class="card-body">
      <h4 class="under text-left">Liste des utilisations</h4>

      <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead class="table-header">
          <tr>
            <th>N°</th>
            <th>Date</th>
            <th>Est vide ?</th>
            <th>Doses distribuées</th>
            <th>Doses non distribuées</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="gel in gelsList.gel" :key="gel.id">
            <td>{{ gel.idGel }}</td>
            <td>{{ new Date(gel.date).toLocaleString().split(",")[0] }}</td>
            <td>{{ gel.isEmpty }}</td>
            <td>{{ gel.distributedDoses }}</td>
            <td>{{ gel.notDistributedDoses }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
    <div
      v-if="!gelsList.gel.length && !isLoading"
      class="alert alert-danger alert-text"
      role="alert"
    >
      Il n'y a pas données suivant ces filtres. Changez de filtres ou effacez
      les.
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Gel } from "@/models/Gel.ts";

export default defineComponent({
  name: "GelsList",
  setup() {
    const store = useStore();
    const items = ref();
    const gelsList = computed(() => store.getters["gel/getGelsList"]);
    const distributedDoses = ref();
    const isLoading = ref(true);

    const fetchAllGelsDatas = async () => {
      await store.dispatch("gel/fetchGelsList");
      await store.dispatch("gel/fetchGelNumber");
    };

    onMounted(async () => {
      await fetchAllGelsDatas();
      isLoading.value = false;
      console.log(gelsList.value);
    });
    return { fetchAllGelsDatas, items, gelsList, isLoading };
  },
});
</script>

<style>
.gels-list-card {
  margin: 16px;
  overflow-y: auto; /*
  max-height: 1000px;*/
  position: flex;
  height: 375px;
}

.under {
  border-bottom: 1px solid #cdf4d0;
  padding-bottom: 3px;
  font-weight: bold;
}

.table-header {
  background-color: #cdf4d0 !important;
}

th {
  vertical-align: middle !important;
}

.alert-text {
  margin-right: 16px;
  margin-left: 16px;
}
</style>
