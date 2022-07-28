import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private dataService:DataService,private router:Router) { }

  searchValue!:FormGroup;

  ngOnInit(): void {
    this.searchValue=new FormGroup({
      search: new FormControl('')
    })
  }

  onSearch(valueToBeSearched:any){
    this.dataService.searchData(valueToBeSearched.value.search);
    this.router.navigate(['details']);
  }



}
