import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
 details:any={};
  constructor() { }

  ngOnInit(): void {
    console.log(this.details,'-----------')
  }
  // getvalues(data:any){
  // this.details = data;
  // console.log(this.details,'--------------')
  // }

}
