import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './ticketManagementComponents/create-ticket/create-ticket.component';
import { SuccessMessageComponent } from './ticketManagementComponents/success-message/success-message.component';
const routes: Routes = [
  {path:'',component:CreateTicketComponent},
  {path:'create-ticket',component:CreateTicketComponent},
  {path:'success-create-ticket',component:SuccessMessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
