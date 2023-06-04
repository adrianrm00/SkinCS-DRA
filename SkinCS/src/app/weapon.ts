export class Weapon {
  id: string;
  name: string;
  description: string;
  weapon: string;
  rarity: string;
  image: string;

  constructor(weaponData: any) {
    this.id = weaponData.id;
    this.name = weaponData.name;
    this.description = weaponData.description;
    this.weapon = weaponData.weapon;
    this.rarity = weaponData.rarity;
    this.image = weaponData.image;
}
}
