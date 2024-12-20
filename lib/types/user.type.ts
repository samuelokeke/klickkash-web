import { JWTPayload } from "jose";
import { Role } from "./role.type";

export interface User extends JWTPayload {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: string;
  role: Role;
}
