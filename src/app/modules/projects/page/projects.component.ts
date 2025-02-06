import { Component } from '@angular/core';
import { Projeto } from '../../../models/projects/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  date: Projeto[] | undefined;
}
