import axios from "axios";

export enum EListServices {
    product = 'product'
}

export const Services = {
  product: axios.create({
    baseURL: process.env.URL_PRODUCT_SERVICE,
  }),
};
