import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  public heroes: Hero[];
  public favHero : Hero;


  constructor() {
    
    this.heroes = [
    {id: 1, name: 'Windstorm'},
    {id: 1, name: 'Bombasto'},
    {id: 1, name: 'Magneta'},
    {id: 1, name: 'Tornado'}
    ];

    this.favHero = this.heroes[0];
  }

  ngOnInit(): void {
  }

}
