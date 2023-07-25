import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { SharedService } from './shared.service';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { StudentComponent } from './student/student.component';
import { StudentShowComponent } from './student-show/student-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/department', pathMatch: 'full' },
  { path: 'department', component: DepartmentComponent },
  { path: 'show-list', component: ShowListComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student-show', component: StudentShowComponent },
  
]


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowListComponent,
    StudentComponent,
    StudentShowComponent
    
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  exports: [RouterModule],
  providers: [ SharedService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
