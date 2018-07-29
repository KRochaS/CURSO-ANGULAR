import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>(); 
    // quando duas instancias do curso service forem criadas a variavel criouNovoCurso vai ser compartilhadas entre as instancias porque a mesma é static

    private cursos: string[] = ["Angular 2", "Javascript", "Ionic"];

    constructor (private logService: LogService) {
        console.log('CursosService');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;

    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}