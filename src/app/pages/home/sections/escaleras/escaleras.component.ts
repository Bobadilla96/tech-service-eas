import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../../../../shared/icons/icons.component';

@Component({
  selector: 'app-escaleras',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './escaleras.component.html',
  styleUrl: './escaleras.component.scss'
})
export class EscalerasComponent {
  specs = [
    { label: 'Velocidad', value: '0.5 m/s' },
    { label: 'Ancho de banda', value: '600 - 1000 mm' },
    { label: 'Ángulo de inclinación', value: '30° / 35°' },
    { label: 'Capacidad', value: 'Hasta 7.500 p/h' },
  ];

  benefits: { icon: IconName; text: string }[] = [
    { icon: 'proyecto', text: 'Ahorro energético de hasta 40%' },
    { icon: 'mantenimiento', text: 'Sistemas de seguridad multicapa certificados' },
    { icon: 'automatizacion', text: 'Operación silenciosa y de baja vibración' },
    { icon: 'contrato', text: 'Contrato anual de mantenimiento incluido' },
  ];
}
