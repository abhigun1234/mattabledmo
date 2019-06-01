import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShowdailogComponent} from '..//showdailog/showdailog.component'
@Component({
  selector: 'app-mypopup',
  templateUrl: './mypopup.component.html',
  styleUrls: ['./mypopup.component.css']
})
export class MypopupComponent implements OnInit {
  dialogRef 
  constructor(private dailog :MatDialog) { }

  ngOnInit() {
  }
  openDailog()
  {
     this.dialogRef = this.dailog.open(ShowdailogComponent, {
      height: '400px',
      width: '600px',
    });
  }
  closeDailog()
  {
    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
}
