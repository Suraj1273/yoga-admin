import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { WebapiService } from '../webapi.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  checkList: any;
  formData:any={};
  proData:any={};
  insData:any={};
  checkArr:any=[];
  updateCheckArr:any=[];
  insertCheckArr:any=[];
  clientList: any;
  clientId:any;
  processArr:any=[];
  proCounter:boolean = false;
  processList: any;
  clientImgsrc: any;
  someSubscription: any;
  isActive:boolean = true;
  constructor(private WebApiService:WebapiService,private activatedRoute:ActivatedRoute,
    private router:Router,private modalService: NgbModal) {
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

    this.clientId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getAllCheck();
    this.getClient();
    if(this.clientId){
      this.proCounter = true;
      this.getClientById(this.clientId);
    }
    this.formData.processList = [{
      'process':'',
      'checkList':this.checkList
    }];
    console.log(this.formData,'find-------------------------');
    
  }

  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  closeModal(){
    location.reload();
  }
  updateProcess(data:any){
    data._id = this.clientId;
    let newObj = {
      process:data.process,
      altprocess:data.altprocess,
      checks:data.checks
    }
    data.processList[data.indexToUpdate] = newObj;
    // console.log(data);
    this.WebApiService.insertUser(data).subscribe((res:any)=>{
     console.log(res);
     if(res.status == "ok"){
       alert(res.msg);
       this.modalService.dismissAll();
     }
     else{
       alert(res.msg);
     }

    });

  }

  getProcessChecksByName(e:any){
  let val = {
    processName:e.target.value
  }
  // this.WebApiService.getProcessChecksByName(val).subscribe((res:any)=>{
  //   console.log(res);
  //    if(res.length >0){
  //      alert('processName Already Exist');
  //      e.target.value = '';
  //    }
  // });

  }

     insertProcess(data:any){
       data._id = this.clientId;
       let newObj = {
        process:data.process,
        altprocess:data.altprocess,
        checks:data.checks
      }
      data.processList.push(newObj);
      // console.log(data);
    this.WebApiService.insertUser(data).subscribe((res:any)=>{
     if(res.status == "ok"){
       alert(res.msg);
       this.modalService.dismissAll();
     }
     else{
       alert(res.msg);
     }
    });

     }

     getInsertChecks(e:any){
      if (e.target.checked == true) {
        this.insertCheckArr.push(e.target.value);
      }else{
        var index = this.insertCheckArr.indexOf(e.target.value);
        this.insertCheckArr.splice(index, 1);
      }
      // console.log(this.insertCheckArr);
     this.insData.checks = JSON.stringify(this.insertCheckArr);
     }

     getUpdateChecks(e:any){
      if (e.target.checked == true) {
        this.updateCheckArr.push(e.target.value);
      }else{
        var index = this.updateCheckArr.indexOf(e.target.value);
        this.updateCheckArr.splice(index, 1);
      }
      console.log(this.updateCheckArr);
     this.proData.checks = JSON.stringify(this.updateCheckArr);
     }
     getChecksArr(e:any,i:any){

        if (e.target.checked == true) {
    this.checkArr.push(e.target.value);
  }else{
    var index = this.checkArr.indexOf(e.target.value);
    this.checkArr.splice(index, 1);
  }
  console.log(this.checkArr);
 this.formData.processList[i].checks = JSON.stringify(this.checkArr);
     }

     checkThis(id){
      if(this.updateCheckArr.length>0){
        let exist = this.updateCheckArr.filter(x => x == id);
        return exist.length > 0;
      }else{
        return false;
      }
  }

  deleteClient(id:any){
    let val = confirm("Are you sure you want to delete");
    if(val){
      let data = {
        _id: id,
        isActive: false
      }
      this.WebApiService.deleteUser(data).subscribe((res:any)=>{
        // console.log(res,'------------');
        if(res.status =="ok"){
          alert(res.msg);
          this.router.navigate(['/client'])
        }
        else{
          alert('Something went wrong');
        }
       })
    }
  }

  getProcessCheckById(id:any){
    // this.WebApiService.getProcessChecks(id).subscribe((res:any)=>{
    //   // console.log(JSON.parse(res[0].processChecks));
    //   this.proData.processName = res[0].processName;
    //   this.proData.processChecks = JSON.parse(res[0].processChecks);
    //   this.updateCheckArr = JSON.parse(res[0].processChecks);
    //   // console.log(res[0].processChecks);
    // });
  }

  // addProcess() {
  //  let length = this.formData.processList.length

  //   for(let check of this.checkList){
  //     delete check['selected'];
  //     check['selected'+length] = false
  //   }


  //   this.formData.processList.push(
  //     {
  //       'process':'',

  //     }
  //   );
  //   console.log( this.formData.processList[length],'------------------',length);

  //   this.formData.processList[length]['option'] = this.checkList
  //   this.formData.processList[length]['process'] = ''
  //   console.log(this.formData.processList);
  // }

  addProcess1(){
    this.formData.processList.push({
      'checkList':this.checkList
    });
    this.checkArr = [];
  }

  //new code from Ayush

  getLogo(e:any){
    if (e.target.files) {
      this.formData.img = e.target.files[0];
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.clientImgsrc = reader.result;
      reader.readAsDataURL(file);
   }
  }

  removePreview(e:any){
    this.clientImgsrc = '';
    e.value = '';
   }

   getAllCheck(){
    this.WebApiService.getAllCheck().subscribe((res:any)=>{
      // console.log(res.setting,'checks');
     this.checkList = res.setting;

     this.formData.processList[0].checkList = res.setting;
    });
  }

   insertClient(data:any){
    if(this.clientId){
      data._id = this.clientId;
    }
    data.type = 3;
    data.isActive =true;
 this.WebApiService.insertUser(data).subscribe((res:any)=>{

 if(res.status == "ok"){
   alert(res.msg);
  //  location.reload();
  this.formData = {};
  this.getClient();
 }
 else{
   alert("something went wrong");
 }
 });

  }


  getClient(){
    this.WebApiService.getAllClient().subscribe((res:any)=>{
      // console.log(res);
      this.clientList = res.user;
    });
  }

  getClientById(id:any){
    this.WebApiService.getUserById(id).subscribe((res:any)=>{
      console.log(res.user,'client------------');
       this.formData = res.user;
       this.processList = res.user.processList;
    });
  }

  deleteProcess(data:any,arr:any){
    // console.log(data);
    let prompt = confirm("Are you sure you want to delete");
    if(prompt){
      data._id = this.clientId;
      let index = arr.findIndex(x=>x.process == data.process);
      console.log(index);
      arr.splice(index,1);
      data.processList = arr;
      this.WebApiService.insertUser(data).subscribe((res:any)=>{
       console.log(res);
       if(res.status == "ok"){
         alert(res.msg);
       }
       else{
         alert(res.msg);
       }

      });
    }
    else{
      console.log('Canceled By User');

    }

  }

  openModal( exampleModalContent,data:any,arr:any) {
    this.modalService.open( exampleModalContent, { size : 'sm' } );
    if(data){
      let index = arr.findIndex(x=>x.process == data.process);
      this.proData.process = data.process;
      this.proData.altprocess = data.altprocess;
      this.proData.indexToUpdate = index;
      this.proData.processList = arr;
      this.updateCheckArr = JSON.parse(data.checks);
    }

  }
  addProcessModal( exampleModalContent,data:any ) {
    this.modalService.open( exampleModalContent, { size : 'sm' } );
    // console.log(data);
    if(data){
      this.insData.processList = data;
    }
  }


}
