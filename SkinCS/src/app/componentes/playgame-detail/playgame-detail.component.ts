import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/case';
import { CaseService } from 'src/app/servicios/case.service';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/servicios/message.service';
import { WeaponService } from 'src/app/servicios/weapon.service';
import { Weapon } from 'src/app/weapon';
import { InventoryService } from 'src/app/servicios/inventory.service';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/inventory';

@Component({
  selector: 'app-playgame-detail',
  templateUrl: './playgame-detail.component.html',
  styleUrls: ['./playgame-detail.component.scss']
})
export class PlaygameDetailComponent {

  @Input() case?: Case;

  weapons: Weapon[] = [];

  randomWeapon: Inventory = null as any as Weapon;

  constructor( private router: Router, private route: ActivatedRoute, private caseService: CaseService, private location: Location, private messageService: MessageService, private weaponService: WeaponService, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getCase();
    this.case?.contains.forEach(constains => {
      this.getWeapon(constains.id);
    });
  }

  getCase(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.caseService.getCaseById(id).subscribe(c => {
        this.case = c[0];
        this.loadWeapons();
      });
    }
  }

  loadWeapons(): void {
    this.case?.contains.forEach(weapon => {
      this.getWeapon(weapon.id);
    });
  }

  getWeapon(id: string): void {
    if (id) {
      this.weaponService.getWeaponById(id).subscribe(w => {
        const weapon = w[0];
        this.weapons.push(weapon);
      });
    }
  }

  getRandomWeapon(): Weapon | undefined {
    if(this.weapons.length > 0) {
      const random = Math.floor(Math.random() * this.weapons.length);
      this.randomWeapon = this.weapons[random];
      console.log('Datos guardados', this.randomWeapon);
      return this.weapons[random];
    }
    return undefined;
  }

  addRandomWeapon(): void {
    this.inventoryService.addInventory(this.randomWeapon).subscribe( () => {
      this.router.navigate(['/inventory']);
    });
  }

  deleteRandomWeapon(): void {
    this.randomWeapon = null as any as Weapon;
  }

  goBack(): void {
    this.location.back();
  }

}
