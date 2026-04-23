import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  theme: 'dark' | 'light' = 'dark';

  navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Electricidad', href: '#electricidad' },
    { label: 'Ascensores', href: '#ascensores' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Escaleras', href: '#escaleras' },
    { label: 'CCTV', href: '#cctv' },
    { label: 'Contacto', href: '#contacto' },
  ];

  ngOnInit() {
    const savedTheme = window.localStorage.getItem('tech-service-theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    this.theme = savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : (systemPrefersLight ? 'light' : 'dark');

    this.applyTheme();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }

  scrollTo(href: string) {
    this.menuOpen = false;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('tech-service-theme', this.theme);
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.toggle('light-theme', this.theme === 'light');
  }
}
