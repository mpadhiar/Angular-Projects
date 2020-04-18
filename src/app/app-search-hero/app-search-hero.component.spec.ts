import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchHeroComponent } from './app-search-hero.component';

describe('AppSearchHeroComponent', () => {
  let component: AppSearchHeroComponent;
  let fixture: ComponentFixture<AppSearchHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
