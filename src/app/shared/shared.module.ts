import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//PrimeNG
import { StyleClassModule } from 'primeng/styleclass';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogService } from 'primeng/dynamicdialog';
import { ToolbarNavigationComponent } from './components/toolbar-navigation/toolbar-navigation.component';

@NgModule({
  declarations: [
    ToolbarNavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //PrimeNG
    ToolbarModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    RippleModule,
    StyleClassModule,
    ToolbarModule,
    InputTextModule
  ],
  exports: [ToolbarNavigationComponent],
  providers: [DialogService, CurrencyPipe]
})
export class SharedModule { }
