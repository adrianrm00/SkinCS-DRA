export class Weapon {
  id: string;
  name: string;
  weapon: string;
  rarity: string;
  image: string;

  constructor(weaponData: any) {
    this.id = weaponData.id;
    this.name = weaponData.name;
    this.weapon = weaponData.weapon;
    this.rarity = weaponData.rarity;
    this.image = weaponData.image;
}
}
