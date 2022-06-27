import { EListServices } from "../implements/Instances";

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
}
export interface IHttpProvider {
  request(
    method: HttpMethods,
    serviceName: EListServices,
    path: string,
    data?: any,
    headers?: any
  ): Promise<any>;
}
