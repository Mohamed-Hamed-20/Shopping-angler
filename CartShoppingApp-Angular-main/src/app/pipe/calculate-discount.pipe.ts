import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount',
  standalone: true,
})
export class CalculateDiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    if (!price || !discountPercentage) return price;
    return price * (1 - discountPercentage / 100);
  }
}
