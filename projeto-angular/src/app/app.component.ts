import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponentComponent } from './meu-component/meu-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensagem:string = 'Olá mundo!';

}
