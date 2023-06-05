import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from 'src/app/servicios/case.service';
import { MessageService } from 'src/app/servicios/message.service';
import { Location } from '@angular/common';
import { WeaponService } from 'src/app/servicios/weapon.service';
import { Weapon } from 'src/app/weapon';
import { InventoryService } from 'src/app/servicios/inventory.service';
import { Inventory } from 'src/app/inventory';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.scss']
})
export class InventoryDetailComponent {

  weapons: Inventory | undefined;

  constructor( private route: ActivatedRoute, private inventoryService: InventoryService, private location: Location, private messageService: MessageService, private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.getWeapon()
  }

  getWeapon(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventoryService.getWeapon(id)
      .subscribe(weapon => this.weapons = weapon);
  }

  save() : void{
    if (this.weapons) {
      this.inventoryService.updateInventory(this.weapons)
        .subscribe(() => this.goBack());
    }
  }




  goBack(): void {
    this.location.back();
  }

}
