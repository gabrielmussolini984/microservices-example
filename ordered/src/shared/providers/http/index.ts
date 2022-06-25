import { container } from "tsyringe";
import { AxiosProvider } from "./implements/Axios";
import { IHttpProvider } from "./model/IHttpRequest";

container.register<IHttpProvider>("HttpProvider", AxiosProvider);
