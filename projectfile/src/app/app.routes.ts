import { Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { jsDocComment } from '@angular/compiler';
import { JsComponent } from './js/js.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JqueryComponent } from './jquery/jquery.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [


    {
        path:'html',
        component:HtmlComponent
    },
    {
        path:'css',
        component:CssComponent
    },
    {
        path:'js',
        component:JsComponent
    },
   {
    path:'bootstrap',
    component:BootstrapComponent
   },
   {
    path:'jquery',
    component:JqueryComponent
   },
   {
    path:'work',
    component:WorkComponent
   }
];
