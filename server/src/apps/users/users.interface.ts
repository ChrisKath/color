export interface User {
  id?: number;
  displayName: string;
  email: string;
  phone: number | string;
  password?: string;
  isActive?: boolean;
}
