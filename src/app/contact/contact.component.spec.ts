import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ne doit pas soumettre si le formulaire est vide', () => {
    component.email = '';
    component.message = '';
    component.onSubmit();
    expect(component.formSubmittedSuccessfully).toBeFalse();
  });
  it('doit afficher le message de succès après envoi valide', fakeAsync(() => {
    component.email = 'test@gmail.com';
    component.message = 'Ceci est un message de test.';
    component.onSubmit();

    expect(component.formSubmittedSuccessfully).toBeTrue();

    tick(3000);
    expect(component.email).toBe('');
    expect(component.message).toBe('');
  }));

  it('doit empêcher les messages de plus de 300 caractere', () => {
    component.email = 'test@gmail.com';
    component.message = 'a'.repeat(301);
    component.onSubmit();

    expect(component.formSubmittedSuccessfully).toBeFalse();
  });
});
