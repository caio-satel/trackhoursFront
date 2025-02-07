import { ProjectEvent } from '../../../../models/enums/projects/projectEvent';
import { DeleteProjectAction } from '../../../../models/event/DeleteProjectAction';
import { EventAction } from '../../../../models/event/eventAction';
import { Projeto } from './../../../../models/projects/project.interface';
import { ProjectsService } from './../../../../services/projects/projects.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.css'
})
export class ProjectTableComponent {
  projects!: Projeto[];
  projectsGeral!: Projeto[];
  @Output() projectEvent = new EventEmitter<EventAction>();
  @Output() deleteProjectEvent = new EventEmitter<DeleteProjectAction>();

  public addProjectEvent = ProjectEvent.ADD;
  public editProjectEvent = ProjectEvent.EDIT;

  constructor(private ProjectsService: ProjectsService) {}

  userMap: Map<number, string> = new Map();
  ngOnInit() {
      // this.ProjectsService.getProjects().subscribe((data: Projeto[]) => {
      //     this.projects = data;
      // });

      this.userMap.set(101, 'João Silva');
      this.userMap.set(102, 'Maria Oliveira');
      this.userMap.set(103, 'Carlos Santos');

      this.projects = [
        {
          id: 1,
          prioridade: 'ALTA',
          nome: 'Projeto Alpha',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 101,
          status: 'EM_ANDAMENTO',
        },
        {
          id: 2,
          prioridade: 'MEDIA',
          nome: 'Projeto Beta',
          dataInicio: new Date(2024, 1, 15),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 102,
          status: 'PLANEJADO',
        },
        {
          id: 3,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 4,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 5,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 6,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 20),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 7,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 8,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 9,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 10,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 11,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 12,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 13,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 14,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          id: 15,
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CANCELADO',
        },
      ];
      this.projectsGeral = [...this.projects];
  }

  handleProjectEvent(action: string, id?: number) {
    if (action && action!== '') {
      const projectEventData = id && id !== 0 ? { action, id } : { action };
      // Emitir evento de projeto
      this.projectEvent.emit(projectEventData);
    }
  }

  handleDeleteProjectEvent(id: number, name: string): void {
    if (id !== 0 && name !== '') {
      this.deleteProjectEvent.emit({ id, name });
    }
  }

  getUsuarioNome(id: number): string {
    return this.userMap.get(id) || '-';
}

  getSeverityStatus(status: string) {
      switch (status) {
        case 'PLANEJADO':
          return 'info';
        case 'EM_ANDAMENTO':
          return 'warning';
        case 'CONCLUIDO':
          return 'secondary';
        case 'CANCELADO':
          return 'danger';
      }
      return 'info';
  }

  getSeverityPriority(status: string) {
    switch (status) {
      case 'ALTA':
        return 'danger';
      case 'MEDIA':
        return 'warning';
      case 'BAIXA':
        return 'info';
    }
    return 'info';
}

search(event : Event){
  //Recebe o evento de INPUT - Toda vez que algo é digitado no input, ele é capturado
  const target = event.target as HTMLInputElement;
  //Transforma o value do input em string (todos os caracteres ficam minúsculos) e remove espaços
  const value = target.value.trim().toLowerCase();

  //Filtra os clientes com base no valor inserido no input, atualizando a lista de projetos
  this.projects = this.projectsGeral?.filter(Projeto => {
    return Projeto.nome.toLowerCase().includes(value);
  })
}

}
