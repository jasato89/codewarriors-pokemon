import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../classes/pokemon/pokemon";

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.css']
})
export class PokedexCardComponent implements OnInit {

  @Input() pokemon !: Pokemon;
  @Input() i !: number;


  constructor() { }

  ngOnInit(): void {
  }

}
