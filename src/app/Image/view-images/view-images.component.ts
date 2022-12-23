import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.scss']
})
export class ViewImagesComponent implements OnInit {
  imagedetails:any = [];
  constructor(private service:ServiceService) { }
  
  ngOnInit(): void {
    this.getSlider(1)
  }

  getSlider(data:any){
    this.service.getSlider(data).subscribe((res:any)=>{
      this.imagedetails =  res.user;
      console.log(this.imagedetails,'adfsadf')
    })
  }

}