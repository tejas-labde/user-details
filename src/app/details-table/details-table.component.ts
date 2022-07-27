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

  constructor(private router:Router) { }
  myDataArray!:MatTableDataSource<any>;
  columnsToDisplay=['name','email','phoneNumber','city','editBtnColumn','deleteBtnColumn'];

  ngOnInit(): void { 
    
    localStorage.setItem('details',JSON.stringify(userDetails));
    this.getTableData(); }
  
  getTableData(){
    let details=localStorage.getItem('details') || '';
    this.myDataArray=new MatTableDataSource(JSON.parse(details));
  }
  
  onEditClick(user:IusersDetails){
      console.log(user);

      this.router.navigate(['form']);
  }

  onDeleteClick(position:number){
    userDetails.splice(position,1);
    this.getTableData();
  }


  

}
