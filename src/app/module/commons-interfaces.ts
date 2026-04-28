export interface IlinkConfig {
  name: string,
  path: string,
  exact: boolean,
}

export interface IContent {
  route: string,
  alt: string,
  p: string,
}

export interface IConnection {
  name: string,
  members: number,
  since: string,
  master: string,
}
export interface IColumnTable {
  column: string,
}

export interface IFieldForm {
  name: string,
  for: string,
  type: string,
  id: string,
  placeholder: string,
}