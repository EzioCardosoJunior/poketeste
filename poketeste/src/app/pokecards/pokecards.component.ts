import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.sass']
})
export class PokecardsComponent implements OnInit {
  retorno: any;
  primeiro: any;
  foto: any;
  imageLarge: any;
  imageSmall: any;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.buscaCard('pl3-1').subscribe(data => {
      console.log(data.data)
      console.log(data.data[0].images.large)
      this.retorno = data[0]
      this.primeiro = data.data[0].artist
      this.imageLarge = data.data[0].images.large
      this.imageSmall = data.data[0].images.small
    })
    
  }
  
  buscaCard(): void {
    
  }
}
