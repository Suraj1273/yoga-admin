import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { WebapiService } from '../webapi.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  formData:any={};
  userList: any;
  userId: any;
  mangCounter: boolean;
  someSubscription: any;
  clientList: any;

  constructor(private webapiservice:WebapiService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.someSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Here is the dashing line comes in the picture.
          // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
          this.router.navigated = false;
        }
      });
    }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.userId){
      this.getUserById(this.userId);
    }
    this.getAllUser();
    this.getClient();
  }

  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  insertUser(data:any){
  // console.log(data);
  this.webapiservice.insertUser(data).subscribe((res:any)=>{

   if(res.status == "ok"){
   alert('Register successfull');
   this.formData = {};
   this.getAllUser();

   }
   else{
    alert('Something went wrong');
   }

  });

  }

  getAllUser(){
    this.webapiservice.getAllUser().subscribe((res:any)=>{
     this.userList = res.user;
    });
  }

  getUserById(id:any){
    this.webapiservice.getUserById(id).subscribe((res:any)=>{
    this.formData = res.user;
    this.formData.isActive = res.user.isActive ? 1 : 0;
    if(res.user.type == 2){
     this.mangCounter = true;
    }
    else{
   this.mangCounter = false;
    }
    });
  }

  deleteUser(id:any){
    let user = confirm('Are you sure you want to delete');

    if(user){
      let data = {
        _id: id,
        isActive: false
      }
      this.webapiservice.deleteUser(data).subscribe((res:any)=>{
        if(res.status =="ok"){
          alert(res.msg);
          // location.reload();
           this.router.navigate(['/employee'])
        }
        else{
          alert('Something went wrong');
        }
       })
    }

  }

  hideCheck(e:any){
    // console.log(e.target.value);
    if(e.target.value == 2){
      this.mangCounter = true;
    }
    else{
      this.mangCounter = false;
    }

    }

    getClient(){
      this.webapiservice.getAllClient().subscribe((res:any)=>{
        // console.log(res);
        this.clientList = res.user;
      });
    }
}
