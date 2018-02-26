import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {


	populaDadadosForm(arg0: any): any {
		throw new Error("Method not implemented.");
	}
  formulario: FormGroup;

  constructor(
	private formbuilder: FormBuilder,
	private http: Http
  ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null), // null é o valor inicial do campo (sem valor nenhum)
    //   email: new FormControl(null)
    // });


	this.formulario = this.formbuilder.group({
		nome: [null, Validators.required],
		email: [null, [Validators.required, Validators.email]],
  
		endereco: this.formbuilder.group({
		  cep: [null, Validators.required],
		  numero: [null, Validators.required],
		  complemento: [null],
		  rua: [null, Validators.required],
		  bairro: [null, Validators.required],
		  cidade: [null, Validators.required],
		  estado: [null, Validators.required]
		})
	  });

		// [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  }

  onSubmit() {
	  console.log(this.formulario.value);

	  this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)) // Transformando informações em json em formato string
		.map(resp => resp)
		.subscribe(dados =>  {
			console.log(dados);
			// reseta o form
			//this.formulario.reset();

			this.resetar();
			},
			(error: any) => alert('erro')
		);

  	}


	resetar() {
		this.formulario.reset();
	}
	
	verificaValidTouched(campo: string) {
		console.log(campo, this.formulario.get('endereco'));
	
		return (
		  !this.formulario.get(campo).valid &&
		  (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
		);

	  }
	verificaEmailInvalido() {
		let campoEmail = this.formulario.get('email');
		if(this.formulario.get('email').errors){ // errors é um atributo do javascript possivel ver no console.log
			return campoEmail.errors['email'] && campoEmail.touched;
		}
	}


	aplicaCssErro(campo: string){
		return {
			'has-error': this.verificaValidTouched(campo),
			'has-feedback': this.verificaValidTouched(campo)
		}
	}

	consultaCEP() {

		let cep = this.formulario.get('endereco.cep').value;
		//Nova variável "cep" somente com dígitos.
		cep = cep.replace().replace(/\D/g, '');
		//Verifica se campo cep possui valor informado.
		if (cep != "") {
		  
			//Expressão regular para validar o CEP.
			var validacep = /^[0-9]{8}$/;
		  
			 //Valida o formato do CEP.
			 if(validacep.test(cep)) {
	  
			  this.resetaDadosForm();
	  
				this.http.get(`https://viacep.com.br/ws/${cep}/json/`) // template literal ecmascript 2015 ${}
				  .map(dados => dados.json()) // mapeia  as informações do servidor (os dados) em um json
				  .subscribe(dados => this.populaDadadosForm(dados)); // fazendo inscrição para receber os dados
			  }
			}
		  }
	  populaDadosForm(dados) {
		//this.formulario.setValue({});
		this.formulario.patchValue({
		  endereco: {
			rua: dados.logradouro,
		    cep: dados.cep,
			complemento: dados.complemento,
			bairro: dados.bairro,
			cidade: dados.localidade,
			estado: dados.uf
		  }
		});
	
	
		// console.log(form);
	  }
	
	  resetaDadosForm() {
		this.formulario.patchValue({
		  endereco: {
			rua: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null
		  }
		});
	  }
	}