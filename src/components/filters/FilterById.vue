<template>
  <div class="card gels-list-filter">
    <div class="card-body text-left">
      <p>Filtrer selon le mois :</p>
      <input
        class="input-month"
        type="month"
        placeholder="Mois"
        v-model="selectedMonth"
        @change="handleChangeMonth"
      />
      <p class="gel-filter">Filtrer selon le gel :</p>
      <div class="d-flex flex-row">
        <select
          class="form-control"
          @change="handleChangeGelId"
          v-model="selectedId"
          value="name@example.com"
        >
          <option
            v-for="nbGel in gelsList.gel_id"
            :key="nbGel.id"
            :value="nbGel"
          >
            {{ nbGel }}
          </option>
        </select>
        <button
          type="button"
          class="btn btn-success reset-filters"
          v-on:click="resetFilters"
        >
          Effacer
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import axios from "axios";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "FilterById",
  setup() {
    const store = useStore();
    const items = ref();
    const gelsList = computed(() => store.getters["gel/getGelsList"]);
    const selectedId = ref();
    const selectedMonth = ref();
    const monthText = ref("toto");
    // const datepicker = ref(
    //   datepicker({
    //     format: "mm-yyyy",
    //     startView: "months",
    //     minViewMode: "months",
    //   })
    // );

    const fetchListByGelId = async (idGel: number) => {
      //test
      const test = await store.dispatch("gel/fetchListByGelId", idGel);
    };

    const handleChangeGelId = async () => {
      if (selectedId.value && selectedMonth.value) {
        const params = {
          idGel: selectedId.value,
          month: selectedMonth.value,
        };
        await store.dispatch("gel/fetchListByGelIdAndMonth", params);
      } else await store.dispatch("gel/fetchListByGelId", selectedId.value);
    };

    const handleChangeMonth = async () => {
      if (selectedId.value && selectedMonth.value) {
        const params = {
          idGel: selectedId.value,
          month: selectedMonth.value,
        };
        console.log("Double filtre");
        console.log(params);
        await store.dispatch("gel/fetchListByGelIdAndMonth", params);
      } else
        await store.dispatch("gel/fetchListByGelMonth", selectedMonth.value);
    };

    const fetchAllGelsDatas = async () => {
      selectedId.value = null;
      selectedMonth.value = null;
      await store.dispatch("gel/fetchGelsList");
      await store.dispatch("gel/fetchGelNumber");
    };

    const resetFilters = () => {
      fetchAllGelsDatas();
    };

    return {
      items,
      gelsList,
      fetchListByGelId,
      handleChangeGelId,
      selectedId,
      resetFilters,
      selectedMonth,
      handleChangeMonth,
      monthText,
    };
  },
});
</script>
<style lang="scss">
.under {
  border-bottom: 1px solid #cdf4d0;
  padding-bottom: 3px;
  font-weight: bold;
}

.reset-filters {
  font-size: 12px;
}

.input-month {
  width: 100%;
}

.gel-filter {
  margin-top: 16px;
}
</style>
