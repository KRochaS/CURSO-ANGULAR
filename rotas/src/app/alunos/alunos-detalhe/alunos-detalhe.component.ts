import { AlunosModule } from './../alunos.module';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {
  
  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
  ) {

   }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
    (params: any) => {
      let id = params['id'];
    
      this.aluno = this.alunosService.getAluno(id);

      } 
    );
  
  }

  editarContato() {
    // navegando na rota alunos
    this.router.navigate(['/alunos', this.aluno.id, 'editar']); 
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}


