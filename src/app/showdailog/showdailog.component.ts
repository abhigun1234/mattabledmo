import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators ,FormsModule,NgForm} from '@angular/forms'
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-showdailog',
  templateUrl: './showdailog.component.html',
  styleUrls: ['./showdailog.component.css']
})
export class ShowdailogComponent implements OnInit {
  addCourseForm:FormGroup;
  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<ShowdailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {

      this.addCourseForm=fb.group({
        'name':[null,Validators.required]
      },{'description':[null]})
    }

  ngOnInit() {
  }
  onFormSubmit(val:any)
  {
    console.log(val)

  }

}
