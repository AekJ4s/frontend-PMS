import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import CBEsRole from '../../models/CBEsRole';
import { CBEsRoleService } from '../../services/CBEsRole.service';
import { DateFormatService } from '../../services/ConvertDate.service';
import Response from '../../models/response';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'rolebinlist-page',
  standalone: true,
  templateUrl: './rolebinlist.component.html',
  styleUrls: ['./rolebinlist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, LoadingComponent],
  providers: [DatePipe],
})
export class RoleBinListComponent {
  Allroles: CBEsRole[] = [];
  datafromapi = false;
  constructor(
    private roleService: CBEsRoleService,
    private dateformatService: DateFormatService
  ) {}

  ngOnInit(): void {
    this.roleService.GetAllBin().subscribe((result: Response) => {
      this.Allroles = result.data
        .map((data: any) => {
          return {
            ...data,
            updateDate: this.dateformatService.convertDateFormat(data.updateDate)
          };
        });
      this.datafromapi = true;
      console.log('this ALL DATA', result);
    });
  }

  onCancelDelete(id : number){
    this.roleService.CancelDelete(id).subscribe((result:Response) => {
      alert(result.message)
      location.reload()
    })
  }
  onLastDelete( id : number){
    this.roleService.LastDelete(id).subscribe((result:Response) => {
      alert(result.message)
      location.reload()
    })
  }


}
