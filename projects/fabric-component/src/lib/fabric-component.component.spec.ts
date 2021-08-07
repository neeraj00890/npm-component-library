import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricComponentComponent } from './fabric-component.component';

describe('FabricComponentComponent', () => {
  let component: FabricComponentComponent;
  let fixture: ComponentFixture<FabricComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
