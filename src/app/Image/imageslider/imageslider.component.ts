import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent implements OnInit {
  formData:any={};
  result:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getimagevalues();
  }

  getimagevalues(){
    console.log(this.formData);
  }

  createSlider(data:any){
    this.service.createSlider(data).subscribe((res)=>{
       this.result = res;
       console.log(this.result,'dsafsfadsfasasdfsadfdfsfsdaf');
    })
  }

}
