import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private router: Router, private dataService: DataService) { }

  detailsForm!: FormGroup;
  emailPattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      city: new FormControl()
    })
    this.setFormValue();
  }

  setFormValue() {
    this.detailsForm.patchValue(this.dataService.getData() || '');
    this.detailsForm.controls['name'].setValidators(Validators.required);
    this.detailsForm.controls['email'].setValidators([Validators.required, Validators.email]);
    this.detailsForm.controls['phoneNumber'].setValidators([Validators.required, Validators.minLength(10)]);
    this.detailsForm.controls['city'].setValidators(Validators.required);
  }

  submitDetails(formDetails: FormGroup) {
  
    this.dataService.updateData(formDetails.value);
    this.router.navigate(['details']);
  }


}
