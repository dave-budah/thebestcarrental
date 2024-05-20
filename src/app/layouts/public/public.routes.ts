import {Route} from "@angular/router";
import {HomeComponent} from "../../views/public/home/home.component";
import {AboutComponent} from "../../views/public/about/about.component";
import {PublicComponent} from "./public.component";
import {BlogComponent} from "../../views/public/blog/blog.component";


export const routes: Route[] = [
  {
    path: '',
    component: PublicComponent,
    title: 'Home',
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      }
    ]
  }
]
