import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent {
  nameRegex = /^[a-zA-Z\s-]+$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  constructor(private fb: FormBuilder) {}
  formularioContacto:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.nameRegex),Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    cellphone: ['', [Validators.required, Validators.minLength(9)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
  campoNoEsValido(campo:string){
    return this.formularioContacto.controls[campo].errors && this.formularioContacto.controls[campo].touched;
  }
  submit(){
    if(this.formularioContacto.invalid){
      this.formularioContacto.markAllAsTouched();
      setTimeout(()=>{
        this.formularioContacto.reset();
      },5000)
      return;
    }
    console.log(this.formularioContacto.value);
    this.formularioContacto.reset();
  }
}
