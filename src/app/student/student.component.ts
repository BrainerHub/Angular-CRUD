import { Component, OnInit } from '@angular/core';
import { StudentService  } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Students } from '../model/students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  model = new Students();

  constructor(
    private _studentservice: StudentService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
    


    ngOnInit(): void {
      const tempId = this._activatedRoute.snapshot.paramMap.get('id');
      if (tempId && parseInt(tempId) > 0) {
        this.model.id = parseInt(tempId);
        this.getById();
      }
    }

    getById() {
      this. _studentservice.getById(this.model.id).subscribe((res:Students) => {
        this.model.name = res.name;
      });
    }

    onSubmit() {
      if (this.model.id > 0) this.update();
      else this.save();
    }
  
    save() {
      this._studentservice.save(this.model).subscribe((res:number) => {
        if (res > 0) this.onBack();
      });
    }
  
    update() {
      this._studentservice.update(this.model.id, this.model).subscribe((res:number) => {
        if (res > 0) this.onBack();
      });
    }

    onBack() {
      this._router.navigate(['student-show']);
    }
  

}
