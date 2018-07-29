import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.90,
    dataLancamento: new Date(2001, 5, 21),
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit() {
  }

}
