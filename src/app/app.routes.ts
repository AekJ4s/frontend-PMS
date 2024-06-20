import { Routes } from '@angular/router';
import { HomeComponents } from './views/homecomponent/homecomponent.component';
import { LoadingComponent } from './views/loading/loading.component';
import { LoginComponent } from './views/logincomponent/login.component';
import { RegisterComponent } from './views/registercomponent/register.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

export const routes: Routes = [

  {path:'home',component: HomeComponents},
  {path:'loading',component: LoadingComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'notfound',component:NotfoundComponent},

  // {path'role/List',component:}
  // {path'role/:id',component:}
  // {path'role/create',component:}
  // {path'role/users/create',component:}
  // {path'role/users/list',component:}
  // {path'role/bin',component:}

  // {path'CBEs/list',component:}
  // {path'CBEs/create',component:}
  // {path'CBEs/:id',component:}
  // {path'CBEs/maturity/create',component:}
  // {path'CBEs/supervisor/create',component:}
  // {path'CBEs/history/list',component:}
  // {path'CBEs/history/:id',component:}
  // {path'CBEs/bin',component:}

  // {path'CBEsTargetResult/list',component:}
  // {path'CBEsTargetResult/:id',component:}
  // {path'CBEsTargetResult/target',component:}
  // {path'CBEsTargetResult/result',component:}
  // {path'CBEsTargetResult/history/list',component:}
  // {path'CBEsTargetResult/history/:id',component:}

  // {path'CBEsPlanning/list',component:}
  // {path'CBEsPlanning/:id',component:}
  // {path'CBEsPlanning/create',component:}
  // {path'CBEsPlanning/update:id',component:}
  // {path'CBEsPlanning/target/update:id',component:}
  // {path'CBEsPlanning/result/update:id',component:}
  // {path'CBEsPlanning/send/:id',component:}
  // {path'CBEsPlanning/history/',component:}
  // {path'CBEsPlanning/history/:id',component:}
  // {path'CBEsPlanning/history/target/:id',component:}
  // {path'CBEsPlanning/history/result/:id',component:}
  // {path'CBEsPlanning/bin/:id',component:}
  // {path'CBEsPlanning/report/:id',component:}
  // {path'CBEsPlanning/report/create-draft/:id',component:}
  // {path'CBEsPlanning/report/send/:id',component:}







































];

