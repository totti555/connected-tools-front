import GelService from "@/service/GelService";
import { Gel } from "@/models/Gel";

const store = {
  state: () => ({
    gelsList: {
      gel: [],
      total: 0,
      gel_id: [],
      distributedDosesTotal: 0,
      notDistributedDosesTotal: 0,
    },
    lastGelsUpdates: [],
  }),
  mutations: {
    update_gels_list(state: any, gel: Gel[]) {
      state.gelsList.gel = gel;
      const distributedDosesArray = gel.map((g: Gel) => g.distributedDoses);
      if (distributedDosesArray) {
        state.gelsList.distributedDosesTotal = distributedDosesArray.reduce(
          (previousValue: any, currentValue: any) =>
            previousValue + currentValue,
          0
        );
      }

      const notDistributedDoses = gel.map((g: Gel) => g.notDistributedDoses);
      if (notDistributedDoses) {
        state.gelsList.notDistributedDosesTotal = notDistributedDoses.reduce(
          (previousValue: any, currentValue: any) =>
            previousValue + currentValue,
          0
        );
      }
    },
    update_gels_list_number(state: any, params: any) {
      state.gelsList = {
        ...state.gelsList,
        total: params.formattedGelsNumber,
        gel_id: params.array,
      };
      console.log(state.gelsList);
    },
    update_last_gels_update_list(state: any, gel: Gel[]) {
      state.lastGelsUpdate = gel;
    },
  },
  actions: {
    async fetchGelsList(context: any) {
      const gelService = new GelService();
      const gels = await gelService.fetchGelsList();
      context.commit("update_gels_list", gels);
    },
    async fetchLastGelsUpdateList(context: any) {
      const gelService = new GelService();
      const gels = await gelService.fetchLastGelsUpdateList();
      return gels;
    },
    async fetchListByGelId(context: any, idGel: number) {
      const gelService = new GelService();
      const gels = await gelService.fetchListByGelId(idGel);
      context.commit("update_gels_list", gels);
    },
    async fetchListByGelMonth(context: any, month: string) {
      const gelService = new GelService();
      const gels = await gelService.fetchListByGelMonth(month);
      context.commit("update_gels_list", gels);
    },
    async fetchListByGelIdAndMonth(context: any, params: any) {
      const gelService = new GelService();
      const gels = await gelService.fetchListByGelIdAndMonth(
        params.idGel,
        params.month
      );
      context.commit("update_gels_list", gels);
    },
    async fetchGelNumber(context: any) {
      const gelService = new GelService();
      const gelsNb = await gelService.fetchGelNumber();
      const formattedGelsNumber = gelsNb[0].total;
      const array = [];
      for (let i = 1; i <= formattedGelsNumber; i++) {
        array.push(i);
      }
      const params = {
        formattedGelsNumber,
        array,
      };
      context.commit("update_gels_list_number", params);
    },
  },
  getters: {
    getGelsList: (state: any) => state.gelsList,
    getLastGelsUpdatesList: (state: any) => state.lastGelsUpdates,
  },
};
export default store;
