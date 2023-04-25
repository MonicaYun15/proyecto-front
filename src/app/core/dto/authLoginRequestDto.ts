/**
 * Dto de auth customer
 */
export interface AuthLoginRequestDto {

  /**
   * Email del cliente
   */
  email: string;

  /**
   * Contraseña del cliente
   */
  password: string;
}
