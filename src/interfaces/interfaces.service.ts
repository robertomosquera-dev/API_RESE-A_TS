import type { PageRequest } from "../utils/PageRequest.js";

export interface ServiceInterface<Req,Res,K,Filter> {
  create(data: Req): Promise<Res>;         // 👈 recibe los datos
  getById(id: K): Promise<Res>;
  deleteById(id: K): Promise<boolean>;
  getAll(pageRequest: PageRequest<Filter>): Promise<Res[]>;
  update(id: K, entity: Partial<Req>): Promise<Res>;
}