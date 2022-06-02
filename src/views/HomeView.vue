<template>
  <div class="home">
    <div class="card card-header">
      <div class="card-body card-body-header">
        <div class="d-flex justify-content-between align-items-center">
          <div
            class="d-flex justify-content-align text-left align-items-center"
          >
            <img
              src="https://www.koffre.com/wp-content/uploads/edd/2021/01/gel-hydroalcoolique.png"
              height="80"
              width="80"
            />
            <h1>Gel hydroalcoolique connecté</h1>
          </div>
          <div
            class="d-flex justify-content-align text-left align-items-center"
          >
            <p class="look-datas text-success">Observe tes données</p>
            <img src="@/assets/logo-egel.png" height="90" width="110" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-4 float-md-right p-16">
      <RealTimeOverview />
      <DistributedDoses />
    </div>
    <Filters />
    <GelsList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GelsList from "@/components/GelsList.vue"; // @ is an alias to /src
import RealTimeOverview from "@/components/RealTimeOverview.vue";
import Filters from "@/components/FiltersRecap.vue";
import DistributedDoses from "@/components/DistributedDoses.vue";
@Options({
  components: {
    GelsList,
    RealTimeOverview,
    Filters,
    DistributedDoses,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss">
.card-header {
  background-color: white !important;
}

.card {
  background-color: #f3f7f3;
}

h1 {
  letter-spacing: 0.021em;
  font-size: 2rem;
  font-weight: bold;
  margin: 0px;
}

.look-datas {
  margin-bottom: 0px;
  margin-right: 16px;
  font-style: italic;
  font-weight: bold;
}

.card-body-header {
  padding: 0px;
}
</style>
