import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-edit-service',
  templateUrl: './create-edit-service.component.html',
  styleUrls: ['./create-edit-service.component.css']
})
export class CreateEditServiceComponent {

  data: any;
  mode: string = '';

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  startDate = new FormControl('', [Validators.required]);
  endDate = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CreateEditServiceComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialog: MatDialog,
    private serviceService: ServiceService,
  ) {
    this.data = data
    this.mode = this.data.mode;
    if (this.mode == 'edit') {
      this.name.setValue(data.data.name);
      this.description.setValue(data.data.description);
      this.image.setValue(data.data.image);
      let startDate = new Date(data.data.startDate);
      startDate.setHours(startDate.getHours() + 2);
      this.startDate.setValue(startDate.toISOString().substring(0, 16));
     

      let endDate = new Date(data.data.endDate);
      endDate.setHours(endDate.getHours() + 2);
      this.endDate.setValue(endDate.toISOString().substring(0, 16));
    }
  }

  add() {
    this.serviceService.create(this.name.value!, this.description.value!, this.image.value!, new Date(this.startDate.value!), new Date(this.endDate.value!)).subscribe((res: any) => {
      this.dialogRef.close();
    })
  }

  edit() {
    this.serviceService.edit(this.name.value!, this.description.value!, this.image.value!, new Date(this.startDate.value!), new Date(this.endDate.value!), this.data.data._id).subscribe((res: any) => {
      this.dialogRef.close();
    })
  };
}
