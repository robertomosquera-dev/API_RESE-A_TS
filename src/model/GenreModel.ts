
export type GenreType = {
  id: number;
  name: string;
  isEnable: boolean;
}

export default class Genre {
  private id: number;
  private name: string;
  private isEnable: boolean;

  constructor(
    id: number,
    name: string,
    isEnable: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.isEnable = isEnable;
  }

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getName(): string { return this.name; }
  setName(name: string): void { this.name = name; }

  getIsEnable(): boolean { return this.isEnable; }
  setIsEnable(isEnable: boolean): void { this.isEnable = isEnable; }

}