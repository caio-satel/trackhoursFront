import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ProjectsComponent } from './page/projects.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from '@angular/router';
import { projectsRoutes } from './projects.routing';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectTableComponent,
    ProjectsComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(projectsRoutes),
    //PrimeNG
    TagModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    CardModule,
    CalendarModule,
    TooltipModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    DropdownModule,
    ToastModule,
    FloatLabelModule,
    DropdownModule,
    //SharedModule
    SharedModule
],
  providers: [DialogService, ConfirmationService]
})
export class ProjectsModule { }
