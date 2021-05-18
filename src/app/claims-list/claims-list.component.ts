import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Submitclaims } from '../submitclaims';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent implements OnInit {
  submitclaimss: Submitclaims[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit():void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList1().subscribe(data => {
      this.submitclaimss = data;
    });
  }

  deleteEmployee(id: string){
    this.employeeService.deleteEmployee1(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}

