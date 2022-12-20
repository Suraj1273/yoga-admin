import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private url = "http://localhost:3000/";
constructor(private data: HttpClient) { 

}

createStudent(data:any){
  return this.data.post(this.url+'api/v1/createStudent',data)
}


}
