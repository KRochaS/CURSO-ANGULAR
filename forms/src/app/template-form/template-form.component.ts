import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: ''
  }
  onSubmit(form) {
    console.log(form);
	// console.log(this.usuario);
	

	//Submetendo valores com HTTP POST
	// site do https https://resttesttest.com/
	this.http.post('https://httpbin.org/post', JSON.stringify(form.value)) // Transformando informações em json em formato string
	.map(resp => resp)
	.subscribe(dados => console.log(dados));
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

verificaValidTouched(campo) {
  return !campo.valid && campo.touched;
}

consultaCEP(cep, form) {
  //Nova variável "cep" somente com dígitos.
  cep = cep.replace().replace(/\D/g, '');
  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
    
       //Valida o formato do CEP.
       if(validacep.test(cep)) {

		this.resetaDadosForm(form);

          this.http.get(`https://viacep.com.br/ws/${cep}/json/`) // template literal ecmascript 2015 ${}
			.map(dados => dados.json()) // mapeia  as informações do servidor (os dados) em um json
			.subscribe(dados => this.populaDadadosForm(dados, form)); // fazendo inscrição para receber os dados
        }
      }
	}

	populaDadadosForm(dados, formulario) {
		// formulario.setValue({
		// 	nome: formulario.value.nome,
		// 	email: formulario.value.email,
		// 	endereço: {
		// 		cep: dados.cep,
		// 		numero: '',
		// 		complemento: dados.complemento,
		// 		rua: dados.logradouro,
		// 		bairro: dados.bairro,
		// 		cidade: dados.localidade,
		// 		estado: dados.uf
		// 	} 
		// });

		formulario.form.patchValue({
			endereço: {
			//	cep: dados.cep,
				complemento: dados.complemento,
				rua: dados.logradouro,
				bairro: dados.bairro,
				cidade: dados.localidade,
				estado: dados.uf
			} 
		})
		// console.log(formulario);
	}

	resetaDadosForm(formulario) {
		formulario.form.patchValue({
			endereço: {
				complemento: null,
				rua: null,
				bairro: null,
				cidade: null,
				estado: null
			} 
		})

	}
}
