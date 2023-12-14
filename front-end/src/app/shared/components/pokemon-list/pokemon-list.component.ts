import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'pokedex-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemon: Pokemon[] = [];
  @Input() actionLabel?: string;

  @Output() clicked = new EventEmitter<Pokemon>();

  onCaughtClicked(pokemon: Pokemon) {
    this.clicked.emit(pokemon);
  }

  getImageUrl(id: number) {
    return `assets/sprites/${id}.png`;
  }
}
