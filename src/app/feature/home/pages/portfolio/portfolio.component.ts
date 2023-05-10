import {Component} from '@angular/core';
import {CarService} from "../../../../core/services/car.service";
import {CarDto} from "../../../../core/dto/carDto";
import {CarsPurchaseDto} from "../../../../core/dto/carsPurchaseDto";
import Swal from "sweetalert2";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  /**
   * Lista de carros del concesionario
   */
  public listCarsPortfolio: CarDto[];

  public carsPurchase: Array<CarsPurchaseDto>;

  constructor(private carService: CarService) {
    this.carsPurchase = [];
    this.carService.getAllCars().subscribe({
      next: value => {
        this.listCarsPortfolio = value;
        console.log(this.listCarsPortfolio)
      }
    })
  }

  /**
   * Agrega un coche al carrito
   * @param carNew
   */
  public addCarShoppingCart(carNew: CarDto): void {

    let added: boolean = false;

    if (this.carsPurchase.length > 0) {

      for (let i: number = 0; i < this.carsPurchase.length && !added; i++) {
        let car: CarsPurchaseDto = this.carsPurchase[i];
        if (car.codeCar == carNew.codeCar) {
          if ( (car.quantity+1) > carNew.stock ) {
            Swal.fire({
              icon: "error",
              title: "Error al agregar",
              text: "No puedes agregar cantidades superiores al stock"
            });
            added = true;
          } else {
            car.quantity += 1;
            car.total += carNew.price;
            added = true;
          }
        }
      }
    }

    if (!added) {
      let carPurchase: CarsPurchaseDto = {
        codeCar: carNew.codeCar,
        quantity: 1,
        total: carNew.price
      };
      this.carsPurchase.push(carPurchase);
    }

    localStorage.setItem('carsPurschase', JSON.stringify(this.carsPurchase));
  }

  /**
   * Elimina un coche del carrito
   * @param carNew
   */
  public deleteCarShoppingCart(carNew: CarDto): void {

    let carActual: CarsPurchaseDto = this.carsPurchase.find(car => car.codeCar == carNew.codeCar);
    let deleted: boolean = false;

    if (carActual == null) {
      Swal.fire({
        icon: "info",
        title: "Eliminar del carrito",
        text: "No has agregado ninguna unidad de este coche"
      })
    } else {
      for (let i: number = 0; i < this.carsPurchase.length && !deleted; i++) {
        let car: CarsPurchaseDto = this.carsPurchase[i];

        if (car.codeCar == carNew.codeCar) {
          if ( (car.quantity-1) == 0 ) {
            this.carsPurchase.splice(i, 1);
          } else {
            car.quantity -= 1;
            car.total -= carNew.price;
            deleted = true;
          }
        }
      }
    }

    localStorage.setItem('carsPurschase', JSON.stringify(this.carsPurchase));
  }

}
