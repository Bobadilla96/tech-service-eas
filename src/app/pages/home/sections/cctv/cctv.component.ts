import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../../../../shared/icons/icons.component';

interface CctvKit {
  brand: string;
  badge: string;
  series: string;
  title: string;
  summary: string;
  audience: string;
  images: string[];
  includes: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-cctv',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './cctv.component.html',
  styleUrl: './cctv.component.scss'
})
export class CctvComponent {
  readonly kits: CctvKit[] = [
    {
      brand: 'Hikvision',
      badge: 'PoE',
      series: 'NK42E0H',
      title: 'Kit de 4 cámaras bullet para comercio y acceso principal',
      summary: 'Paquete oficial con NVR PoE y cuatro cámaras bullet 2 MP para una implementación rápida en sucursales, recepciones y frentes comerciales.',
      audience: 'Ideal para: locales, depósitos y accesos',
      images: ['assets/cctv-catalog/hikvision-kit-poe.png'],
      includes: [
        '4 cámaras bullet 2 MP',
        'NVR PoE de 4 canales',
        '5 cables de red y cable HDMI',
        'Gestión remota con Hik-Connect'
      ],
      featured: true
    },
    {
      brand: 'Hikvision',
      badge: 'Wi-Fi',
      series: 'NKS422WBH',
      title: 'Kit Wi-Fi de dos cámaras bullet con NVS',
      summary: 'Referencia vigente de Hikvision para montajes sin cableado de red complejo, con hotspot en el NVS, audio bidireccional y administración remota.',
      audience: 'Ideal para: oficinas pequeñas y puntos de venta',
      images: ['assets/cctv-catalog/hikvision-kit-wifi-current.jpg'],
      includes: [
        '2 cámaras bullet Wi-Fi 2 MP',
        'NVS con hotspot y doble antena',
        'Hasta 2 ranuras microSD de 512 GB cada una',
        'Luz inteligente y audio bidireccional'
      ]
    },
    {
      brand: 'Dahua',
      badge: 'PyME',
      series: 'NVR1108HS-W-S2 + Hero Series',
      title: 'Kit Wi-Fi base con grabador Dahua y cámara interior',
      summary: 'Configuración tipo kit para pequeños negocios que necesitan grabación local, crecimiento progresivo y cámaras Wi-Fi de puesta en marcha rápida.',
      audience: 'Ideal para: caja, recepción y oficina',
      images: ['assets/cctv-catalog/dahua-nvr-wireless.png', 'assets/cctv-catalog/dahua-hero-series.png'],
      includes: [
        'Grabador NVR1108HS-W-S2 de 8 canales',
        'Emparejamiento inalámbrico en un clic',
        'Cascada automática para ampliar cobertura',
        'Cámaras Wi-Fi Hero Series según ambiente'
      ],
      featured: true
    },
    {
      brand: 'Dahua',
      badge: 'Interior',
      series: 'Wireless Series',
      title: 'Kit interior discreto para oficina y atención al público',
      summary: 'Combinación referencial de las líneas Hero y Cube para puestos de atención, salas administrativas y control visual de espacios internos.',
      audience: 'Ideal para: oficinas, consultorios y recepción',
      images: ['assets/cctv-catalog/dahua-hero-series.png', 'assets/cctv-catalog/dahua-cube-series.png'],
      includes: [
        'Cámara PT interior Hero Series',
        'Cámara compacta Cube Series',
        'Operación Wi-Fi para montaje flexible',
        'Control visual de zonas internas'
      ]
    },
    {
      brand: 'Dahua',
      badge: 'Exterior 360',
      series: 'Picoo Series + NVR1108HS-W-S2',
      title: 'Kit perimetral exterior con cobertura móvil',
      summary: 'Propuesta para perímetros y accesos exteriores con cámara Picoo de observación PT y grabación centralizada en NVR inalámbrico.',
      audience: 'Ideal para: patios, estacionamientos y accesos laterales',
      images: ['assets/cctv-catalog/dahua-picoo-series.png', 'assets/cctv-catalog/dahua-nvr-wireless.png'],
      includes: [
        'Cámara exterior Picoo Series',
        'Cobertura 360 grados sin ángulos muertos',
        'Alarmas instantáneas y patrullas periódicas',
        'Grabación central con NVR Wi-Fi'
      ]
    },
    {
      brand: 'Dahua',
      badge: 'Mostrador',
      series: 'Cube Series + NVR1108HS-W-S2',
      title: 'Kit compacto para caja, recepción y punto de cobro',
      summary: 'Configuración de formato reducido para vigilancia frontal en mostradores, con cámara Cube y grabación central sobre NVR inalámbrico.',
      audience: 'Ideal para: caja, mostrador y atención rápida',
      images: ['assets/cctv-catalog/dahua-cube-series.png', 'assets/cctv-catalog/dahua-nvr-wireless.png'],
      includes: [
        'Cámara Cube Series de formato compacto',
        'Grabador NVR1108HS-W-S2 de 8 canales',
        'Montaje discreto sobre escritorio o repisa',
        'Grabación central y acceso móvil'
      ]
    }
  ];

  readonly services: { icon: IconName; title: string; desc: string }[] = [
    {
      icon: 'remoto',
      title: 'Puesta en marcha remota',
      desc: 'Configuramos acceso por app y monitoreo remoto para que la entrega quede operativa desde el primer día.'
    },
    {
      icon: 'grabacion',
      title: 'Grabación centralizada',
      desc: 'Trabajamos con NVR o NVS para dejar la evidencia ordenada y con criterios claros de almacenamiento.'
    },
    {
      icon: 'ia',
      title: 'Alertas y analítica',
      desc: 'Según el kit elegido, se pueden integrar detección de movimiento, luz inteligente y audio bidireccional.'
    },
    {
      icon: 'cableado',
      title: 'Instalación completa',
      desc: 'Incluimos relevamiento, montaje, orientación de cámaras, pruebas y entrega funcional en obra o negocio.'
    }
  ];
}
