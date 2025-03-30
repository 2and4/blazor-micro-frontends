import { BlazorComponentSetup } from './blazor-component-setup';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-blazor-component',
  imports: [CommonModule],
  templateUrl: './blazor-component.component.html',
  styleUrl: './blazor-component.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlazorComponentComponent implements OnInit, OnDestroy {
  private readonly blazorComponentSetup: BlazorComponentSetup = new BlazorComponentSetup();

  public isInitialized: boolean = false;
  public count: number = 0;

  public ngOnInit(): void {
    (async () => {
      this.isInitialized = await this.blazorComponentSetup.initializeAsync();
    })();
  }

  public sendMessage(): void {
    this.blazorComponentSetup.sendMessage();
  }

  public incrementCount(): void {
    this.count += 1;
  }

  public ngOnDestroy(): void {
    this.isInitialized = false;
  }
}
