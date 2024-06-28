import { Routes } from '@angular/router';
import { HomeComponents } from './views/homecomponent/homecomponent.component';
import { LoadingComponent } from './views/loading/loading.component';
import { LoginComponent } from './views/logincomponent/login.component';
import { RegisterComponent } from './views/registercomponent/register.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { RoleListComponent } from './views/rolelistcomponent/rolelist.component';
import { RoleCreateComponent } from './views/rolecreatecomponent/rolecreate.component';
import { RoleUserComponent } from './views/roleuser.component/roleuser.component';
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
import { CBEsTargetCreateComponent } from './views/cbestargetcreate.component/cbestargetcreate.component';
import { CBEsResultCreateComponent } from './views/cbesresultcreate.component/cbesresultcreate.component';
import { CBEsTargetResultHistoryListComponent } from './views/cbestargetresulthistorylist.component/cbestargetresulthistorylist.component';
import { CBEsTargetHistoryByID } from './views/cbestargethistory.component/cbestargethistory.component';
import { CBEsManagePlanning } from './views/cbesmanageplanning.component/cbesmanageplanning.component';
import { CBEsPlanningList } from './views/cbesplanninglist.component/cbesplanninglist.component';
import { CBEsPlanningCreate } from './views/cbesplanningcreate.component/cbesplanningcreate.component';
import { CBEsPlanningTargetCreate } from './views/cbesplanningcreatetarget.component/cbesplanningcreatetarget.component';
import { CBEsPlanningResultCreate } from './views/cbesplanningcreateresult.component/cbesplanningcreateresult.component';
import { CBEsPlanningDraft } from './views/cbesplanningdraft.component/cbesplanningdraft.component';
import { CBEsPlanningHistoryListComponent } from './views/cbesplanninghistorylist.component/cbesplanninghistorylist.component';
import { CBEsPlanningTargetHistory } from './views/cbesplanningtargethistory.component/cbesplanningtargethistory.component';
import { CBEsPlanningResultHistory } from './views/cbesplanningresulthistory.component/cbesplanningresulthistory.component';
import { CBEsPlanningReport } from './views/cbesplanningreport.component/cbesplanningreport.component';
import { CBEsPlanningReportDraft } from './views/cbesplanningreportdraft.component/cbesplanningreportdraft.component';
import { CBEsPlanningBinComponent } from './views/cbesplanningbin.component/cbesplanningbin.component';
import { RoleEditComponent } from './views/roleeditcomponent/roleeditcomponent.component';
import { NotHaveDataComponent } from './views/nothavedata.component/nothavedata.component';

export const routes: Routes = [
  {path:'home',component: HomeComponents},
  {path:'loading',component: LoadingComponent},
  {path:'nothavedata/:id',component: NotHaveDataComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'role/list',component:RoleListComponent},
  {path:'role/create',component:RoleCreateComponent},
  {path:'role/edit',component:RoleEditComponent},
  {path:'role/users/:id',component:RoleUserComponent},
  {path:'role/bin',component:RoleBinListComponent},
  {path:'CBEs/list',component:CBEsListComponent},
  {path:'CBEs/create',component:CBEsCreateComponent},
  {path:'CBEs/maturity/create',component:CBEsMaturityCreateComponent},
  {path:'CBEs/supervisor/create',component:CBEsSupervisorCreateComponent},
  {path:'CBEs/history/list/:id',component:CBEsHistoryListComponent},
  {path:'CBEs/history/:id',component:CBEsHistoryComponent},
  {path:'CBEs/history/maturity/:id',component:CBEsMaturityHistoryComponent},
  {path:'CBEs/history/supervisor/:id',component:CBEsSupervisorHistoryComponent},
  {path:'CBEs/bin',component:CBEsBinListComponent},
  {path:'CBEsTargetResult/list',component:CBEsTargetResultListComponent},
  {path:'CBEsTargetResult/target',component:CBEsTargetCreateComponent},
  {path:'CBEsTargetResult/result',component:CBEsResultCreateComponent},
  {path:'CBEsTargetResult/history/list',component:CBEsTargetResultHistoryListComponent},
  {path:'CBEsTargetResult/targethistory/:id',component:CBEsTargetHistoryByID},
  {path:'CBEsTargetResult/resulthistory/:id',component:CBEsTargetHistoryByID},
  {path:'CBEsPlanning/manageplanning',component:CBEsManagePlanning},
  {path:'CBEsPlanning/list',component:CBEsPlanningList},
  {path:'CBEsPlanning/create',component:CBEsPlanningCreate},
  {path:'CBEsPlanning/target/create',component:CBEsPlanningTargetCreate},
  {path:'CBEsPlanning/result/create',component:CBEsPlanningResultCreate},
  {path:'CBEsPlanning/draft/:id',component:CBEsPlanningDraft},
  {path:'CBEsPlanning/history/list',component:CBEsPlanningHistoryListComponent},
  {path:'CBEsPlanning/history/target/:id',component:CBEsPlanningTargetHistory},
  {path:'CBEsPlanning/history/result/:id',component:CBEsPlanningResultHistory},
  {path:'CBEsPlanning/bin/:id',component:CBEsPlanningBinComponent},
  {path:'CBEsPlanning/report/:id',component:CBEsPlanningReport},
  {path:'CBEsPlanning/report/draft/:id',component:CBEsPlanningReportDraft},



































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

