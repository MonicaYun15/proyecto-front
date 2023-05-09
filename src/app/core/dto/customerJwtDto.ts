export interface CustomerJwtDto {
  cardId: string;
  fullname: string;
  numberCellPhone: string,
  email: string;
  rol: string;
  iat: number;
  exp: number;
}
