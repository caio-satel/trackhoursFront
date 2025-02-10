import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectsService } from './../../../services/projects/projects.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Component, OnDestroy } from '@angular/core';
import { EventAction } from '../../../models/event/eventAction';
import { ProjectFormComponent } from '../components/project-form/project-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnDestroy {
  private ref!: DynamicDialogRef;
  private destroy$ = new Subject<void>(); // Controlador de destruição

  constructor(
    private ConfirmationService: ConfirmationService,
    private messageService: MessageService,
    private ProjectsService: ProjectsService,
    private DialogService: DialogService
  ) {}

  handleProjectAction(event: EventAction): void {
    if (event) {
      this.ref = this.DialogService.open(ProjectFormComponent, {
        header: event?.action,
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        data: { event: event }
      });
    }
    this.ref.onClose
      .pipe(takeUntil(this.destroy$)) // Cancela quando destroy$ for acionado
      .subscribe(() => {
      });
  }

  handleDeleteProjectAction(project: { id: number; name: string }): void {
    if (project) {
      this.ConfirmationService.confirm({
        message: `Tem certeza que deseja deletar o projeto ${project.name}?`,
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        acceptButtonStyleClass: "p-button-success p-button-outlined",
        rejectButtonStyleClass: "p-button-danger p-button-text",
        acceptIcon: 'none',
        rejectIcon: 'none',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          this.ProjectsService.deleteProject(project.id)
            .pipe(takeUntil(this.destroy$)) // Cancela quando destroy$ for acionado
            .subscribe({
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

  ngOnDestroy(): void {
    this.destroy$.next(); // Dispara a finalização das inscrições
    this.destroy$.complete(); // Finaliza o Subject
  }
}
