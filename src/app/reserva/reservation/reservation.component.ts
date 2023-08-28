import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styles: [],
})
export class ReservationComponent {
  errorVerificar=false;
  nameRegex = /^[a-zA-Z\s-]+$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  constructor(private fb: FormBuilder) {}
  codigo:FormGroup = this.fb.group({
    char1:['',[Validators.required,Validators.maxLength(1)]],
    char2:['',[Validators.required,Validators.maxLength(1)]],
    char3:['',[Validators.required,Validators.maxLength(1)]],
    char4:['',[Validators.required,Validators.maxLength(1)]]
  })

  verificar(){
    if(this.codigo.invalid){
      this.errorVerificar=true;
      this.codigo.markAllAsTouched();
      setTimeout(() => {
        this.codigo.reset();
        this.errorVerificar = false;
      }, 5000);
      return;
    }
  }

  formularioReserva: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.nameRegex),Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    cellphone: ['', [Validators.required, Validators.minLength(9)]],
    info: [''],
  });
  campoNoEsValido(campo: string) {
    return (
      this.formularioReserva.controls[campo].errors &&
      this.formularioReserva.controls[campo].touched
    );
  }
  submit() {
    if (this.formularioReserva.invalid) {
      this.formularioReserva.markAllAsTouched();
      setTimeout(() => {
        this.formularioReserva.reset();
      }, 5000);
      return;
    }
    console.log(this.formularioReserva.value);
    this.formularioReserva.reset();
  }
}
