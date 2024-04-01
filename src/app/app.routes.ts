import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:"full"},
    {path:'about',component:AboutComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'contact',component:ContactComponent},
    {path:'order-now',component:OrderNowComponent},
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'/not-found'},
];
