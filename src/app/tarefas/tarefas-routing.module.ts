import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "app/tarefas/listar/listar-tarefa.component";
import { CadastrarTarefasComponent } from "app/tarefas/cadastrar/cadastrar-tarefas.component";
import { EditarTarefasComponent } from "app/tarefas/editar/editar-tarefas.component";

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo:'tarefas/listar'
    }, 
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar', 
        component: CadastrarTarefasComponent 
    },
    {
        path: 'tarefas/editar/:id', 
        component: EditarTarefasComponent
    }
];