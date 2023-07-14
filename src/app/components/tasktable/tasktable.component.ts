import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TaskloaderService } from 'src/app/services';
export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  check: boolean | undefined;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Do Graffiti', category: 'Creative', check: false },
  {
    position: 2,
    name: 'Go to the Mall of America',
    category: 'Travel',
    check: false,
  },
  {
    position: 3,
    name: 'Confess my Feelings',
    category: 'Social and Relationship',
    check: false,
  },
  {
    position: 4,
    name: 'Go Camping With my Best Friends',
    category: 'Adventure',
    check: false,
  },
  { position: 5, name: 'Become Ambidextrous', category: 'Cool', check: false },
  {
    position: 6,
    name: 'Become a Sage',
    category: 'Business and Career',
    check: false,
  },
  {
    position: 7,
    name: 'Manage a Nightclub',
    category: 'Business and Career',
    check: false,
  },
  {
    position: 8,
    name: 'Camp in the Backyard',
    category: 'Adventure',
    check: false,
  },
  {
    position: 9,
    name: 'Complete a Marathon',
    category: 'Health and Fitness',
    check: false,
  },
  { position: 10, name: 'Play Paintball', category: 'Fun', check: false },
];

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.scss'],
})
export class TasktableComponent {
  displayedColumns: string[] = ['position', 'name', 'category', 'check'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selectedItems: PeriodicElement[] = [];

  constructor(private dt:TaskloaderService){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleCheck(element: PeriodicElement) {
    element.check = !element.check;

    if (element.check) {
      this.selectedItems.push(element);
      this.dt.setData = this.selectedItems
      
    } else {
      const index = this.selectedItems.findIndex(
        v => v.position == element.position
      );
      this.selectedItems.splice(index, 1);
      this.dt.setData = this.selectedItems
      console.log(index);
    }
    
    console.log(this.selectedItems);
  }
}
