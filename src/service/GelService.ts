import axios from "axios";
import { Gel } from "../models/Gel";

export default class GelService {
  async fetchGelsList(): Promise<Gel[]> {
    const route = "http://localhost:8081/products";
    return axios.get(route).then((res: any) => {
      return res.data;
    });
    //   .catch((error: Error) => {
    //     throw new HttpRequestError(
    //       ${t("common.error.errorGetLanguages")}: ${error.message}
    //     );
    //   });
  }

  async fetchLastGelsUpdateList(): Promise<Gel[]> {
    const route = "http://localhost:8081/lastGelsUpdate";
    return axios.get(route).then((res: any) => {
      return res.data;
    });
  }

  async fetchListByGelId(idGel: number): Promise<Gel[]> {
    const route = `http://localhost:8081/listByGelId/${idGel}`;
    return axios.get(route).then((res: any) => {
      return res.data;
    });
  }

  async fetchListByGelMonth(month: string): Promise<Gel[]> {
    const route = `http://localhost:8081/listByGelMonth/${month}`;
    return axios.get(route).then((res: any) => {
      return res.data;
    });
  }

  async fetchListByGelIdAndMonth(idGel: number, month: string): Promise<Gel[]> {
    const route = `http://localhost:8081/listByGelIdAndMonth/${idGel}/${month}`;
    return axios.get(route).then((res: any) => {
      return res.data;
    });
  }

  async fetchGelNumber(): Promise<Gel[]> {
    const route = "http://localhost:8081/gelNumber";
    return axios.get(route).then((res: any) => {
      return res.data;
    });
  }
}
