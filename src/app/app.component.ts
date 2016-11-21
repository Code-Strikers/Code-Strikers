import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;

  persons = [
    {rows: 2, name: 'Quentin', role: 'Capitaine',
      citation:  'Il n\'y a que deux sortes de langages de programmation: ceux dont les gens disent toujours du mal et ceux que personne n\'utilise.'},
    {rows: 1, name: 'Jérémy', role: '(Front/Back?)end Developer', citation: 'Don\'t worry if it doesn\'t work right. If everything did, you\'d be out of a job.'},
    {rows: 1, name: 'Constantin', role: 'Relations Internationales', citation: ''},
    {rows: 2, name: 'Guillaume', role: 'Backend Developer', citation: ''},
    {rows: 1, name: 'Louis', role: 'Frontend Developer', citation: ''},
    {rows: 2, name: 'Meryem', role: 'Frontend Developer', citation: ''},
    {rows: 1, name: 'Thierry-Philippe', role: 'Backend Developer', citation: ''},
    {rows: 2, name: 'David', role: 'Café - Frontend Developer à temps partiel', citation: ''},
    {rows: 2, name: 'Camille', role: 'Backend Developer', citation: ''},
    {rows: 1, name: 'Than', role: 'Unknown', citation: ''}
  ];
  @ViewChild('sidenav') sidenav: MdSidenav;
  currentPerson = {};

  showPerson(person: any) {
    this.currentPerson = person;
    this.sidenav.open();
  }
}
