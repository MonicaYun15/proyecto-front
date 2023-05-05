export interface CustomerJwtDto {
  cardId: string;
  fullname: string;
  numberCellPhone: string,
  email: string;
  iat: number;
  exp: number;
}
