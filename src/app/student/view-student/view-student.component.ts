import { Component, OnInit } from "@angular/core";
import { ServiceService } from "src/app/services/service.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-view-student",
  templateUrl: "./view-student.component.html",
  styleUrls: ["./view-student.component.scss"],
})
export class ViewStudentComponent implements OnInit {
  userList:any = {};
  id:any;
  constructor(private service: ServiceService, private rout:Router) {}

  ngOnInit(){
    this.getstudent(1);
  }

  getstudent(data: any) {
    this.service.getstudent(data).subscribe((res:any) => {
       this.userList =  res.Data;
    });
  }

}
