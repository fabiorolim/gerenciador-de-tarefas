import { Component, OnInit, ViewChild } from '@angular/core';
import { TarefaService } from "app/tarefas/shared/tarefa.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Tarefa } from "app/tarefas/shared/tarefa.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  tarefa: Tarefa;

  @ViewChild('formTarefa') formTarefa: NgForm;

  constructor(private tarefaService: TarefaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  editar() {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
}
