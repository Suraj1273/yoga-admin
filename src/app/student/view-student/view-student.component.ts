import { Component, OnInit } from "@angular/core";
import { ServiceService } from "src/app/services/service.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-view-student",
  templateUrl: "./view-student.component.html",
  styleUrls: ["./view-student.component.scss"],
})
export class ViewStudentComponent implements OnInit {
  userList:any;
  id:any;
  filter:any={};
  p: number = 1;
  total:any
  constructor(private service: ServiceService, private router:Router) {}

  ngOnInit(){
    this.filter={
      pageNo:1,
      size:10
    };
    this.getstudent();
  }

  getstudent() {
    this.service.getstudent(this.filter).subscribe((res:any) => {
       this.userList = res.data;
       this.total = res.total;
       console.log(this.userList,'yyy');

    });
  }

  onTableDataChange(event: any) {
    this.filter.pageNo = event;
    this.getstudent();
    this.p = event;
    window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 }

 deleteStudent(id:any){
  let c = confirm("Are you sure you want to delete?");
  if(c){
    let val={
      "_id":id,
      "isActive":false
     }
     this.service.createStudent(val).subscribe((res:any)=>{
      if(res.status == "ok"){
        alert(res.msg);
        location.reload();
       }
       else{
        alert('something went wrong')
       }
   })
  }

 }

}
