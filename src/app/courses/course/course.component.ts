import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseData: any=[]

  constructor(private service:ServiceService,private route:ActivatedRoute) { }
 catId:any;
 response:any = [];
  ngOnInit(): void {
  //  this.getCourseByid(1);
  //  this.route.params.subscribe(params => {
  //   return  this.catId  = params['id']
  // });
  // console.log(this.catId,'asdf');
  this.getAllCourse()
  }
  getCourseByid(id:any){
    this.service.getCourseByid(id).subscribe((res:any)=>{
      this.response = res;
      console.log(res._id,'asdfsadfasf')
    })
  }
  getAllCourse(){
    this.service.getAllCourse().subscribe((res:any)=>{
      this.courseData = res.user;
      console.log(this.courseData,'asdfsadfasf')
    })
  }
}
