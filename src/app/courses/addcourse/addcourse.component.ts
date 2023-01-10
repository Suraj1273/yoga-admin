import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
 details:any;
 coursedetails:any={};
  constructor(private service:ServiceService, private route: ActivatedRoute,private router:Router) {

}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      return  this.route  = params['id']
    });

    if(this.route){
      this.getCourseById(this.route)
    }
  }
  createCourse(data:any){
    if(!this.route){
      data.isActive = true;
    }
   this.service.createCourse(data).subscribe((res:any)=>{
     if(res.status === 'ok'){
   alert(res.msg);
   this.router.navigate(['/course']);
     }
     else{
       alert('something went wrong');
     }
     })
   }
   getCourseById(id:any) {
    this.service.getCourseByid(id).subscribe((res:any) => {
      this.coursedetails =  res.data;
    });
  }

  getSlug(e:any){
   let value = e.target.value;
   let final = value.split(' ').join('-').toLowerCase();
   this.coursedetails.slug = final;
  }
  }

