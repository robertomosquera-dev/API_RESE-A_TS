import type { PageRequest } from "../utils/PageRequest.js";

export interface RepositoryInterface<T, K, Filter> {
  save(entity: T): Promise<T | null>;                       
  saveAll(entities: T[]): Promise<number | null>;
  findById(id: K): Promise<T | null>;
  findByFilter(filter: Filter): Promise<T[]>;                
  findAll(pageRequest: PageRequest<Filter>): Promise<T[]>;   
  existsById(id: K): Promise<boolean>;                      
  deleteById(id: K): Promise<boolean>;                       
  update(id: K, entity: Partial<T>): Promise<T | null>;      
}

