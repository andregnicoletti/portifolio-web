import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubService } from 'src/app/services/github.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Repository } from 'src/app/types/repository.interface';

@NgModule({
  declarations: [],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [],
})
export class HomeModule implements OnInit {
  repositories: Repository[] = [];

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.gitHubService.getRepositories().subscribe({
      next: (response) => (this.repositories = response.body ?? []),
    });
  }
}
