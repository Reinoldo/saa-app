import { PesquisarComponent } from './pesquisar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [PesquisarComponent]
})
export class PesquisarModule { }
