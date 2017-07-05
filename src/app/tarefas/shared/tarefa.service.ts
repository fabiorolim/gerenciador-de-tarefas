import { Injectable } from '@angular/core';
import { Tarefa } from "app/tarefas/shared/tarefa.model";

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodas(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas): [];
    // if (tarefas) {
    //   return JSON.parse(tarefas);
    // } else {
    //   return [];
    // }
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodas();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodas();
    //faz a busca na lista de tarefas
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodas();
    //entender melhor essa busca 
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number) {
    let tarefas: Tarefa[] = this.listarTodas();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodas();
    tarefas.forEach((obj, index, objs) => {
      if (obj.id === id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
