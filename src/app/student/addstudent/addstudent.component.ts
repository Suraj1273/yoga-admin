import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormControl, FormGroup  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
 studentdetails:any={};
  userList: [];
  routeSub: any;
  userdetails:any=[];
  constructor(private service:ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id
   //   console.log(params['id']);
      return  this.routeSub  = params['id']
    });

    if(this.routeSub){
      console.log(this.routeSub);
      this.getstudentByid(this.routeSub)
    }
    console.log(this.userdetails);
  }
  studentData(data:any){
       this.studentdetails = data;
       console.log(this.studentdetails);
    }
    
  createStudent(data:any){
    this.userdetails.isActive = true;
   this.service.createStudent(this.userdetails).subscribe((res:any)=>{
     this.userList = res;
     console.log(this.userList);
  })
}
  getstudentByid(id) {
    this.service.getstudentByid(id).subscribe((res:any) => {
       this.userList =  res.Data;

       this.userdetails = res.Data;
     console.log(res,'-----------------------------');
    });
  }

}
