import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { IusersDetails } from './../app-types';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { userDetails } from '../mockbackend';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {

  constructor(private router: Router,private dataService:DataService) { }
  myDataArray!: MatTableDataSource<any>;
  columnsToDisplay = ['name', 'email', 'phoneNumber', 'city', 'editBtnColumn', 'deleteBtnColumn'];

  ngOnInit(): void { 
    this.getTableData();
    localStorage.getItem('details');
  }

  getTableData() {
    let details = localStorage.getItem('details') || '';
    this.myDataArray = new MatTableDataSource(JSON.parse(details));
  
  }

  onEditClick(userIndex:number) {
    
    this.dataService.setData(userIndex);
    this.router.navigate(['form']);
  }

  onDeleteClick(position: number) {
    this.dataService.deleteUser(position);
    this.getTableData();
  }




}
