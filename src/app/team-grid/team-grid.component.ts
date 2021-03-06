import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-team-grid',
  templateUrl: './team-grid.component.html',
  styleUrls: ['./team-grid.component.css']
})
export class TeamGridComponent implements OnInit {
  persons = [
    {rows: 2, name: 'Quentin', role: 'Capitaine',
      citation:  'Il n\'y a que deux sortes de langages de programmation: ceux dont les gens disent toujours du mal et ceux que personne n\'utilise.'},
    {rows: 1, name: 'Constantin', role: 'Relations Internationales', citation: 'La part de non STI du groupe'},
    {rows: 2, name: 'Jérémy', role: '(Front/Back?)end Developer', citation: 'Don\'t worry if it doesn\'t work right. If everything did, you\'d be out of a job.'},
    {rows: 1, name: 'Guillaume', role: 'Backend Developer', citation: ''},
    {rows: 2, name: 'Camille', role: 'Backend Developer', citation: 'L’espoir fait vivre, et tant qu\'il y a de la vie, il y a de l’espoir. Donc toi aussi, tu es un peu un immortel.'},
    {rows: 1, name: 'Meryem', role: 'Frontend Developer', citation: ''},
    {rows: 2, name: 'Thierry-Philippe', role: 'Backend Developer', citation: 'Dans le doute, Tu reboot'},
    {rows: 2, name: 'David', role: 'Café - Frontend Developer à temps partiel', citation: 'le mieux est l\'ennemi du bien'},
    {rows: 2, name: 'Thanh', role: 'Backend Developer', citation: 'Je ne vois plus rien lorsque je riz'},
    {rows: 1, name: 'Louis', role: 'Frontend Developer', citation: 'L\'avenir appartient à ceux qui ne dorment pas'}
  ];
  @ViewChild('sidenav') sidenav: MdSidenav;
  currentPerson = {};

  showPerson(person: any) {
    this.currentPerson = person;
    this.sidenav.open();
  }
  ngOnInit() {
  }

}
