import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconName } from '../../../../shared/icons/icons.component';

interface AireKit {
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
  selector: 'app-aire',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './aire.component.html',
  styleUrl: './aire.component.scss'
})
export class AireComponent {
  readonly kits: AireKit[] = [
    {
      brand: 'Midea / LG',
      badge: 'Residencial',
      series: 'Inverter 9.000 – 24.000 BTU',
      title: 'Split mural inverter para dormitorios y living',
      summary: 'Unidad mural de alta eficiencia energética con tecnología inverter, bajo nivel sonoro y filtros de purificación. Instalación completa con soporte, cañería y carga de gas R32.',
      audience: 'Ideal para: hogares, dormitorios y oficinas pequeñas',
      images: ['assets/aire-catalog/split-residencial.jpg'],
      includes: [
        'Unidad interior y exterior incluidas',
        'Instalación y carga de refrigerante R32',
        'Control remoto y conectividad Wi-Fi opcional',
        'Función calefacción y refrigeración'
      ],
      featured: true
    },
    {
      brand: 'Carrier / Daikin',
      badge: 'Comercial',
      series: 'Cassette 4 vías 18.000 – 48.000 BTU',
      title: 'Cassette de techo para locales, oficinas y salones',
      summary: 'Unidad tipo cassette con distribución de aire en cuatro direcciones para integración en falso techo. Ideal para espacios comerciales que requieren climatización uniforme y discreta.',
      audience: 'Ideal para: locales, restaurantes, consultorios y salones',
      images: ['assets/aire-catalog/cassette-techo.jpg'],
      includes: [
        'Distribución de aire en 4 vías',
        'Panel decorativo a nivel de cielorraso',
        'Control remoto por infrarrojos',
        'Compatible con automatización y BMS'
      ]
    },
    {
      brand: 'Samsung / Daikin',
      badge: 'Multi-zona',
      series: '1 exterior + 2 a 4 interiores',
      title: 'Sistema multi-split para múltiples ambientes',
      summary: 'Una sola unidad exterior conectada a varias unidades interiores con control independiente por zona. Solución eficiente para viviendas, clínicas y oficinas con varios ambientes.',
      audience: 'Ideal para: viviendas, clínicas y espacios multi-ambiente',
      images: ['assets/aire-catalog/multi-split.jpg'],
      includes: [
        '1 unidad exterior para hasta 4 zonas',
        'Control independiente por zona',
        'Reducción del ruido exterior significativa',
        'Instalación de cañerías coordinada en obra'
      ],
      featured: true
    },
    {
      brand: 'Tecumseh / Embraco',
      badge: 'Industrial',
      series: '0 °C a −20 °C según uso',
      title: 'Cámara fría y cuarto frío para alimentos e industria',
      summary: 'Diseño, instalación y puesta en marcha de cámaras frías para conservación de alimentos, farmacia e industria. Equipos con compresor, evaporador, condensador y control digital.',
      audience: 'Ideal para: carnicerias, restaurantes, frigoríficos y laboratorios',
      images: ['assets/aire-catalog/camara-fria.jpg'],
      includes: [
        'Compresor hermético o semi-hermético',
        'Evaporador de techo con desescarche automático',
        'Control digital de temperatura y alarmas',
        'Panel frigorífico con puerta de acceso'
      ]
    },
    {
      brand: 'Midea / Haier',
      badge: 'Piso-Techo',
      series: '24.000 – 48.000 BTU',
      title: 'Split piso-techo para showrooms y grandes espacios',
      summary: 'Unidad de instalación vertical, apta para espacios sin falso techo como galpones, showrooms, depósitos y áreas de producción. Alta potencia con distribución de aire eficiente.',
      audience: 'Ideal para: galpones, showrooms y depósitos',
      images: ['assets/aire-catalog/split-piso-techo.jpg'],
      includes: [
        'Instalación vertical sin falso techo requerido',
        'Alta potencia y alcance de distribución',
        'Función calefacción y refrigeración inverter',
        'Filtro de polvo de alta eficiencia'
      ]
    },
    {
      brand: 'Carrier / Trane',
      badge: 'Centralizado',
      series: 'Sistema de ductos y UMA',
      title: 'Climatización centralizada para edificios y grandes plantas',
      summary: 'Proyectos de climatización por ductos con unidad manejadora de aire (UMA), difusores y rejillas distribuidas en el espacio. Solución integral para oficinas, hoteles e industrias.',
      audience: 'Ideal para: edificios, hoteles, supermercados y plantas',
      images: ['assets/aire-catalog/sistema-centralizado.jpg'],
      includes: [
        'Unidad manejadora de aire (UMA) completa',
        'Red de ductos de distribución en lámina',
        'Difusores y rejillas de retorno',
        'Control centralizado y automatización'
      ]
    }
  ];

  readonly services: { icon: IconName; title: string; desc: string }[] = [
    {
      icon: 'instalacion',
      title: 'Instalación profesional',
      desc: 'Relevamiento previo, dimensionado correcto del equipo e instalación completa con prueba de funcionamiento en obra.'
    },
    {
      icon: 'mantenimiento',
      title: 'Mantenimiento y recarga',
      desc: 'Limpieza de filtros, revisión de presiones, recarga de gas refrigerante y verificación eléctrica para prolongar la vida útil del equipo.'
    },
    {
      icon: 'frio',
      title: 'Cámaras frías',
      desc: 'Diseño y construcción de cuartos fríos industriales a medida con paneles frigoríficos, equipos de frío y control digital.'
    },
    {
      icon: 'climatizacion',
      title: 'Climatización centralizada',
      desc: 'Proyectos de ductos y UMA para grandes edificios con distribución uniforme del aire y control integrado por zona.'
    }
  ];
}