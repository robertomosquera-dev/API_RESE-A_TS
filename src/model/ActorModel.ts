
export type ActorType = {
  id: number;
  firstName: string;
  lastName: string;
  isEnable: boolean;
  birthDate: Date | null;
  createdAt: Date;
}; 

export default class Actor {
  private id: number;
  private firstName: string;
  private lastName: string;
  private isEnable: boolean;
  private birthDate: Date | null;
  private createdAt: Date;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    isEnable: boolean,
    birthDate: Date | null,
    createdAt: Date,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isEnable = isEnable;
    this.birthDate = birthDate;
    this.createdAt = createdAt;
  }

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getFirstName(): string { return this.firstName; }
  setFirstName(firstName: string): void { this.firstName = firstName; }

  getLastName(): string { return this.lastName; }
  setLastName(lastName: string): void { this.lastName = lastName; }

  getIsEnable(): boolean { return this.isEnable; }
  setIsEnable(isEnable: boolean): void { this.isEnable = isEnable; }

  getBirthDate(): Date | null { return this.birthDate; }
  setBirthDate(birthDate: Date | null): void { this.birthDate = birthDate; }

  getCreatedAt(): Date { return this.createdAt; }
  setCreatedAt(createdAt: Date): void { this.createdAt = createdAt; }


}
