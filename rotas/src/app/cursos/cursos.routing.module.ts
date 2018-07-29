import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const cursosRoutes: Routes = [
    { path: '', component: CursosComponent}, // 3º passo para funcionar lazy loading (deixar em branco o path)
    { path: 'naoEncontrado', component:CursoNaoEncontradoComponent},
    { path: ':id', component: CursoDetalheComponent},
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)], // modulo de funcionalidade não usa-se forRoot e sim forChild
    exports: [RouterModule] // como não é para ficar interna no modulo usa-se o exports 

})
export class CursosRoutingModule {}