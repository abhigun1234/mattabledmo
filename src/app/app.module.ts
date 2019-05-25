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
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FlexboxComponent
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
    MatIconModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
