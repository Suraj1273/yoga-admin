import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryDetails:any={};
  response:any= [];
  catId: any;
  constructor(private http:ServiceService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      return  this.catId  = params['id']
    });
    console.log(this.catId);
    
  }
 createCategory(data:any){
    this.http.createCategory(data).subscribe((res)=>{
      this.response = res;
      console.log(this.response,'---------')
    })
 }
 
}
