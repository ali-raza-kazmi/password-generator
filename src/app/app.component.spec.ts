import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ClipboardModule,
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as color 'primary'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.color).toEqual('primary');
  });

  it(`Disable button function should return false when atleast 1 toggle is checked`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    appInstance.includeNumber = true;
    appInstance.includeLetters = false;
    appInstance.includeSymbols = false;
    expect(appInstance.disableGeneratePasswordBtn()).toEqual(false);
  });

  it(`Disable button function should return true when all toggle are unchecked`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    appInstance.includeNumber = false;
    appInstance.includeLetters = false;
    appInstance.includeSymbols = false;
    expect(appInstance.disableGeneratePasswordBtn()).toEqual(true);
  });

  it(`Generate password button should generate 10 length password when slider is at 10`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    appInstance.sliderValue = 10;
    appInstance.password = '';
    appInstance.generatePassword();
    expect(appInstance.password.length).toEqual(10);
  });
});
