import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseData: any=[];
  constructor(private service:ServiceService,private route:ActivatedRoute) { }
 catId:any;
 response:any = [];
 ngOnInit(): void {
  console.log(this.catId);
  this.getAllCourse()
  }
  getAllCourse(){
    this.service.getAllCourse().subscribe((res:any)=>{
      this.courseData = res.user;
      // console.log(this.courseData,'asdfsadfasf')
    })
  }
}
