import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FormMunicipioComponent } from './form-municipio/form-municipio.component';


@Component({
  selector: 'app-vincular-munici',
  templateUrl: './vincular-munici.component.html',
  styleUrls: ['./vincular-munici.component.css']
})

export class VincularMuniciComponent implements OnInit {

  // formularioGS: FormMunicipioComponent;
  // formularioDAP: FormMunicipioComponent;

  url: string = 'https://httpbin.org/post';

  constructor(private http: Http, public formularioGS: FormMunicipioComponent, public formularioDAP: FormMunicipioComponent) {
   

  }

  ngOnInit() {
    
  }

 
  

}



