<template>
  <div class="card gels-list-filter">
    <div class="card-body text-left">
      <h4 class="under">Filtre des données :</h4>
      <FilterById />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import FilterById from "@/components/filters/FilterById.vue";

export default defineComponent({
  name: "FiltersRecap",
  components: { FilterById },
  setup() {
    const store = useStore();
    const items = ref();
    const gelsList = computed(() => store.getters["gel/getGelsList"]);

    const fetchAllGelsDatas = async () => {
      await store.dispatch("gel/fetchGelsList");
    };

    onMounted(() => {
      fetchAllGelsDatas();
    });
    return { fetchAllGelsDatas, items, gelsList };
  },
});
</script>
<style lang="scss">
.under {
  border-bottom: 1px solid #cdf4d0;
  padding-bottom: 3px;
  font-weight: bold;
}

.gels-list-filter {
  margin-top: 16px;
  margin-left: 16px;
}
</style>
