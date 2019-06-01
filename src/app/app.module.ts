import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './course/course.component'
import {MatFormFieldModule  } from '@angular/material/form-field';
import {MatInputModule ,MatPaginator} from '@angular/material';
import { FlexboxComponent } from './flexbox/flexbox.component'
import {MatIconModule} from '@angular/material/icon';
import { BootstarapdemoComponent } from './bootstarapdemo/bootstarapdemo.component';
import { DailogComponent } from './dailog/dailog.component';
import { ShowdailogComponent } from './showdailog/showdailog.component';
import {FormsModule} from '@angular/forms';
import { MypopupComponent } from './mypopup/mypopup.component';
import { CoursedailogComponent } from './coursedailog/coursedailog.component'
import {ReactiveFormsModule} from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { DailogdemoComponent } from './dailogdemo/dailogdemo.component';
import { WcteamComponent } from './wcteam/wcteam.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component'
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FlexboxComponent,
    BootstarapdemoComponent,
    DailogComponent,
    ShowdailogComponent,
    MypopupComponent,
    CoursedailogComponent,
    FormsComponent,
    DailogdemoComponent,
    WcteamComponent,
    ProductlistComponent,
    ProductdetailsComponent
  ],
  entryComponents: [
    ShowdailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
