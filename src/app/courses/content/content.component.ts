import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contentData:any = {};
  Details:any = [];
  constructor(private service:ServiceService) { }
  ngOnInit(): void{
  }
  

  }
