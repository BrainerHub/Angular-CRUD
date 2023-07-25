import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Department } from './model/department';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44332/api';

  constructor(private http: HttpClient) {}

  get(): Observable<Department[]> {
    return this.http.get<Department[]>(this.APIUrl + '/department');
  }

  getById(id: number): Observable<Department> {
    return this.http.get<Department>(
      this.APIUrl + '/department/GetById?id=' + id
    );
  }

  save(department: Department): Observable<number> {
    return this.http.post<number>(this.APIUrl + '/department', department);
  }

  update(id: number, department: Department) {
    return this.http.put<number>(
      this.APIUrl + '/department/?id=' + id,
      department
    );
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.APIUrl}/department?id=${id}`);
  }

  
}
