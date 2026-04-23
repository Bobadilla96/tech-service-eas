import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

interface GalleryCategory {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  readonly stats = [
    { value: '13', label: 'tableros y gabinetes' },
    { value: '13', label: 'registros en obra' },
    { value: '11', label: 'equipos y catálogos' },
    { value: '1', label: 'video de instalación' },
  ];

  readonly categories: GalleryCategory[] = [
    this.createCategory(
      'Tableros',
      'Control y distribución eléctrica',
      'Gabinetes, variadores, tableros de sala de máquinas y montajes listos para operación.',
      'tableros_control',
      [
        'caja_control_mural_01.jpeg',
        'detalle_componentes_tablero_01.jpeg',
        'gabinete_cableado_vertical_01.jpeg',
        'gabinete_control_con_display_01.jpeg',
        'gabinete_control_instalado_01.jpeg',
        'gabinetes_control_sala_01.jpeg',
        'tablero_control_abierto_01.jpeg',
        'tablero_control_abierto_02.jpeg',
        'tablero_control_sala_maquinas_01.jpeg',
        'tablero_interruptores_01.jpeg',
        'tablero_principal_sala_maquinas_01.jpeg',
        'variadores_en_gabinete_01.jpeg',
        'variadores_en_gabinete_02.jpeg',
      ]
    ),
    this.createCategory(
      'Obras',
      'Instalación y trabajo en campo',
      'Montaje de equipos, maniobras técnicas y seguimiento de proyectos en edificios y salas de máquinas.',
      'instalacion_obra',
      [
        'conexion_tablero_banco_01.jpeg',
        'edificio_en_construccion_01.jpeg',
        'instalacion_en_piso_01.jpeg',
        'mantenimiento_puerta_ascensor_01.jpeg',
        'montaje_equipo_elevador_01.jpeg',
        'montaje_equipo_elevador_02.jpeg',
        'montaje_maquina_con_control_01.jpeg',
        'operacion_tablero_en_hueco_01.jpeg',
        'soldadura_estructura_01.jpeg',
        'soldadura_estructura_02.jpeg',
        'tecnico_mantenimiento_ascensor_01.jpeg',
        'tecnico_trabajo_en_hueco_01.jpeg',
        'trabajo_en_plataforma_ascensor_01.jpeg',
      ]
    ),
    this.createCategory(
      'Equipos',
      'Componentes y materiales técnicos',
      'Piezas de tracción, cajas de componentes y referencias usadas en mantenimiento, modernización e integración.',
      'equipos_componentes',
      [
        'caja_de_componentes_01.jpeg',
        'placa_tecnica_maquina_01.jpeg',
        'poleas_y_rodamientos_01.jpeg',
        'sala_maquinas_equipos_01.jpeg',
      ]
    ),
    this.createCategory(
      'Catálogos',
      'Material comercial y soluciones de modernización',
      'Láminas, renders y catálogos de apoyo para propuestas técnicas, ventas y presentaciones a cliente.',
      'material_comercial',
      [
        'catalogo_componentes_01.jpeg',
        'catalogo_maquinas_01.jpeg',
        'lamina_modernizacion_01.jpeg',
        'lamina_soluciones_01.jpeg',
        'render_maquina_azul_01.jpeg',
        'render_maquina_traccion_01.jpeg',
        'render_motor_01.jpeg',
      ]
    ),
  ];

  readonly video = {
    src: 'assets/techservice/videos/obra_e_instalacion_01.mp4',
    poster: 'assets/techservice/instalacion_obra/edificio_en_construccion_01.jpeg',
  };

  private createCategory(
    eyebrow: string,
    title: string,
    description: string,
    folder: string,
    files: string[]
  ): GalleryCategory {
    return {
      eyebrow,
      title,
      description,
      items: files.map((file) => this.createItem(folder, file)),
    };
  }

  private createItem(folder: string, file: string): GalleryItem {
    const label = this.toLabel(file);

    return {
      src: `assets/techservice/${folder}/${file}`,
      alt: `Tech Service E.A.S - ${label}`,
      label,
    };
  }

  private toLabel(file: string): string {
    const title = file
      .replace(/\.[^.]+$/, '')
      .replace(/_\d+$/, '')
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return title
      .replace(/\bCatalogo\b/g, 'Catálogo')
      .replace(/\bConexion\b/g, 'Conexión')
      .replace(/\bInstalacion\b/g, 'Instalación')
      .replace(/\bLamina\b/g, 'Lámina')
      .replace(/\bMaquina\b/g, 'Máquina')
      .replace(/\bMaquinas\b/g, 'Máquinas')
      .replace(/\bOperacion\b/g, 'Operación')
      .replace(/\bTecnica\b/g, 'Técnica')
      .replace(/\bTecnico\b/g, 'Técnico');
  }
}
