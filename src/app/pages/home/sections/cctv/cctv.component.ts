import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../../../../shared/icons/icons.component';

interface CameraProduct { name: string; tag: string; icon: IconName; features: string[]; highlight?: boolean; }

@Component({
  selector: 'app-cctv',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './cctv.component.html',
  styleUrl: './cctv.component.scss'
})
export class CctvComponent {
  products: CameraProduct[] = [
    { name: 'IP Bullet HD',    tag: 'Exterior',      icon: 'cctv',    features: ['Resolución 2MP – 8MP','Visión nocturna IR 40m','IP66 resistente al agua','Compresión H.265+'] },
    { name: 'PTZ Motorizada',  tag: 'Más vendida',   icon: 'cctv',    features: ['Zoom óptico 36x','Seguimiento automático','Cobertura 360°','Audio bidireccional'], highlight: true },
    { name: 'Domo Interior',   tag: 'Interior',      icon: 'cctv',    features: ['Ultra HD 4K','Gran angular 180°','Anti-vandalismo IK10','WDR 120dB'] },
  ];

  solutions: { icon: IconName; title: string; desc: string }[] = [
    { icon: 'remoto',    title: 'Monitoreo Remoto',    desc: 'Acceso desde cualquier dispositivo vía app móvil o web en tiempo real.' },
    { icon: 'grabacion', title: 'Grabación NVR/DVR',   desc: 'Almacenamiento local o en nube con gestión de grabaciones 24/7.' },
    { icon: 'ia',        title: 'Análisis con IA',     desc: 'Detección de intrusos, conteo de personas y alertas automáticas.' },
    { icon: 'cableado',  title: 'Instalación Certificada', desc: 'Cableado estructurado y configuración completa por técnicos especializados.' },
  ];
}
