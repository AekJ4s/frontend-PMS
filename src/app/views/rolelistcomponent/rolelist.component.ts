import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CBEsRoleService } from '../../services/CBEsRole.service';
import CBEsRole from '../../models/CBEsRole';
import Response from '../../models/response';
import { DateFormatService } from '../../services/ConvertDate.service';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'rolelist-page',
  standalone: true,
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css'],
  imports: [CommonModule, RouterModule, FormsModule,LoadingComponent],
  providers: [DatePipe],
})
export class RoleListComponent implements OnInit{
  Allroles : CBEsRole[] = [];
  datafromapi = false;
  constructor(
    private roleService : CBEsRoleService,
    private dateformatService : DateFormatService,
  ) {  }

  ngOnInit(): void {
    this.roleService.GetAll().subscribe(
      (result: Response) => {
        this.Allroles = result.data.map((data:any) =>{
          return{
            ...data,
            updateDate : this.dateformatService.convertDateFormat(data.updateDate) // ส่งไปแปลววันที่่ที่เซอร์วิส
          }

        })
        this.datafromapi = true;
        console.log("this ALL DATA",result)
      }
    )
  }

  onDelete(id : number){
    console.log("ต้องการลบ id ",id)
    this.roleService.Delete(id).subscribe((result: Response) => {
      alert(result.message)
      location.reload();
    })

  }
  onEdit(){
    console.log("onEdit button work ! ")
  }
  onUser(){
    console.log("onUser button work ! ")
  }
  onCreate(){
    console.log("onCreate button work ! ")
  }
  onBinbox(){
    console.log("onBinbox button work ! ")
  }

}
