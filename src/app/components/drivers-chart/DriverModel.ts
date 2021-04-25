export interface DriverModel {
  name: string;
  totalRaces: string;
  mean: string;
  median: string;
}

export interface DataModel {
  id: string;
  data: DriverModel;
}
