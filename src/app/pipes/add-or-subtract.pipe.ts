import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addOrSubtract',
})
export class AddOrSubtractPipe implements PipeTransform {
  transform(value: number, percentage = 0): number {
    return value + (value / 100) * percentage;
  }
}
