import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  services = [
    { icon: 'fa-bolt', label: 'Sistemas Eléctricos' },
    { icon: 'fa-elevator', label: 'Ascensores' },
    { icon: 'fa-stairs', label: 'Escaleras Mecánicas' },
    { icon: 'fa-video', label: 'Cámaras CCTV' },
  ];

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
