import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saa-app';
  mostrarMenu: boolean = false;

  constructor(private auth: AuthService){

  }

  ngOnInit(){

      this.auth.mostrarMenu.subscribe(
        mostrar => this.mostrarMenu = mostrar
      )
  }

}
