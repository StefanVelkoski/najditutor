import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavbarComponent } from './navbar/navbar.component';
// import { CountoModule } from 'angular2-counto';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnnouncementThumbnailComponent } from './announcement-thumbnail/announcement-thumbnail.component';
import { CategoriesMainComponent } from './categories-main/categories-main.component';
import { RegisterComponent } from './register/register.component';
import { RegisterTutorComponent } from './register-tutor/register-tutor.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccordionAllModule } from '@syncfusion/ej2-angular-navigations';
import { MidSectionHomepageComponent } from './mid-section-homepage/mid-section-homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { DataService } from './shared/dataservice.service'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriesMainComponent,
    AnnouncementThumbnailComponent,
    LoginComponent,
    RegisterComponent,
    RegisterTutorComponent,
    RegisterUserComponent,
    MidSectionHomepageComponent,
    AboutUsComponent,
    ContactComponent,
    CardSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AccordionAllModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
