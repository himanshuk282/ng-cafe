import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderNowComponent } from './pages/order-now/order-now.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:"full"},
    {path:'about',component:AboutComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'contact',component:ContactComponent},
    {path:'order-now',component:OrderNowComponent},
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'/not-found'},
];
