import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokemonComponent } from './all-pokemon.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PokemonService } from '../../shared/services/pokemon.service';


describe('AllPokemonComponent', () => {
  let component: AllPokemonComponent;
  let fixture: ComponentFixture<AllPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [PokemonService, ToastrService],
      declarations: [AllPokemonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
