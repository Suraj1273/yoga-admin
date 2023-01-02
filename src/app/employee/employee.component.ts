import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeDetails:any={};
  getEmployeDetails:any;
  constructor(private service:ServiceService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getEmploye(1);
        this.route.params.subscribe(params=>{
          return this.route = params['Id'];
        });
        if(this.route){
          console.log(this.route,'=========adfasasdf')
          this.getEmployeById(this.route);
        }
    }
    createEmploye(data:any){
          this.service.createEmploye(data).subscribe((res)=>{
             console.log(res,'asdf')
          })
    }
    getEmploye(data:any){
      this.service.getEmploye(data).subscribe((res:any)=>{
              this.getEmployeDetails = res.user;
              console.log(this.getEmployeDetails,'asjksdfjksjdf')
      })
    }
    getEmployeById(id){
      this.service.getEmployeById(id).subscribe((res:any)=>{
        console.log(res,'=====');
        this.employeDetails = res.Data;
      });

    }
  }

  