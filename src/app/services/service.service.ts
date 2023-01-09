import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  // private url = "http://34.203.244.83:3000/";

  private url = "http://localhost:3000/";
  public imageUrl = "http://localhost:3000/public/images/";

  constructor(private data: HttpClient) {}
  createStudent(data: any) {
    return this.data.post(this.url + "api/v1/createStudent", data);
  }

  getstudent(data: any) {
    return this.data.get(this.url + "api/v1/student");
  }

  getstudentByid(id) {
    return this.data.get(this.url + "api/v1/student/" + id);
  }

  createMentor(data: any) {
    return this.data.post(this.url + "api/v1/createMentor", data);
  }

  getAllMentor(id = "") {
    return this.data.get(this.url + "api/v1/getAllMentor");
  }
  getMentorById(id:any) {
    return this.data.get(this.url + "api/v1/getMentorById/"+id);
  }

  createSlider(data: any) {
    return this.data.post(this.url + "api/v1/createSlider", data);
  }

  getSlider(id = "") {
    return this.data.get(this.url + "api/v1/getSlider");
  }
  getSliderById(id:any) {
    return this.data.get(this.url + "api/v1/getimagesliderById/"+id);
  }

  createCategory(data: any) {
    return this.data.post(this.url + "api/v1/createcategory", data);
  }

  getAllCategory(id = "") {
    return this.data.get(this.url + "api/v1/getAllCategory");
  }

  getCategoryById(id) {
    return this.data.get(this.url + "api/v1/getCategoryById/" + id);
  }

  createCourse(data: any) {
    return this.data.post(this.url + "api/v1/createCourse", data);
  }
  getAllCourse(id=""){
   return this.data.get(this.url + 'api/v1/getAllCourse');
}
getCourseByid(id) {
  return this.data.get(this.url + "api/v1/getCourseById/" + id);
}
createEmploye(data:any){
  return this.data.post(this.url + "api/v1/createEmploye",data);
}

getEmploye(id=""){
 return this.data.get(this.url +'api/v1/getEmploye');
}

getEmployeById(id){
  return this.data.get(this.url + "api/v1/getEmployeById/" + id)
}

uploadImage(dam:any){
  console.log(dam);
return this.data.post(this.url+"api/v1/uploadImage",dam);
}

createBlog(data: any) {
  return this.data.post(this.url + "api/v1/createBlog", data);
}
getAllBlog(id=""){
  return this.data.get(this.url + 'api/v1/getAllBlog');
}
getBlogById(id){
  return this.data.get(this.url + "api/v1/getBlogById/" + id)
}


}
