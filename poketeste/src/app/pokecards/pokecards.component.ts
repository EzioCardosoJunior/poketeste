import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.sass']
})
export class PokecardsComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  buscaCard(): void {
    this.authService.buscaCard('pl3-1')
  }
}
