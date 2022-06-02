<template>
  <div class="card card-distributed-global">
    <div class="card-body text-left">
      <h4 class="under">Aperçu des doses</h4>
      <div class="card card-distributed-doses">
        <div class="card-body card-text p-4">
          Doses distribuées :
          <strong>{{ gelsList.distributedDosesTotal }}</strong>
        </div>
      </div>
      <br />
      <div class="card card-distributed-doses">
        <div class="card-body card-text p-4">
          Doses non distribuées :
          <strong>{{ gelsList.notDistributedDosesTotal }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import FilterById from "@/components/filters/FilterById.vue";

export default defineComponent({
  name: "DistributedDoses",
  setup() {
    const store = useStore();
    const gelsList = computed(() => store.getters["gel/getGelsList"]);

    return { gelsList };
  },
});
</script>
<style lang="scss">
.under {
  border-bottom: 1px solid #cdf4d0;
  padding-bottom: 3px;
  font-weight: bold;
}

.card-text {
  font-size: 24px;
}

.card-distributed-doses {
  background-color: #cdf4d0 !important;
  box-shadow: 0px 28px 80px rgba(0, 0, 0, 0.04),
    0px 11.6977px 33.4221px rgba(0, 0, 0, 0.0287542),
    0px 6.25417px 17.869px rgba(0, 0, 0, 0.0238443),
    0px 3.50603px 10.0172px rgba(0, 0, 0, 0.02),
    0px 1.86203px 5.32008px rgba(0, 0, 0, 0.0161557),
    0px 0.774832px 2.21381px rgba(0, 0, 0, 0.0112458);
  text-align: left;
  cursor: pointer;
}

.card-distributed-global {
  margin-bottom: 16px;
}
</style>
