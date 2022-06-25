import Logger from "@config/lib/logger";
import { AppException } from "@errors/AppException";
import axios, { AxiosInstance } from "axios";
import { HttpMethods, IHttpProvider } from "../model/IHttpRequest";
import { Services, EListServices } from "./Instances";
const baseUrls = {
  product: process.env.URL_PRODUCT_SERVICE,
};
export class AxiosProvider implements IHttpProvider {
  async request(
    method: HttpMethods,
    serviceName: EListServices,
    path: string,
    data?: any,
    headers?: any
  ): Promise<any> {
    try {
      let response;
      switch (method) {
        case "POST":
          response = await axios.post(`${baseUrls[serviceName]}${path}`, data, {
            headers,
          });
          break;
        case "PUT":
          response = await Services[serviceName].put(path, data, { headers });
          break;
        case "DELETE":
          response = await Services[serviceName].delete(path, { headers });
          break;
        default:
          response = await Services[serviceName].get(path, { headers });
          break;
      }
      return response;
    } catch (error) {
      Logger.error(
        `Error API: ${serviceName}/${path} - Method: ${method} - Data: ${data} - Headers: ${headers} - Error: ${JSON.stringify(
          error,
          null,
          2
        )}`
      );
      throw new AppException("Error Api", 400);
    }
  }
  static logging() {
    axios.interceptors.request.use((request) => {
      Logger.info(JSON.stringify(request, null, 2));
    });
    axios.interceptors.response.use((response) => {
      Logger.info(JSON.stringify(response, null, 2));
    });
  }
}
AxiosProvider.logging();
