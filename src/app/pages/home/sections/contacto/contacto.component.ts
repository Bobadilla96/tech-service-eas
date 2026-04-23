import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  form = {
    nombre: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  };

  servicios = [
    'Electricidad',
    'Ascensores',
    'Escaleras Mecánicas',
    'Cámaras CCTV',
    'Otro',
  ];

  submitted = false;

  submit() {
    this.submitted = true;
  }
}
