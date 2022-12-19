import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebapiService} from '../../webapi.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: any={};

  constructor(private webapiservice:WebapiService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  doLogin(data:any){
   console.log(data);
   this.webapiservice.doLogin(data).subscribe((res:any)=>{
    console.log(res);
    if(res.status == "ok"){
      sessionStorage.setItem('loginId',res.user._id);
      sessionStorage.setItem('name',res.user.name);
      sessionStorage.setItem('type',res.user.type);
      this.router.navigate(['/dashboard']);
    }
    else{
      alert(res.msg);
    }
   })

  }
}
