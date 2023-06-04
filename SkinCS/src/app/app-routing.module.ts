import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './componentes/cases/cases.component';
import { TopcasesComponent } from './componentes/topcases/topcases.component';
import { CasesDetailComponent } from './componentes/cases-detail/cases-detail.component';
import { PlaygameComponent } from './componentes/playgame/playgame.component';
import { PlaygameDetailComponent } from './componentes/playgame-detail/playgame-detail.component';
import { InventoryComponent } from './componentes/inventory/inventory.component';
import { InventoryDetailComponent } from './componentes/inventory-detail/inventory-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/topCases', pathMatch: 'full' },
  { path: 'topCases', component: TopcasesComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'cases/:id', component: CasesDetailComponent },
  {path: 'playgame', component: PlaygameComponent},
  {path: 'playgame/:id', component: PlaygameDetailComponent},
  { path: 'inventory', component: InventoryComponent },
  { path: 'inventory/:id', component: InventoryDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
