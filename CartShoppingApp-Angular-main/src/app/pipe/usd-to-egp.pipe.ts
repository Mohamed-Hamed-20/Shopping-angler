import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp',
})
export class UsdToEgpPipe implements PipeTransform {
  transform(value: number): number {
    const exchangeRate = 50;
    return value * exchangeRate;
  }
}
