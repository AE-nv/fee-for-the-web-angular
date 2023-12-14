import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AllPokemonComponent } from './all-pokemon.component';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


describe('AllPokemonComponent', () => {
  let component: AllPokemonComponent;
  let fixture: ComponentFixture<AllPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
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
