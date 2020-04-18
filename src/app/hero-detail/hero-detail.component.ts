import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero : Hero;
  constructor(private router: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  private getHero() {

    let heroId = +this.router.snapshot.paramMap.get("id")
    this.heroService.getHero(heroId).subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
