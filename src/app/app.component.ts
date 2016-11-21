import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  title = 'app works!';

  persons = [
    {rows: 2, name: 'Quentin', role: 'Capitaine'},
    {rows: 1, name: 'Jeremy', role: 'Frontend Developer'},
    {rows: 1, name: 'Constantin', role: 'Unknown'},
    {rows: 2, name: 'Guillaume', role: 'Relations Internationales'},
    {rows: 1, name: 'Meryem', role: 'Frontend Developer'},
    {rows: 2, name: 'Louis', role: 'Unknown'},
    {rows: 1, name: 'Thierry-Philippe', role: 'Backend'},
    {rows: 2, name: 'David', role: 'Cafe'},
    {rows: 2, name: 'Camille', role: 'Unknown'},
    {rows: 1, name: 'Than', role: 'Unknown'}
  ];
  @ViewChild('sidenav') sidenav: MdSidenav;
  currentPerson = {};

  showPerson(person: any) {
    this.currentPerson = person;
    this.sidenav.open();
  }
}
