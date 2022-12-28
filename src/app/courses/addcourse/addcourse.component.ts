import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
 details:any=[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.createCourse(1);
  }
  createCourse(data:any){
   this.service.createCourse(data).subscribe((res)=>{
     this.details = res;
     console.log(this.details,'adsfsadf')       
     })
   }
  }

