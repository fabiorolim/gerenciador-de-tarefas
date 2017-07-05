import { Component, OnInit } from '@angular/core';
import { TarefaService } from "app/tarefas/shared/tarefa.service";
import { Tarefa } from "app/tarefas/shared/tarefa.model";

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodas();
  }

  remover($event: any, tarefa: Tarefa) {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefe"' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }

  }

  alterarStatus(tarefa: Tarefa) {
    if (confirm('Deseja alterar o status da tarefa"' +tarefa.nome+ '"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
