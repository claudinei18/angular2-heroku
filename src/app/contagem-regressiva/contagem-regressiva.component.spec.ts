import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContagemRegressivaComponent } from './contagem-regressiva.component';

describe('ContagemRegressivaComponent', () => {
  let component: ContagemRegressivaComponent;
  let fixture: ComponentFixture<ContagemRegressivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContagemRegressivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContagemRegressivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
