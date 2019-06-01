import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShowdailogComponent} from '..//showdailog/showdailog.component'
@Component({
  selector: 'app-dailogdemo',
  templateUrl: './dailogdemo.component.html',
  styleUrls: ['./dailogdemo.component.css']
})
export class DailogdemoComponent implements OnInit {
   dialogRef
  constructor(private dailog: MatDialog) { }

  ngOnInit() {
  }
  openDailog()
  {
     this.dialogRef= this.dailog.open(ShowdailogComponent, {
      height: '400px',
      width: '600px',
    });
    
  }
}
