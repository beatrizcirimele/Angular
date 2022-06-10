import { ActivatedRoute, Router } from '@angular/router';
import { TemaService } from './../../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/model/Tema';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

tema: Tema = new Tema()

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    
    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    let id= this.route.snapshot.params['id']
    this.buscarTemaPorId(id)
  }
  buscarTemaPorId(id: number) {
    this.temaService.getTemaById(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }
  

  editarTema() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema editado com sucesso')
      this.router.navigate(['/temas'])
    })
  }

}

  
 