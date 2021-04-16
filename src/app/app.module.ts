import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule,Route } from '@angular/router'
import { AppComponent } from './app.component';
import { KardComponentComponent } from './kard-component/kard-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { FootComponentComponent } from './foot-component/foot-component.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LessonSwitchComponent } from './lesson-switch/lesson-switch.component';
import { BasicModComponentComponent } from './basic-mod-component/basic-mod-component.component';
import { ModalidadResultComponentComponent } from './modalidad-result-component/modalidad-result-component.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { LoginGuard } from './guards/login.guard';

const APP_ROUTES: Route[] = [{path:'app', component:KardComponentComponent},
{path:'register', component:RegisterComponentComponent},
{path:'login', component:LogInComponent},
{path:'auth/login',component:LogInComponent},
{path: 'mod', component:BasicModComponentComponent, canActivate:  [LoginGuard]},
{path: 'result', component:ModalidadResultComponentComponent, canActivate:  [LoginGuard]},
{path:'auth/register', component:RegisterComponentComponent},
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
    BasicModComponentComponent,
    ModalidadResultComponentComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [Title,{provide: HTTP_INTERCEPTORS,useClass: AuthTokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
