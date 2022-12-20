import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent implements OnInit {
  details:any={};
  constructor() { }

  ngOnInit(): void {
  }
  getvalue(data:any){
      this.details = data;
      console.log(data)
  }
}
