import { DetailsTableComponent } from './details-table/details-table.component';
import { InputFormComponent } from './input-form/input-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'form',component:InputFormComponent},
  {path:'details',component:DetailsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
