import { ConfirmationService, MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { EventAction } from '../../../models/event/eventAction';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(private ConfirmationService: ConfirmationService, private messageService: MessageService) { }

  handleProjectAction(event: EventAction): void {
    console.log(event);
  }

  handleDeleteProjectAction(event: {
    id: number;
    name: string;
  }): void {
    if (event) {

    }
    this.ConfirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Projeto deletado com sucesso!' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Projeto mantido!', life: 3000 });
      }
  });
  }


  deleteProject(id: number) {
    alert(`Projeto deletado com sucesso com o id ${id}`);
  }

}
