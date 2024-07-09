import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './views/loading/loading.component';
import { HomeComponents } from './views/homecomponent/homecomponent.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/logincomponent/login.component';
import { RegisterComponent } from './views/registercomponent/register.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { RoleCreateComponent } from './views/rolecreatecomponent/rolecreate.component';
import { RoleListComponent } from './views/rolelistcomponent/rolelist.component';
import { RoleUserComponent } from './views/roleuser.component/roleuser.component';
import { RoleBinListComponent } from './views/rolebinlist.component/rolebinlist.component';
import { CBEsListComponent } from './views/cbeslist.component/cbeslist.component';
import { CBEsCreateComponent } from './views/cbescreate.component/cbescreate.component';
import { CBEsSupervisorCreateComponent } from './views/cbessupervisorcreate.component/cbessupervisorcreate.component';
import { CBEsHistoryListComponent } from './views/cbeshistorylist.component/cbeshistorylist.component';
import { CBEsHistoryComponent } from './views/cbeshistory.component/cbeshistory.component';
import { CBEsMaturityHistoryComponent } from './views/cbesmaturityhistory.component/cbesmaturityhistory.component';
import { CBEsSupervisorHistoryComponent } from './views/cbessupervisorhistory.component/cbessupervisorhistory.component';
import { CBEsBinListComponent } from './views/cbesbin.component/cbesbin.component';
import { CBEsTargetResultListComponent } from './views/cbestargetresultlist.component/cbestargetresultlist.component';
import { CBEsTargetCreateComponent } from './views/cbestargetcreate.component/cbestargetcreate.component';
import { CBEsTargetResultHistoryListComponent } from './views/cbestargetresulthistorylist.component/cbestargetresulthistorylist.component';
import { CBEsTargetHistoryByID } from './views/cbestargethistory.component/cbestargethistory.component';
import { CBEsManagePlanning } from './views/cbesmanageplanning.component/cbesmanageplanning.component';
import { CBEsPlanningList } from './views/cbesplanninglist.component/cbesplanninglist.component';
import { CBEsPlanningCreate } from './views/cbesplanningcreate.component/cbesplanningcreate.component';
import { CBEsPlanningTargetCreate } from './views/cbesplanningcreatetarget.component/cbesplanningcreatetarget.component';
import { CBEsPlanningResultCreate } from './views/cbesplanningcreateresult.component/cbesplanningcreateresult.component';
import { CBEsMaturityCreateComponent } from './views/cbesmaturitycreate.component/cbesmaturitycreate.component';
import { CBEsPlanningDraft } from './views/cbesplanningdraft.component/cbesplanningdraft.component';
import { CBEsPlanningHistoryListComponent } from './views/cbesplanninghistorylist.component/cbesplanninghistorylist.component';
import { CBEsPlanningTargetHistory } from './views/cbesplanningtargethistory.component/cbesplanningtargethistory.component';
import { CBEsPlanningResultHistory } from './views/cbesplanningresulthistory.component/cbesplanningresulthistory.component';
import { CBEsPlanningBinComponent } from './views/cbesplanningbin.component/cbesplanningbin.component';
import { CBEsPlanningReport } from './views/cbesplanningreport.component/cbesplanningreport.component';
import { CBEsPlanningReportDraft } from './views/cbesplanningreportdraft.component/cbesplanningreportdraft.component';
import { NotHaveDataComponent } from './views/nothavedata.component/nothavedata.component';
@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NotHaveDataComponent,
    CBEsPlanningReportDraft,
    CBEsPlanningReport,
    CBEsPlanningBinComponent,
    CBEsPlanningResultHistory,
    CBEsPlanningTargetHistory,
    CBEsPlanningHistoryListComponent,
    CBEsPlanningDraft,
    CBEsMaturityCreateComponent,
    CBEsPlanningResultCreate,
    CBEsPlanningTargetCreate,
    CBEsPlanningCreate,
    CBEsPlanningList,
    CBEsManagePlanning,
    CBEsTargetHistoryByID,
    CBEsTargetResultHistoryListComponent,
    CBEsTargetCreateComponent,
    CBEsTargetResultListComponent,
    CBEsBinListComponent,
    CBEsSupervisorHistoryComponent,
    CBEsMaturityHistoryComponent,
    CBEsHistoryComponent,
    CBEsHistoryListComponent,
    CBEsSupervisorCreateComponent,
    CBEsCreateComponent,
    CBEsListComponent,
    RoleBinListComponent,
    RoleUserComponent,
    RoleListComponent,
    RoleCreateComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HomeComponents,
    LoadingComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterOutlet,
  ],
})
export class AppComponent {
  title = 'CBEs Management Angular';
  opennav = false
  timeupdate = Date();
  timenow = new Date();
  thailandTime: string = this.timenow.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });

  constructor(private router: Router) {}
  // ngOnInit() {
  //   this.router.navigate(['loading']);
  //   setTimeout(() => {
  //     this.opennav = true
  //     this.router.navigate(['home']);
  //     console.log("COUNT")
  //   }, 1000);
  // }

}
