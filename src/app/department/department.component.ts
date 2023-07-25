import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../model/department';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  model = new Department();
  
  constructor(
    private _sharedservice: SharedService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const tempId = this._activatedRoute.snapshot.paramMap.get('id');
    if (tempId && parseInt(tempId) > 0) {
      this.model.id = parseInt(tempId);
      this.getById();
    }
  }

  getById() {
    this._sharedservice.getById(this.model.id).subscribe((res:Department) => {
      this.model.name = res.name;
    });
  }

  onSubmit() {
    if (this.model.id > 0) this.update();
    else this.save();
  }

  save() {
    this._sharedservice.save(this.model).subscribe((res:number) => {
      if (res > 0) this.onBack();
    });
  }

  update() {
    this._sharedservice.update(this.model.id, this.model).subscribe((res:number) => {
      if (res > 0) this.onBack();
    });
  }

  onBack() {
    this._router.navigate(['show-list']);
  }
}
