import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  private url = "http://34.203.244.83:3000/";

  private url1 = "http://localhost:3000/";

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
    return this.data.post(this.url1 + "api/v1/createMentor", data);
  }

  getAllMentor(id = "") {
    return this.data.get(this.url1 + "api/v1/getAllMentor");
  }

  createSlider(data: any) {
    return this.data.post(this.url1 + "api/v1/createSlider", data);
  }

  getSlider(id = "") {
    return this.data.get(this.url1 + "api/v1/getSlider");
  }

  createCategory(data: any) {
    return this.data.post(this.url1 + "api/v1/createcategory", data);
  }

  getAllCategory(id = "") {
    return this.data.get(this.url1 + "api/v1/getAllCategory");
  }

  getCategoryByid(id) {
    return this.data.get(this.url + "api/v1/getAllCategory/" + id);
  }

  createCourse(data: any) {
    return this.data.post(this.url1 + "api/v1/createCourse", data);
  }
  getAllCourse(id=""){
   return this.data.get(this.url1 + 'api/v1/getAllCourse');
}
getCourseByid(id) {
  return this.data.get(this.url1 + "api/v1/getCourseById/" + id);
}

}
