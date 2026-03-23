type OrderPage = "ASC" | "DESC";

export type PageRequest<Filter> = {
  page:   number;
  size:   number;
  order?: OrderPage;
  filter?: Filter;
};