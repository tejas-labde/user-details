import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { userDetails } from '../mockbackend';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  // detailsForm=this.fb.group({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   city:new FormControl('',[Validators.required]),
  //   phoneNumber: new FormControl(0,[Validators.required,Validators.minLength(10)]),
  // })

  detailsForm=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    phoneNumber:new FormControl(),
    city:new FormControl()
  })

  ngOnInit(): void {
    this.setValue();
  }

  submitDetails(formDetails:FormGroup){
      userDetails.push(formDetails.value);
      this.router.navigate(['details']);
  }

  setValue(){
    let user={
      name:'',
      email:'',
      phoneNumber:0,
      city:''
    }
    this.detailsForm.setValue(user);
  }

}
