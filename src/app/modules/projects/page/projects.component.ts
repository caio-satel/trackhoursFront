import { ProjectsService } from './../../../services/projects/projects.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { EventAction } from '../../../models/event/eventAction';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private ConfirmationService: ConfirmationService, private messageService: MessageService, private ProjectsService: ProjectsService) { }

  handleProjectAction(event: EventAction): void {
    console.log(event);
  }

  handleDeleteProjectAction(project: {
    id: number;
    name: string;
  }): void {
    if (project) {
      this.ConfirmationService.confirm({
        message: `Tem certeza que deseja deletar o projeto ${project.name}?`,
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon: 'none',
        rejectIcon: 'none',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
            this.ProjectsService.deleteProject(project.id).subscribe({
                next: (response) => {
                    if (response) {
                        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Projeto deletado com sucesso!', life: 2500 });
                    }
                },
                error: () => {
                    this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao deletar projeto!', life: 2500 });
                }
            });
        }
    });
    }
  }

}
