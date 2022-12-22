import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-addmentor',
  templateUrl: './addmentor.component.html',
  styleUrls: ['./addmentor.component.scss']
})
export class AddmentorComponent implements OnInit {
  data:any=[];
  formData:any={};
  constructor(private service:ServiceService){ 
  }

  ngOnInit(): void {
    this.createMentor(1)
    }
    createMentor(data:any){
        this.service.createMentor(data).subscribe((res:any)=>{
           this.data  = res;
           console.log(this.data);
       })
    }
}

