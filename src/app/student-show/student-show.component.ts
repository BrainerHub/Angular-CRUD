import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Students } from '../model/students';


@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  list: Students[] = [];

  constructor(private _studentservice: StudentService, private _router: Router) { }
  
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this._studentservice.get().subscribe((data: [Students]) => {
      this.list = data;
    });
  }

  onEdit(id: number) {
    this._router.navigate(['/student/' + id]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure??')) {
      this._studentservice.delete(id).subscribe((res: number) => {
        if (res > 0) this.getList();
      });
    }
  }

  onAdd() {
    this._router.navigate(['/student/0']);
  }

}
