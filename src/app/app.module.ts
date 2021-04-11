import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Route } from '@angular/router'

import { AppComponent } from './app.component';
import { KardComponentComponent } from './kard-component/kard-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { FootComponentComponent } from './foot-component/foot-component.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponentComponent } from './register-component/register-component.component';

const APP_ROUTES: Route[] = [{path:'inicio', component:AppComponent},
{path:'kanjis', component:KardComponentComponent},
{path:'register', component:RegisterComponentComponent},
{path:'', redirectTo:'/inicio',pathMatch:'full'},
{path:'**', redirectTo:'/inicio',pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent,
    KardComponentComponent,
    NavComponentComponent,
    FootComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
