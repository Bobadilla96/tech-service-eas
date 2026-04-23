import { Component, Input, OnChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

export type IconName = "electricidad" | "tablero" | "tierra" | "mantenimiento" | "proyecto" | "ascensores" | "venta" | "instalacion" | "automatizacion" | "contrato" | "escaleras" | "cctv" | "remoto" | "grabacion" | "ia" | "cableado" | "frio" | "climatizacion";

const PATHS: Record<IconName, string> = {
  "electricidad": "<rect x=\"8\" y=\"6\" width=\"32\" height=\"36\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M28 28L25 34H29L27 40L35 32H30L32 28H28Z\" fill=\"currentColor\"/>",
  "tablero": "<rect x=\"6\" y=\"4\" width=\"36\" height=\"40\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"11\" y=\"10\" width=\"10\" height=\"7\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"27\" y=\"10\" width=\"10\" height=\"7\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"16\" cy=\"24\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"32\" cy=\"24\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\"/>",
  "tierra": "<line x1=\"24\" y1=\"6\" x2=\"24\" y2=\"26\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"12\" y1=\"30\" x2=\"36\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"16\" y1=\"35\" x2=\"32\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><line x1=\"20\" y1=\"40\" x2=\"28\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
  "mantenimiento": "<path d=\"M36 10L38 8L40 10L38 12Z\" fill=\"currentColor\"/><path d=\"M36 10L26 20L10 36C9 37 9 39 10 40C11 41 13 41 14 40L30 24L36 10\" stroke=\"currentColor\" stroke-width=\"2\"/>",
  "proyecto": "<rect x=\"6\" y=\"8\" width=\"36\" height=\"32\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"6\" y1=\"14\" x2=\"42\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M14 24L20 30L34 20\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>",
  "ascensores": "<rect x=\"14\" y=\"4\" width=\"20\" height=\"36\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"18\" y=\"10\" width=\"12\" height=\"18\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M20 16L24 12L28 16\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M20 22L24 26L28 22\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>",
  "venta": "<path d=\"M8 8H12L15 28H36L40 14H18\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"20\" cy=\"34\" r=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"32\" cy=\"34\" r=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/>",
  "instalacion": "<path d=\"M30 8L26 12L28 16L24 20L28 24L32 20L36 22L40 18L36 10L30 8Z\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M10 38L20 28\" stroke=\"currentColor\" stroke-width=\"2\"/>",
  "automatizacion": "<rect x=\"10\" y=\"14\" width=\"28\" height=\"20\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"18\" cy=\"24\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"24\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\"/>",
  "contrato": "<rect x=\"10\" y=\"4\" width=\"28\" height=\"40\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"16\" y1=\"14\" x2=\"32\" y2=\"14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M22 36L25 39L32 32\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
  "escaleras": "<path d=\"M8 40H18V32H28V24H38V14\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "cctv": "<path d=\"M8 18H28L36 14V34L28 30H8V18Z\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"18\" cy=\"24\" r=\"4\" stroke=\"currentColor\" stroke-width=\"1.5\"/><line x1=\"28\" y1=\"40\" x2=\"28\" y2=\"30\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
  "remoto": "<rect x=\"8\" y=\"10\" width=\"32\" height=\"22\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"21\" r=\"5\" stroke=\"currentColor\" stroke-width=\"1.5\"/>",
  "grabacion": "<rect x=\"6\" y=\"10\" width=\"36\" height=\"28\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"24\" r=\"4\" fill=\"currentColor\" opacity=\"0.3\"/><circle cx=\"24\" cy=\"24\" r=\"2\" fill=\"currentColor\"/>",
  "ia": "<circle cx=\"24\" cy=\"24\" r=\"10\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"24\" cy=\"24\" r=\"4\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M17 17L20 20M31 17L28 20M17 31L20 28M28 28L31 31\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>",
  "cableado": "<path d=\"M10 14C14 10 18 14 22 18C26 10 30 14 34 18C38 14 38 14 38 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M10 28C14 24 18 28 22 32C26 24 30 28 34 32C38 28 38 28 38 28\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
  "frio": "<line x1=\"24\" y1=\"8\" x2=\"24\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"8\" y1=\"24\" x2=\"40\" y2=\"24\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"13\" y1=\"13\" x2=\"35\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><line x1=\"35\" y1=\"13\" x2=\"13\" y2=\"35\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"24\" cy=\"24\" r=\"4\" stroke=\"currentColor\" stroke-width=\"1.5\"/>",
  "climatizacion": "<circle cx=\"24\" cy=\"20\" r=\"12\" stroke=\"currentColor\" stroke-width=\"2\"/><path d=\"M24 8V6M24 34V32M8 20H6M42 20H40\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M24 14V20L29 23\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 38H36\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>"
};

@Component({
  selector: "app-icon",
  standalone: true,
  imports: [CommonModule],
  template: "<span [innerHTML]='svg'></span>",
  styles: [":host{display:inline-flex;align-items:center;justify-content:center;}span{display:inline-flex;}"]
})
export class IconComponent implements OnChanges {
  @Input() name: IconName = "electricidad";
  @Input() size: number = 24;
  svg: SafeHtml = "";
  constructor(private sanitizer: DomSanitizer) {}
  ngOnChanges(): void {
    const inner = PATHS[this.name] ?? PATHS["electricidad"];
    const raw = `<svg width="${this.size}" height="${this.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
    this.svg = this.sanitizer.bypassSecurityTrustHtml(raw);
  }
}
