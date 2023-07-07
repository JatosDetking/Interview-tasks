import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/interfaces/dto';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class EventsComponent {

  role = localStorage.getItem('role')!;
  render: boolean = false;

  constructor(
    public eventService: EventService,
  ) {
    this.fillList();
  }

  dataSource = [];
  columnsToDisplay = ['name', 'status'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];


  fillList() {
    this.eventService.get().subscribe((res: any) => {
      this.dataSource = res;
      this.render = true;
    })
  }

  changeStatus(row: Event, status: string) {
    this.eventService.updateStatus(status, row._id).subscribe((res: any) => {
      console.log(res);
      this.fillList();
    })
  }

}
