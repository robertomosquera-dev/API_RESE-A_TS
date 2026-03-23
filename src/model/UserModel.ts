export type UserType = {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  isEnable: boolean;
}

export default class User {
  private id: number;
  private firstName: string;
  private lastName: string | null;
  private email: string;
  private password: string;
  private createdAt: Date;
  private updatedAt: Date;
  private isEnable: boolean;

  constructor(
    id: number,
    firstName: string,
    lastName: string | null,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    isEnable: boolean,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isEnable = isEnable;
  }

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getFirstName(): string { return this.firstName; }
  setFirstName(firstName: string): void { this.firstName = firstName; }

  getLastName(): string | null { return this.lastName; }
  setLastName(lastName: string | null): void { this.lastName = lastName; }

  getEmail(): string { return this.email; }
  setEmail(email: string): void { this.email = email; }

  getPassword(): string { return this.password; }
  setPassword(password: string): void { this.password = password; }

  getCreatedAt(): Date { return this.createdAt; }
  setCreatedAt(createdAt: Date): void { this.createdAt = createdAt; }

  getUpdatedAt(): Date { return this.updatedAt; }
  setUpdatedAt(updatedAt: Date): void { this.updatedAt = updatedAt; }

  getIsEnable(): boolean { return this.isEnable; }
  setIsEnable(isEnable: boolean): void { this.isEnable = isEnable; }

}