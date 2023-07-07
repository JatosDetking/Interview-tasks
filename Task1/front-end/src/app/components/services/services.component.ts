import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEditServiceComponent } from 'src/app/dialogs/create-edit-service/create-edit-service.component';
import { ViewServiceComponent } from 'src/app/dialogs/view-service/view-service.component';
import { Service } from 'src/app/interfaces/dto';
import { EventService } from 'src/app/services/event.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  displayedColumns: string[] = ['_id', 'name', 'image', 'buttons'];
  dataSource = [];
  render = false;

  constructor(
    public dialog: MatDialog,
    public serviceService: ServiceService,
    public eventService: EventService,
  ) {
    this.fillList();
  }

  role = localStorage.getItem('role')!;

  addService() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';
    dialogConfig.height = '700px';
    dialogConfig.data = {
      mode: 'add'
    };
    const dialogRef = this.dialog.open(CreateEditServiceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: any) => {
      this.fillList()
    });
  };

  edit(row: Service) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';
    dialogConfig.height = '700px';
    dialogConfig.data = {
      mode: 'edit', data: row
    };
    const dialogRef = this.dialog.open(CreateEditServiceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: any) => {
      this.fillList()
    });
  };
  deleteE(row: Service) {
    this.serviceService.delete(row._id).subscribe((res: any) => {
      this.fillList()
    })
  };
  subscribe(row: Service) {
    this.eventService.create(row.name,row._id,row.startDate,row.endDate).subscribe((res: any) => {
      this.fillList()
    })
  };
  inspect(row: Service) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '800px';
    dialogConfig.data = {
      data: row
    };
    this.dialog.open(ViewServiceComponent, dialogConfig);

  };
  fillList() {
    this.serviceService.get().subscribe((res: any) => {
      this.dataSource = res;
      this.render = true;
    })
  }
}

