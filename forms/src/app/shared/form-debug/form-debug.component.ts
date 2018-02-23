import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form; // variável form que é um input property (passar do formulário para outro componente )

  constructor() { }

  ngOnInit() {
  }

}
