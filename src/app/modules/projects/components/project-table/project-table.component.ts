import { SortEvent } from 'primeng/api';
import { Projeto } from './../../../../models/projects/project.interface';
import { ProjectsService } from './../../../../services/projects/projects.service';
import { Component } from '@angular/core';

interface SortEvent1 {
  data: any[];    // Os dados da tabela que estão sendo ordenados
  field: string;  // O nome da coluna que está sendo ordenada (ex: "prioridade")
  order: number;  // Direção da ordenação: 1 para ascendente, -1 para descendente
}

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.css'
})
export class ProjectTableComponent {
  projects!: Projeto[];
  projectsGeral!: Projeto[];
  cols!: ['Prioridade', 'Nome', 'Inicio', 'Final', 'Responsável', 'Status', 'Ações'];

  userMap: Map<number, string> = new Map();

  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit() {
      // this.ProjectsService.getProjects().subscribe((data: Projeto[]) => {
      //     this.projects = data;
      // });

      this.userMap.set(101, 'João Silva');
      this.userMap.set(102, 'Maria Oliveira');
      this.userMap.set(103, 'Carlos Santos');

      this.projects = [
        {
          prioridade: 'ALTA',
          nome: 'Projeto Alpha',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 101,
          status: 'EM_ANDAMENTO',
        },
        {
          prioridade: 'MEDIA',
          nome: 'Projeto Beta',
          dataInicio: new Date(2024, 1, 15),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 102,
          status: 'PLANEJADO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 20),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
          prioridade: 'BAIXA',
          nome: 'Projeto Gama',
          dataInicio: new Date(2024, 1, 10),
          dataFim: new Date(2024, 1, 10),
          idUsuarioResponsavel: 103,
          status: 'CONCLUIDO',
        },
        {
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
