import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
 details:any=[];
 coursedetails:any={}
  constructor(private service:ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      return  this.route  = params['id']
    });
  
    if(this.route){
      console.log(this.route);
      this.getCourseById(this.route)
    }
  }
  createCourse(data:any){
   this.service.createCourse(data).subscribe((res)=>{
     this.details = res;
     console.log(this.details,'adsfsadf')       
     })
   }
   getCourseById(id) {
    this.service.getCourseByid(id).subscribe((res:any) => {
      this.coursedetails =  res.Data;
    console.log(this.details,'-----------dsafdasfdafsda------------------');
   });
  }
  }

