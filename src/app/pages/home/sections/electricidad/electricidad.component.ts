import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../../../../shared/icons/icons.component';

interface Service {
  icon: IconName;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-electricidad',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './electricidad.component.html',
  styleUrl: './electricidad.component.scss'
})
export class ElectricidadComponent {
  services: Service[] = [
    { icon: 'electricidad', title: 'Instalaciones Eléctricas', desc: 'Baja y media tensión para proyectos residenciales, comerciales e industriales.' },
    { icon: 'tablero', title: 'Tableros Eléctricos', desc: 'Diseño, montaje y puesta en marcha de tableros de distribución y control.' },
    { icon: 'tierra', title: 'Puesta a Tierra', desc: 'Sistemas de puesta a tierra, protecciones y canalizaciones conformes a norma.' },
    { icon: 'mantenimiento', title: 'Mantenimiento Preventivo', desc: 'Inspección y mantenimiento periódico para garantizar continuidad operativa.' },
    { icon: 'mantenimiento', title: 'Mantenimiento Correctivo', desc: 'Diagnóstico y reparación rápida de fallas con personal certificado.' },
    { icon: 'proyecto', title: 'Proyectos a Medida', desc: 'Ingeniería eléctrica para edificios, industrias y proyectos de gran escala.' },
  ];
}
