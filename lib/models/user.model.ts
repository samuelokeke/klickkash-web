import { Role } from "./role.model";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  role: Role;
}
