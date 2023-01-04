import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryDetails:any={};
  response:any= [];
  catId: any;
  routeSub: any;
  userdetails:any;
  constructor(private http:ServiceService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      return  this.routeSub  = params['id']
    });

    if(this.routeSub){
      console.log(this.routeSub,'suraj');
      this.getCategoryById(this.routeSub)
    }
  }

 createCategory(data:any){
    this.http.createCategory(data).subscribe((res:any)=>{
      this.categoryDetails = res.Data;
      console.log(res,'---------')
    })
 }

 getCategoryById(id) {
    this.http.getCategoryById(id).subscribe((res:any) => {
       this.categoryDetails = res.Data;
     console.log(res.Data,'-----------------------------');
    });
  }
 }
 
