import { TemaService } from './../service/tema.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaservice: TemaService
  ) { }

  ngOnInit() {
    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    this.findAllTemas()
  }
    findAllTemas(){
      this.temaservice.getAllTema().subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    
  }
cadastrar(){
  this.temaservice.postTema(this.tema).subscribe((Resp: Tema)=>{
    this.tema = Resp
    alert('Tema cadastrado com sucesso!')
    this.findAllTemas()
    this.tema = new Tema()
  })

}
}
