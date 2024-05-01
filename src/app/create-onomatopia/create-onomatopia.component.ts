import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {
  @Output() newOnomatopia: EventEmitter<string> = new EventEmitter();
  onomatopia: string = '';

  sendOnomatopia(): void {
    this.newOnomatopia.emit(this.onomatopia);
  }

  createOnomatopia(): void {
    console.log(this.onomatopia);
    
    this.sendOnomatopia();
  }


}
