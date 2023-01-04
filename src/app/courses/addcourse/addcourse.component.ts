import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
 details:any=[];
 empForm: FormGroup;
 coursedetails:any={};
  constructor(private service:ServiceService, private route: ActivatedRoute) {
  this.empForm = new FormGroup({
    coursetitle: new FormControl('',[Validators.required]), 
    status: new FormControl('',[Validators.required]),
    courseDesc: new FormControl('',[Validators.required]),
    courseintro: new FormControl('',[Validators.required]),
    courseintrovideoId: new FormControl('',[Validators.required]),
    selectoption: new FormControl('',[Validators.required]),
    metaTitle: new FormControl('',[Validators.required]),
    metaKeyword: new FormControl('',[Validators.required]),
    metaDescription: new FormControl('',[Validators.required]),
  })
}

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
   getCourseById(id:any) {
    this.service.getCourseByid(id).subscribe((res:any) => {
      this.coursedetails =  res.data;   
    });
  }
  }

