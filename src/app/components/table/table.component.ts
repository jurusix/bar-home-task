import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SortDirection } from '../../enums/sort-direction.enum';
import { Rates } from '../../models/rates.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  sortDirection = SortDirection.ASC;
  sortDirectionEnum = SortDirection;
  @Input() rates?: Rates | null;

  changeSortDirection() {
    if (this.sortDirection === SortDirection.ASC) {
      this.sortDirection = SortDirection.DESC;
    } else {
      this.sortDirection = SortDirection.ASC;
    }
  }

  keyDescOrder = (
    a: KeyValue<string, number>,
    b: KeyValue<string, number>
  ): number => {
    return a.key > b.key ? -1 : b.key > a.key ? 1 : 0;
  };
}
