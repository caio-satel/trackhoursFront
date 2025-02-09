import { MessageService } from 'primeng/api';
import { ProjectsService } from './../../../../services/projects/projects.service';
import { UsersService } from './../../../../services/users/users.service';
import { Usuario } from './../../../../models/users/user.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjetoDTO } from '../../../../models/projects/project.interface';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  public addProductForm = this.fb.group({
    prioridade: ['', Validators.required],
    nome: ['', Validators.required],
    dataInicio: ['', Validators.required],
    dataFim: ['', Validators.required],
    idUsuarioResponsavel: [0, Validators.required],
    status: ['', Validators.required],
  });

  users: Usuario[] = [];
  userSelected: Array<{nome: string, id: number}> = [];

  constructor(
    private ProjectsService: ProjectsService,
    private UsersService: UsersService,
    private fb: FormBuilder,
    private MessageService: MessageService
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.UsersService.getUsers().subscribe((data: Usuario[]) => {
      this.users = data;
    });
  }

  submitAddProjectForm(): void {
    if (!this.addProductForm.valid || !this.addProductForm.value) {
      this.MessageService.add({
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Preencha todos os campos obrigatórios!',
        life: 2500
      });
      return; // Impede o envio se o formulário estiver inválido
    }

    const formValue = this.addProductForm.value;

    const project: ProjetoDTO = {
      nome: formValue.nome as string,
      dataInicio: formValue.dataInicio ? new Date(formValue.dataInicio) : new Date(),
      dataFim: formValue.dataFim ? new Date(formValue.dataFim) : new Date(),
      status: formValue.status as 'PLANEJADO' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO',
      idUsuarioResponsavel: formValue.idUsuarioResponsavel ?? 0,
      prioridade: formValue.prioridade as 'ALTA' | 'MEDIA' | 'BAIXA'
    };

    this.ProjectsService.createProject(project).subscribe({
      next: (response) => {
        if (response) {
          this.MessageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Projeto criado com sucesso!',
            life: 2500
          });

          this.addProductForm.reset(); // Limpa o formulário após sucesso
        }
      },
      error: () => {
        this.MessageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao criar projeto!',
          life: 2500
        });
      }
    });
  }

}
