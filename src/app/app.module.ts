import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplicationComponent } from './application/application.component';
import { ChecksComponent } from './checks/checks.component';
import { ExportComponent } from './export/export.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { BulkApplicationComponent } from './bulk-application/bulk-application.component';
import { ClientComponent } from './client/client.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CourseComponent } from './courses/course/course.component';
import { AddcourseComponent } from './courses/addcourse/addcourse.component';
import { AddmentorComponent } from './Mentor/addmentor/addmentor.component';
import { MentorsComponent } from './Mentor/mentors/mentors.component';
import { ImagesliderComponent } from './Image/imageslider/imageslider.component';
import { ViewImagesComponent } from './Image/view-images/view-images.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    EmployeeComponent,
    TeamComponent,
    SettingsComponent,
    ProfileComponent,
    ApplicationComponent,
    ChecksComponent,
    ExportComponent,
    NewApplicationComponent,
    BulkApplicationComponent,
    ClientComponent,
    AddstudentComponent,
    ViewStudentComponent,
    CourseComponent,
    AddcourseComponent,
    AddmentorComponent,
    MentorsComponent,
    ImagesliderComponent,
    ViewImagesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
