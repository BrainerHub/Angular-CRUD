import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { Department } from '../model/department';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  constructor(private _sharedservice: SharedService, private _router: Router) {}

  list: Department[] = [];

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this._sharedservice.get().subscribe((data:[Department]) => {
      this.list = data;
    });
  }

  onEdit(id: number) {
    this._router.navigate(['/department/' + id]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure??')) {
      this._sharedservice.delete(id).subscribe((res:number) => {
        if (res > 0) this.getList();
      });
    }
  }

  onAdd() {
    this._router.navigate(['/department/0']);
  }
}
