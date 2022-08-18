import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Add-Employee/Add-Employee.component';
import { EmployeeListComponent } from './Employee-List/Employee-List.component';

const routes: Routes = [
  {path:'addemployee', component: AddEmployeeComponent},
  {path:'employeelist',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddEmployeeComponent,EmployeeListComponent]
