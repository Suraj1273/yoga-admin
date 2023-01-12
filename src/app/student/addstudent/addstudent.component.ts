import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormControl, FormGroup  } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
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
  constructor(private service:ServiceService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
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
   data.isActive = true;
    this.service.createStudent(data).subscribe((res:any)=>{
     if(res.status == "ok"){
      alert(res.msg);
      this.router.navigate(['/view-student']);
     }
     else{
      alert('something went wrong')
     }
  })
}
  getstudentByid(id) {
    this.service.getstudentByid(id).subscribe((res:any) => {
       this.userdetails = res.Data;
    });
  }

}
