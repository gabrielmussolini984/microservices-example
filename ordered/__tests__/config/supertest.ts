import { agent as _request } from "supertest";
import { get as getApplication } from "../../src/shared/infra/main";

export const request = _request(getApplication());
