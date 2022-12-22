import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  userlist:any = {};
  constructor(private service:ServiceService) {}
  
  getmentorsdetails:any = [];

  ngOnInit(): void {
    this.getAllMentor();
  }

  getAllMentor(){
    this.service.getAllMentor().subscribe((res:any)=>{
      console.log(res,'fgh');
      
      this.userlist =  res.user;
      // console.warn(this.userlist);
    })
  }


}
