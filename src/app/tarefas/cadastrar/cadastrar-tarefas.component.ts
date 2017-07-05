import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa } from "app/tarefas/shared/tarefa.model";
import { TarefaService } from "app/tarefas/shared/tarefa.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(){
    if (this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
