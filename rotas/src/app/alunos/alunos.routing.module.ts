import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const alunosRoutes = [
    // tudo que é hardCode é avaliado primeiro, o :id é um valor dinamico 
    {path: '', component: AlunosComponent, children: [
        {path: 'novo', component:AlunosFormComponent },
        {path: ':id', component:AlunosDetalheComponent },
        {path: ':id/editar', component:AlunosFormComponent },
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports: [RouterModule]
})

export class AlunosRoutingModule {}