import { Component } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 20;

  get nameUppercase() {
    return this.name.toUpperCase()
  }

  getName = (): string => `${this.name} - ${this.age}`


}
