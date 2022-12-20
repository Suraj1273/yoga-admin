import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
 details:any={};
 usersdata:any={};
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  studentData(data:any){
    if(data == ""){
      alert('plzzz enter detalis');
    }else{ 
       this.details = data;
       console.log(this.details);
    }
  }
  createStudent(data:any){
   this.service.createStudent(data).subscribe((res)=>{
     console.log(res);
  })
  }
  
}
