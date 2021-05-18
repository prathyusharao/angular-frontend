import { Injectable } from '@angular/core';
import { Submitclaims } from './submitclaims';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8099/api/v1/employees";

  private baseURL1 = "http://localhost:8096/api/submitclaims";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: string, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: string): Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`);
  }


  getEmployeesList1(): Observable<Submitclaims[]>{
    return this.httpClient.get<Submitclaims[]>(`${this.baseURL1}`);
  }

  createEmployee1(submitclaims: Submitclaims): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, submitclaims);
  }

  getEmployeeById1(id: string): Observable<Submitclaims>{
    return this.httpClient.get<Submitclaims>(`${this.baseURL1}/${id}`);
  }

  updateEmployee1(id: string, submitclaims: Submitclaims): Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${id}`, submitclaims);
  }

  deleteEmployee1(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL1}/${id}`);
  }
}

