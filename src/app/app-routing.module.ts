import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
