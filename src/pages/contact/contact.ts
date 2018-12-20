import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public pessoa = {
    matricula:'',
    nome:'',
    imagem:''

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pessoa.nome = "Jocker";
    this.pessoa.matricula = "201521200084";
    this.pessoa.imagem = "../assets/imgs/joker.jpg";
  }

}
