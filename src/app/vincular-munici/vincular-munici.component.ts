
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vincular-munici',
  templateUrl: './vincular-munici.component.html',
  styleUrls: ['./vincular-munici.component.css']
})
export class VincularMuniciComponent implements OnInit {

  private anos: string[] = ["2007/2008", "2009/2010","2011/2012","2013/2014","2015/2016"]

  public getAnos(){
    return this.anos;
  }
  onSubmit(form){
    console.log(form)
    
  }
  constructor() { }

  ngOnInit() {
  }

}

