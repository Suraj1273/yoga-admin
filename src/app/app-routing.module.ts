import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeeComponent } from './employee/employee.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

import { ExportComponent } from './export/export.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { BulkApplicationComponent } from './bulk-application/bulk-application.component';
// import {AuthGuard} from './auth.guard';
import { ClientComponent } from './client/client.component';
import { ApplicationComponent } from './application/application.component';
import { ChecksComponent } from './checks/checks.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { CourseComponent } from './courses/course/course.component';
import { AddcourseComponent } from './courses/addcourse/addcourse.component';
import { MentorsComponent } from './Mentor/mentors/mentors.component';
import { AddmentorComponent } from './Mentor/addmentor/addmentor.component';
import { ImagesliderComponent } from './Image/imageslider/imageslider.component';
import { ViewImagesComponent } from './Image/view-images/view-images.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { ViewCategoriesComponent } from './category/view-categories/view-categories.component';
import { SubcategoryComponent } from './category/subcategory/subcategory.component';
import { ContentComponent } from './courses/content/content.component';
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent},
  { path: 'client', component: ClientComponent },
  // { path: 'client/:id', component: ClientComponent },
  { path: '', redirectTo: '/course', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'team/:id', component: TeamComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'setting', component: SettingsComponent },
  // { path: 'export', component: ExportComponent },
  // { path: 'new-application', component: NewApplicationComponent },
  // { path: 'application', component: ApplicationComponent },
  // { path: 'checks', component: ChecksComponent },
  { path: 'bulk-application', component: BulkApplicationComponent },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  {path: 'addstudent', component: AddstudentComponent},
  {path: 'addstudent/:id', component: AddstudentComponent},
  {path: 'view-student', component: ViewStudentComponent},
  {path: 'course', component: CourseComponent},
  {path: 'addcourse', component: AddcourseComponent},
  {path: 'mentors', component: MentorsComponent},
  {path: 'addmentor', component: AddmentorComponent},
  {path: 'imageslider', component:ImagesliderComponent},
  {path: 'imageslider/:id', component:ImagesliderComponent},
  {path: 'view-images', component:ViewImagesComponent},
  {path: 'add-category', component:AddCategoryComponent},
  {path: 'view-categories', component:ViewCategoriesComponent},
  {path: 'subcategory', component:SubcategoryComponent},
  {path: 'add-category/:id', component:AddCategoryComponent},
  {path: 'content', component:ContentComponent},
  {path: 'content/:id',component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
