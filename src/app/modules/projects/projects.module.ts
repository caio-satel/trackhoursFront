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


@NgModule({
  declarations: [
    ProjectTableComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(projectsRoutes),
    //PrimeNG
    TagModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    //SharedModule
    SharedModule
]
})
export class ProjectsModule { }
