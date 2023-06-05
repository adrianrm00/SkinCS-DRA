import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';

import { CasesComponent } from './componentes/cases/cases.component';
import { MessagesComponent } from './componentes/messages/messages.component';
import { CasesDetailComponent } from './componentes/cases-detail/cases-detail.component';
import { TopcasesComponent } from './componentes/topcases/topcases.component';
import { PlaygameComponent } from './componentes/playgame/playgame.component';
import { PlaygameDetailComponent } from './componentes/playgame-detail/playgame-detail.component';
import { InventoryComponent } from './componentes/inventory/inventory.component';
import { InventoryDetailComponent } from './componentes/inventory-detail/inventory-detail.component';
import { ScrappingComponent } from './componentes/scrapping/scrapping.component';



@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    MessagesComponent,
    CasesDetailComponent,
    TopcasesComponent,
    PlaygameComponent,
    PlaygameDetailComponent,
    InventoryComponent,
    InventoryDetailComponent,
    ScrappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
