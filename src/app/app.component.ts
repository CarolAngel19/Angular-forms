import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    formGroup: FormGroup;
    
    constructor (private _builder: FormBuilder) {
        this.formGroup = this._builder.group({
            usuario: ['', [Validators.email, Validators.required]],
            contrasena: ['', Validators.required]
        })
    }
    
    onSubmit() {
        if (this.formGroup.valid) {
            alert(`
              usuario: ${this.formGroup.value.usuario}
              contraseña: ${this.formGroup.value.contraseña}
            `);
          }
    }
}



