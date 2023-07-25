import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { ShowListComponent } from './show-list/show-list.component';
import { StudentComponent } from './student/student.component';
import { StudentShowComponent } from './student-show/student-show.component';

const routes: Routes = [
  {path:'department/:id',component:DepartmentComponent},
  { path: 'show-list', component: ShowListComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'student-show', component: StudentShowComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
