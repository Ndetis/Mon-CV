import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { VerificationComponent } from './components/verification/verification.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab 
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { CreateCVComponent } from './components/create-cv/create-cv.component';
import { HomeComponent } from './components/home/home.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {ColorPickerModule} from 'primeng/colorpicker';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    VerificationComponent,
    CreateCVComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DividerModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    AccordionModule,
    FormsModule,
    InputNumberModule,
    CalendarModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
