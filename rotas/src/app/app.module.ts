import { AuthGuard } from './guards/auth.guard.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
// import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
// import { CursosService } from './cursos/cursos.service';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
// import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
// import { AlunosComponent } from './alunos/alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // AlunosComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  CursosModule,  2º passo lAZY LOADING - Quando chama o modulo com lazy loading não pode ter em mais nenhum arquivo da aplicação
  //  AlunosModule,
    AppRoutingModule
 // routing
  ],
  providers: [AuthService, AuthGuard],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
