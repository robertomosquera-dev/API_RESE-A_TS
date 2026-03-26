
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
      id: number | null,
      firstName: string,
      lastName: string,
      isEnable: boolean | null,
      birthDate: Date | null,
      createdAt: Date | null
  ) {
    this.id = id ?? 0; // temporal, lo reemplaza la BD
    this.firstName = firstName;
    this.lastName = lastName;
    this.isEnable = isEnable ?? true; // por defecto true
    this.birthDate = birthDate ?? null;
    this.createdAt = createdAt ?? new Date(); // por defecto ahora
  }

  getId(): number { return this.id; }
  getFirstName(): string { return this.firstName; }
  getLastName(): string { return this.lastName; }
  getIsEnable(): boolean { return this.isEnable; }
  getBirthDate(): Date | null { return this.birthDate; }
  getCreatedAt(): Date { return this.createdAt; }
}