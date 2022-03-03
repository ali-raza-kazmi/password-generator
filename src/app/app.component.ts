import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSliderChange } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly color: ThemePalette = 'primary';

  password: string = '';

  sliderValue: number = 8;

  includeNumber: boolean = true;
  includeLetters: boolean = false;
  includeSymbols: boolean = false;

  private readonly _numbers = "0123456789";
  private readonly _letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly _symbols = "./=],)}$#&*?@%{([-";

  constructor(
    private readonly _clipboard: Clipboard,
    private readonly _snackBar: MatSnackBar
  ) { }

  readonly onSliderChange = (change: MatSliderChange) => {
    this.sliderValue = change.value || 0;
  }

  readonly copyPassword = () => {
    this._clipboard.copy(this.password);
    this._snackBar.open('Password copied !', '', { duration: 1000 });
  }

  readonly generatePassword = () => {
    if (this.disableGeneratePasswordBtn()) {
      return;
    }
    this.password = '';
    let collection = [];
    if (this.includeNumber) {
      collection.push(this._numbers);
    }
    if (this.includeLetters) {
      collection.push(this._letters);
    }
    if (this.includeSymbols) {
      collection.push(this._symbols);
    }
    for (let i = 0; i < this.sliderValue; i++) {
      const pickCollection = Math.floor(Math.random() * collection.length);
      const current = collection[pickCollection];
      const chosenCharacter = current[Math.floor(Math.random() * current.length)];
      this.password += chosenCharacter;
    }
  }

  readonly disableGeneratePasswordBtn = () => {
    return !(this.includeNumber || this.includeLetters || this.includeSymbols);
  }
}
