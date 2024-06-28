import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CBEsPlanningCreate } from '../cbesplanningcreate.component/cbesplanningcreate.component';
import { CBEsPlanningBinComponent } from '../cbesplanningbin.component/cbesplanningbin.component';
@Component({
  selector: 'nothavedata-page',
  standalone: true,
  templateUrl: './nothavedata.component.html',
  styleUrls: ['./nothavedata.component.css'],
  imports: [CommonModule, RouterModule, FormsModule,CommonModule,RouterOutlet,CBEsPlanningCreate,CBEsPlanningBinComponent],
  providers: [DatePipe],
})
export class NotHaveDataComponent implements OnInit{
  id: number | null = 0;

  constructor(private router: Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    this.id = idParam !== null ? +idParam : null; // Convert string to number
    console.log(`Received id: ${this.id}`);
  });
}

  onCreate(){
    this.router.navigate(['CBEsPlanning/create/']);
  };

  onBin(){
    console.log("onBin",this.id)
    this.router.navigate(['CBEsPlanning/bin/',this.id]);
  };
}

