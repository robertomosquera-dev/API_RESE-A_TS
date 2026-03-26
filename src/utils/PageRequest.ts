type OrderPage = "asc" | "desc";

export type PageRequest<Filter> = {
  page:   number;
  size:   number;
  order?: OrderPage;
  filter?: Filter;
};