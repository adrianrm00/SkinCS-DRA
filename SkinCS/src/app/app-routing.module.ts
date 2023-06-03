import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './componentes/cases/cases.component';
import { TopcasesComponent } from './componentes/topcases/topcases.component';
import { CasesDetailComponent } from './componentes/cases-detail/cases-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/topCases', pathMatch: 'full' },
  { path: 'topCases', component: TopcasesComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'cases/:id', component: CasesDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }