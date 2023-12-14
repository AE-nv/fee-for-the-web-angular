import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonComponent } from './my-pokemon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('MyPokemonComponent', () => {
  let component: MyPokemonComponent;
  let fixture: ComponentFixture<MyPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [PokemonService, ToastrService],
      declarations: [MyPokemonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
