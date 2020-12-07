import { Routes } from '@angular/router'
import { TestComponent } from './test/test.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { CategoriesMainComponent } from './categories-main/categories-main.component'
import { SingleCategoryComponent } from './single-category/single-category.component'
import {MidSectionHomepageComponent} from './mid-section-homepage/mid-section-homepage.component'
import {AboutUsComponent} from './about-us/about-us.component'
import {ContactComponent} from './contact/contact.component'
import {CardSliderComponent} from './card-slider/card-slider.component'

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', component: TestComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/mid', component: MidSectionHomepageComponent },
  { path: 'categories', component: CategoriesMainComponent },
  { path: 'categories/:type', component: SingleCategoryComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home/card-slider', component: CardSliderComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]
