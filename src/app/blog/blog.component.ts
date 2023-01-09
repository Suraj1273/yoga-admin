import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  formData:any={}
  blogId: any;
  url: any;
  constructor(private service:ServiceService,private router:Router,private acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.service.imageUrl;
    this.acroute.params.subscribe(params => {
      return  this.blogId  = params['id']
    });

    if(this.blogId){
      this.getBlogById(this.blogId);
    }

  }

  createBlog(data:any){
   if(!this.blogId){
     data.isActive = true;
   }
   this.service.createBlog(data).subscribe((res: any) => {
    console.log(res);
    if(res.status == "ok"){
      alert(res.msg);
      this.router.navigate(['/view-blog']);
    }
    else{
      alert('something went wrong');
    }
   });

  }

  selectBlogImage(e:any){
    const formData = new FormData();
      formData.append('image',e.target.files[0]);
      formData.append('type','return');
      this.service.uploadImage(formData).subscribe((res: any) => {
         if(res.status == "ok"){
          this.formData.image = res.imageName
         }
         else{
          alert("something went wrong")
         }
       });
  }

  getBlogById(id:any){
    this.service.getBlogById(id).subscribe((res:any)=>{
     this.formData = res.data
    });
  }
}
