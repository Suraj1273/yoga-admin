import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent implements OnInit {
  categoryData:any=[];
  formmodal:any;
  subDetails:any = {};
  categoryDetails:any={};
  userid:any={};
  constructor(private http:ServiceService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCategory(1)
  }

  getAllCategory(data:any){
    this.http.getAllCategory(data).subscribe((res:any)=>{
   this.categoryData = res.user;
   console.log(this.categoryData,'-----------');
   console.log(this.subDetails,'adfasdf')
    })
  }
  openMediumModal( mediumModalContent ) {
    this.modalService.open( mediumModalContent );
  }
  
  submitdata(){
    this.categoryDetails.subcategory.push(this.subDetails)
    this.createCategory();
  }
  createCategory(){
    this.http.createCategory(this.categoryDetails).subscribe((res)=>{
      // this.response = res;
      // console.log(this.response,'---------')
    })
 }
 getcategoryByid(id) {
  this.http.getCategoryByid(id).subscribe((res:any) => {
     this.userid =  res.Data;
   console.log(res,'-----------------------------');
  });
}
}