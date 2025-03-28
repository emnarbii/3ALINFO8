import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  user = [1, 2, 3];

  ing: string = 'LeS ingénieurs ';
  color: string = '';
  path: string = '';
  username: string = '';
  date:Date=new Date();

  clickMe() {
    return alert('bonjour  ' + this.ing);
  }
}
