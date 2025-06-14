import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from '../components/button-primary/button-primary.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [ButtonPrimaryComponent, HeaderComponent],
  exports: [ButtonPrimaryComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
