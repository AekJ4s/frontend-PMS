import { Routes } from '@angular/router';
import { HomeComponents } from './views/homecomponent/homecomponent.component';
import { LoadingComponent } from './views/loading/loading.component';
import { LoginComponent } from './views/logincomponent/login.component';
import { RegisterComponent } from './views/registercomponent/register.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { RoleListComponent } from './views/rolelistcomponent/rolelist.component';
import { RoleCreateComponent } from './views/rolecreatecomponent/rolecreate.component';
import { RoleCreateUserComponent } from './views/roleusercreate.component/roleusercreate.component';
import { RoleBinListComponent } from './views/rolebinlist.component/rolebinlist.component';
import { CBEsListComponent } from './views/cbeslist.component/cbeslist.component';
import { CBEsCreateComponent } from './views/cbescreate.component/cbescreate.component';
import { CBEsMaturityCreateComponent } from './views/cbesmaturitycreate.component/cbesmaturitycreate.component';
import { CBEsSupervisorCreateComponent } from './views/cbessupervisorcreate.component/cbessupervisorcreate.component';
import { CBEsHistoryListComponent } from './views/cbeshistorylist.component/cbeshistorylist.component';
import { CBEsHistoryComponent } from './views/cbeshistory.component/cbeshistory.component';
import { CBEsMaturityHistoryComponent } from './views/cbesmaturityhistory.component/cbesmaturityhistory.component';
import { CBEsSupervisorHistoryComponent } from './views/cbessupervisorhistory.component/cbessupervisorhistory.component';
import { CBEsBinListComponent } from './views/cbesbin.component/cbesbin.component';
import { CBEsTargetResultListComponent } from './views/cbestargetresultlist.component/cbestargetresultlist.component';

export const routes: Routes = [

  {path:'home',component: HomeComponents},
  {path:'loading',component: LoadingComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'role/list',component:RoleListComponent},
  {path:'role/create',component:RoleCreateComponent},
  {path:'role/users/create',component:RoleCreateUserComponent},
  {path:'role/bin/list',component:RoleBinListComponent},
  {path:'CBEs/list',component:CBEsListComponent},
  {path:'CBEs/create',component:CBEsCreateComponent},
  {path:'CBEs/maturity/create',component:CBEsMaturityCreateComponent},
  {path:'CBEs/supervisor/create',component:CBEsSupervisorCreateComponent},
  {path:'CBEs/history/list/:id',component:CBEsHistoryListComponent},
  {path:'CBEs/history/:id',component:CBEsHistoryComponent},
  {path:'CBEs/history/maturity/:id',component:CBEsMaturityHistoryComponent},
  {path:'CBEs/history/supervisor/:id',component:CBEsSupervisorHistoryComponent},
  {path:'CBEs/bin/list',component:CBEsBinListComponent},
  {path:'CBEsTargetResult/list',component:CBEsTargetResultListComponent},













  {path:'**', pathMatch:'full', component:NotfoundComponent},






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

