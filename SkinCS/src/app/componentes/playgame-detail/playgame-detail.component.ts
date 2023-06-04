import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/case';
import { CaseService } from 'src/app/servicios/case.service';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/servicios/message.service';
import { WeaponService } from 'src/app/servicios/weapon.service';
import { Weapon } from 'src/app/weapon';

@Component({
  selector: 'app-playgame-detail',
  templateUrl: './playgame-detail.component.html',
  styleUrls: ['./playgame-detail.component.scss']
})
export class PlaygameDetailComponent {

  @Input() case?: Case;

  weapons: Weapon[] = [];

  randomWeapon?: Weapon;

  constructor( private route: ActivatedRoute, private caseService: CaseService, private location: Location, private messageService: MessageService, private weaponService: WeaponService) { }

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
        console.log('Datos del caso:', this.case);
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
        console.log('Datos del caso:', this.case);
      });
    }
  }

  getRandomWeapon(): Weapon | undefined {
    if(this.weapons.length > 0) {
      const random = Math.floor(Math.random() * this.weapons.length);
      console.log('Datos del aleatorio:', this.weapons[random]);
      this.randomWeapon = this.weapons[random];
      return this.weapons[random];
    }
    return undefined;
  }

  deleteRandomWeapon(): void {
    this.randomWeapon = undefined;
  }

  goBack(): void {
    this.location.back();
  }

}
