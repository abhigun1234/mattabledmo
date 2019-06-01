import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
import {MatTableDataSource,MatInputModule ,MatPaginator} from '@angular/material'
import {Course} from '..//course'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShowdailogComponent} from '..//showdailog/showdailog.component'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  dataSource;
  dialogRef;
  displayedColumns: string[] = ['Id','name','fees','duration','description','imageUrl','videoUrl','add'];
  courseData=[
 
          {
        "Id": 1,
        "name": "Python",
        "fees": "2000",
        "duration": "30 hours",
        "description": "Python with django framework",
        "imageUrl": "http://nirali23.0fees.us/courses_title.jpg",
        "videoUrl": "http://nirali23.0fees.us/unix.jpg"
        },
          {
        "Id": 2,
        "name": "java",
        "fees": "2000",
        "duration": "35 hours",
        "description": "java web app development",
        "imageUrl": "http://nirali23.0fees.us/courses_title_K1uAPsL.jpg",
        "videoUrl": "http://nirali23.0fees.us/courses_title_Wc2w0wz.jpg"
        },
          {
        "Id": 3,
        "name": "testing",
        "fees": "500",
        "duration": "35 hours",
        "description": "Testing by Vishal",
        "imageUrl": "http://nirali23.0fees.us/courses_title_1FrBhmo.jpg",
        "videoUrl": "http://nirali23.0fees.us/courses_title_qdUB5CV.jpg"
        },
          {
        "Id": 4,
        "name": "selenium +cuckumber",
        "fees": "2000",
        "duration": "35 hours",
        "description": "selenium +cuckumber",
        "imageUrl": "http://nirali23.0fees.us/courses_title_cL0Qefu.jpg",
        "videoUrl": "http://nirali23.0fees.us/courses_title_loG9y51.jpg"
        },
          {
        "Id": 5,
        "name": "spring +hybernet",
        "fees": "2000",
        "duration": "34 hours",
        "description": "java hybernet",
        "imageUrl": "http://nirali23.0fees.us/courses_title_C8aX7u2.jpg",
        "videoUrl": "http://nirali23.0fees.us/courses_title_BTnjsat.jpg"
        }

]
  constructor(private course :CourseService,private dailog:MatDialog) { 

  }
applyFilter(filterValue: string) {

  }
  ngOnInit() {

    this.course.getCourseDetails().subscribe(res=>{

     
      if(res)
      {
          console.log(res)
          this.dataSource=new MatTableDataSource()
          this.dataSource=res;
      }
    })
  }

  addCourse()
  {

    this.dialogRef= this.dailog.open(ShowdailogComponent ,{
      height: '400px',
      width: '600px',
    });

  }
}
