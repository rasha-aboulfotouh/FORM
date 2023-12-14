import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent} from './adduser/adduser.component';

import { ListuserComponent } from './listuser/listuser.component';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

// Routing //
const routes: Routes = [
  
    { path: '', component: ListuserComponent },

    { path: 'add', component: AdduserComponent },
    { path: 'view/:id', component: ViewuserComponent },

    { path: 'edit', component: EditComponent },



    //Last One

    { path: '**', component: ErrorComponent },

  ];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
