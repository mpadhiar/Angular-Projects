import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Observable<Hero[]>;
  selectedHero : Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) { 

  }

  ngOnInit() {
    this.heroes =  this.heroService.getHeroes();
  }

  OnSelect(hero: Hero)
  {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

}
