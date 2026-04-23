import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../../../../shared/icons/icons.component';

interface Feature { num: string; icon: IconName; title: string; desc: string; }

@Component({
  selector: 'app-ascensores',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './ascensores.component.html',
  styleUrl: './ascensores.component.scss'
})
export class AscensoresComponent {
  features: Feature[] = [
    { num: '01', icon: 'venta', title: 'Venta de Ascensores', desc: 'Equipos de alta calidad para edificios residenciales, comerciales e industriales.' },
    { num: '02', icon: 'instalacion', title: 'Instalación Profesional', desc: 'Equipo certificado de ingenieros y técnicos especializados en transporte vertical.' },
    { num: '03', icon: 'automatizacion', title: 'Automatización', desc: 'Paneles digitales, acceso remoto y diagnóstico inteligente en tiempo real.' },
    { num: '04', icon: 'contrato', title: 'Mantenimiento Continuo', desc: 'Contratos preventivos y correctivos con tiempos de respuesta garantizados.' },
  ];
}
