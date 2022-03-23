export class Mis1StatusRequest {
  monYear: string;
  distId: number;
  fields: string[];

  constructor(mis1StatusRequestData?: any) {
    this.monYear = mis1StatusRequestData.monYear || "";
    this.distId = mis1StatusRequestData.distId || "";
    this.fields = mis1StatusRequestData.fields || [];
  }
}
