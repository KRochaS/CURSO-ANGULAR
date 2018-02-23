import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {


  formulario: FormGroup;

  constructor(
    private formbuilder: FormBuilder 
  ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null), // null é o valor inicial do campo (sem valor nenhum)
    //   email: new FormControl(null)
    // });


    this.formulario = this.formbuilder.group({
		nome: [null],
		email: [null]
	});
  }

}
