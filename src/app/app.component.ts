import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './pages/home/sections/hero/hero.component';
import { ElectricidadComponent } from './pages/home/sections/electricidad/electricidad.component';
import { AscensoresComponent } from './pages/home/sections/ascensores/ascensores.component';
import { GaleriaComponent } from './pages/home/sections/galeria/galeria.component';
import { EscalerasComponent } from './pages/home/sections/escaleras/escaleras.component';
import { CctvComponent } from './pages/home/sections/cctv/cctv.component';
import { AireComponent } from './pages/home/sections/aire/aire.component';
import { ContactoComponent } from './pages/home/sections/contacto/contacto.component';

@Component({
  selector: 'x-app',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ElectricidadComponent,
    AscensoresComponent,
    GaleriaComponent,
    EscalerasComponent,
    CctvComponent,
    AireComponent,
    ContactoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(el: ElementRef<HTMLElement>) {
    el.nativeElement.removeAttribute('ng-version');
    try { delete (window as any)['ng']; } catch {}
  }
}
