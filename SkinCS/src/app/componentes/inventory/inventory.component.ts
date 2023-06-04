import { Component } from '@angular/core';
import { InventoryService } from 'src/app/servicios/inventory.service';
import { MessageService } from 'src/app/servicios/message.service';
import { Weapon } from 'src/app/weapon';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  constructor(private inventorySevice: InventoryService, private messageService: MessageService) { }

  selectedWeapon?: Weapon;
  weapons: Weapon[] = [];

  ngOnInit(): void {
    this.getWeapons();
  }

  getWeapons(): void {
    this.inventorySevice.getInventory()
      .subscribe(weapons => this.weapons = weapons);
  }

}
