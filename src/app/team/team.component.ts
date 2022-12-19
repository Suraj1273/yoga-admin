import { Component, OnInit } from '@angular/core';
import {WebapiService} from '../webapi.service';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  formData:any={};
  teamList: any;
  teamId: any;
  managerList: any;
  managerName: any;
  someSubscription: any;
  constructor(private webapiservice:WebapiService,private router:Router,private activatedRoute: ActivatedRoute) {
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
    this.teamId = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.teamId){
      this.getTeamById(this.teamId);
    }
    this.getAllTeam();
    this.getAllManager();
  }


  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  insertTeam(data:any){
    // console.log(data);
    this.webapiservice.insertTeam(data).subscribe((res:any)=>{

     if(res.status == "ok"){
     alert(res.msg);
     this.formData = {};
     this.getAllTeam();

     }
     else{
      alert('Something went wrong');
     }

    });

    }

    getAllTeam(){
      this.webapiservice.getAllTeam().subscribe((res:any)=>{
       this.teamList = res.team;

      });
    }

    getTeamById(id:any){
      this.webapiservice.getTeamById(id).subscribe((res:any)=>{
        this.formData = res.team;
        this.formData.isActive = res.team.isActive ? 1 : 0;
      });
    }

    deleteTeam(id:any){
      let user = confirm('Are you sure you want to delete');

      if(user){
       let data = {
        _id: id,
        isActive: false
       }
        this.webapiservice.deleteTeam(data).subscribe((res:any)=>{
          console.log(res,'------------');
          if(res.status == "ok"){
            alert('Delete successfull');
            this.router.navigate(['/team'])

            }
            else{
             alert('Something went wrong');
            }
         })
      }

    }

    getAllManager(){
      this.webapiservice.getAllManager().subscribe((res:any)=>{
        // console.log(res.user,'manager list---');
       this.managerList = res.user;
      });
    }

}
