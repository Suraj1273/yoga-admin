import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.scss']
})
export class AddmentorComponent implements OnInit {
  formData:any={};
  constructor(private service:ServiceService,private router:Router) {
  }

  ngOnInit(): void {

    }

    selectThumb(e){
      const formData = new FormData();
       formData.append('image',e.target.files[0]);
       formData.append('type','return');
       this.service.uploadImage(formData).subscribe((res: any) => {
          if(res.status == "ok"){
            this.formData.thumb = res.imageName
           }
           else{
            alert("something went wrong")
           }
        });
    }
    selectPicture(e){
      const formData = new FormData();
      formData.append('image',e.target.files[0]);
      formData.append('type','return');
      this.service.uploadImage(formData).subscribe((res: any) => {
         if(res.status == "ok"){
          this.formData.picture = res.imageName
         }
         else{
          alert("something went wrong")
         }
       });
    }
    createMentor(data:any){
        this.service.createMentor(data).subscribe((res:any)=>{
    if(res.status=="ok"){
    alert(res.msg);
    this.router.navigate(['/mentors'])
   }
   else{
    alert(res.msg);
   }
       })
  }


}

