export interface Gel {
  idGel: number;
  isEmpty: boolean;
  date: string;
  distributedDoses: number;
  notDistributedDoses: number;
  total: number;
  gel_id?: number[];
  month?: number[];
}
