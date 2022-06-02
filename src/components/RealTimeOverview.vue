<template>
  <div class="card real-time-card">
    <div class="card-body text-left">
      <h4 class="under">Aperçu en temps réel</h4>
      <div v-for="gel in gelById" :key="gel.id" class="card gel-card">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-align align-items-center">
            <GelPicture :isEmpty="gel.isEmpty" />
            <div class="distributed-text">
              <p>Distribuée : {{ gel.distributedDoses }}</p>
              <p>Non distribuée : {{ gel.notDistributedDoses }}</p>
            </div>
          </div>
          <div class="box">
            <p>
              <strong>Gel n°{{ gel.idGel }}</strong>
            </p>
            <p>
              <i>{{ new Date(gel.date).toLocaleString().split(",")[0] }}</i>
            </p>
            <span v-if="gel.isEmpty == 1" class="badge badge-pill badge-danger"
              >Vide</span
            >
            <span v-else class="badge badge-pill badge-success">Non vide</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { defineComponent, ref, onMounted, computed } from "vue";
import GelPicture from "@/components/GelPicture.vue";
import { useStore } from "vuex";
// import Gel from "@/models/Gel";

export default defineComponent({
  name: "RealTimeOverview",
  components: { GelPicture },
  setup() {
    const store = useStore();

    const gelById = ref();
    const fetchGelById = async () => {
      gelById.value = await store.dispatch("gel/fetchLastGelsUpdateList");
    };

    onMounted(() => {
      fetchGelById();
    });

    return { fetchGelById, gelById };
  },
});
</script>

<style lang="scss">
.real-time-card {
  margin-top: 16px;
  margin-bottom: 16px;
  min-height: 400px;
  overflow-y: auto;
}
.gel-card {
  background-color: #cdf4d0 !important;
  box-shadow: 0px 28px 80px rgba(0, 0, 0, 0.04),
    0px 11.6977px 33.4221px rgba(0, 0, 0, 0.0287542),
    0px 6.25417px 17.869px rgba(0, 0, 0, 0.0238443),
    0px 3.50603px 10.0172px rgba(0, 0, 0, 0.02),
    0px 1.86203px 5.32008px rgba(0, 0, 0, 0.0161557),
    0px 0.774832px 2.21381px rgba(0, 0, 0, 0.0112458);
  padding: 8px 8px 0px 8px;
  text-align: left;
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 2px;
}

.under {
  border-bottom: 1px solid #cdf4d0;
  padding-bottom: 3px;
  font-weight: bold;
}

.distributed-text {
  margin-left: 16px;
}
</style>
