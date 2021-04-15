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
import { LessonSwitchComponent } from './lesson-switch/lesson-switch.component';
import { BasicModComponentComponent } from './basic-mod-component/basic-mod-component.component';

const APP_ROUTES: Route[] = [{path:'app', component:KardComponentComponent},
{path:'register', component:RegisterComponentComponent},
{path: 'mod', component:BasicModComponentComponent},
{path:'', redirectTo:'/app',pathMatch:'full'},
{path:'**', redirectTo:'/app',pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent,
    KardComponentComponent,
    NavComponentComponent,
    FootComponentComponent,
    RegisterComponentComponent,
    LessonSwitchComponent,
    BasicModComponentComponent
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
