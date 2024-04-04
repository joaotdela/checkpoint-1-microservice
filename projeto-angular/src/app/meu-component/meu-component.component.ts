import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-component.component.html',
  styleUrl: './meu-component.component.css'
})
export class MeuComponentComponent {
  interesses:string[] = ["programação", "viagem", "fotografia"];
}
