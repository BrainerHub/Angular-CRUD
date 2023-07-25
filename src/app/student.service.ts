import { Injectable } from '@angular/core';
import { Students } from './model/students';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly APIUrl = 'https://localhost:44332/api';

  constructor(private http: HttpClient) { }

  get(): Observable<Students[]> {
    return this.http.get<Students[]>(this.APIUrl + '/student');
  }

  getById(id: number): Observable<Students> {
    return this.http.get<Students>(
      this.APIUrl + '/student/GetById?id=' + id
    );
  }
  save(students: Students): Observable<number> {
    return this.http.post<number>(this.APIUrl + '/student', students);
  }

  update(id: number, students: Students) {
    return this.http.put<number>(
      this.APIUrl + '/student/?id=' + id,
      students
    );
  }
  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.APIUrl}/students?id=${id}`);
  }
}
