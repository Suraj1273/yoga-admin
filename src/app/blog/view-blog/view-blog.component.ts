import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  blogList:any;
  imageUrl:any;
  constructor(private service:ServiceService) {}

  ngOnInit(): void {
    this.imageUrl = this.service.imageUrl;
    this.getAllBlog();
  }

  getAllBlog(){
    this.service.getAllBlog().subscribe((res:any)=>{
      this.blogList =  res.data;
      // console.warn(this.userlist);
    })
  }

  deleteBlog(id:any){
   let val={
    "_id":id,
    "isActive":false
   };
   this.service.createBlog(val).subscribe((res:any)=>{
    if(res.status == "ok"){
      alert(res.msg);
      location.reload();
    }
    else{
      alert('something went wrong');
    }
   });

  }
}
