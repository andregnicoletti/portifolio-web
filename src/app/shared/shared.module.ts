import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from '../components/button-primary/button-primary.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainSectionComponent } from '../pages/main-section/main-section.component';
import { MainImageComponent } from '../components/main-image/main-image.component';

@NgModule({
  declarations: [ButtonPrimaryComponent, HeaderComponent, MainSectionComponent, MainImageComponent],
  exports: [ButtonPrimaryComponent, HeaderComponent, MainSectionComponent],
  imports: [CommonModule],
})
export class SharedModule {}
