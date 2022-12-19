import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  formData:any={};
  cData:any={};
  checkList: any;
  columnList: any;
  checkName: any;
  someSubscription: any;

  constructor(private webapiservice:WebapiService,
    private router:Router,
    private activatedRoute: ActivatedRoute) {
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
    this.getAllCheck();
  }

  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  insertCheck(data:any){
  data.isActive = true;
  this.webapiservice.insertCheck(data).subscribe((res:any)=>{
    if(res.status == "ok"){
      alert(res.msg);
      this.formData = {};
      this.getAllCheck();
      }
      else{
       alert('Something went wrong');
      }

  });
  }

  getAllCheck(){
    this.webapiservice.getAllCheck().subscribe((res:any)=>{
      console.log(res,'-------------');

     this.checkList = res.setting;
     console.log(this.checkList);

    });
  }

  getCheckById(id:any,name:any){
   this.cData._id = id;
   this.checkName = name
   let index = this.checkList.findIndex(x=>x._id == id);
  //  console.log(index);
  if(index >=0){
    console.log(this.checkList[index]);
    this.columnList = this.checkList[index].checkFeilds;
    console.log(this.columnList);

  }
  }
  deletetable(id:any){
   console.log(id);

  }

  insertColumn(data:any){
    if(!data._id){
      alert("Please select a Check to add feilds");
    }
    else{

      let index = this.checkList.findIndex(x=>x._id == data._id)
      if(index >=0){
       if(this.checkList[index].checkFeilds.length > 0){
         let getArr = this.checkList[index].checkFeilds;
         getArr.push(data.field);
         data.checkFeilds = getArr;
        }
        else{
           let arr = [];
           arr.push(data.field);
           data.checkFeilds = arr;
        }
       //  console.log(data);
        this.webapiservice.insertCheckField(data).subscribe((res:any)=>{
         // console.log(res);
        if(res.status == "ok"){
         alert(res.msg);
         this.cData = {};
         this.router.navigate(['/check']);
        }
        else{
         alert('Something went wrong');
        }
        });

      }

    }
  }

}
