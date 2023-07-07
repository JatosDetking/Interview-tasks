import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/interfaces/dto';
@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})


export class ViewServiceComponent {

  name?: string;
  image?: string;
  description?:string;
  startDate?:string;
  endDate?:string;
  createdAt?:string;
  updatedAt?:string;

  constructor(
    public dialogRef: MatDialogRef<ViewServiceComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialog: MatDialog,
  ) {
    this.name = data.data.name;
    this.image = data.data.image;
    this.description = data.data.description;
    this.startDate = data.data.startDate.toString().substring(0, 25)
    this.endDate = data.data.endDate.toString().substring(0, 25)
    this.createdAt = data.data.createdAt.toString().substring(0, 25)
    this.updatedAt = data.data.updatedAt.toString().substring(0, 25)
  }
}
