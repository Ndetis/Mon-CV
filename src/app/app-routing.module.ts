import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCVComponent } from './components/create-cv/create-cv.component';
import { HomeComponent } from './components/home/home.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  {
    path : '',redirectTo:'verification',pathMatch:'full'
  },
  {
    path : 'verification',component:VerificationComponent
  },
  {
    path : 'createCV',component:CreateCVComponent

  },
  {
    path : 'Home',component:HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
