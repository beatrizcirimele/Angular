import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from './../../service/tema.service';
import { Tema } from 'src/app/model/Tema';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
  idTema: number

  constructor(

  private temaService: TemaService,
  private router: Router,
  private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if(environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    this.idTema= this.route.snapshot.params['id']
    this. buscarTemaPorId(this.idTema)
  }
  buscarTemaPorId(id: number) {
    this.temaService.getTemaById(id).subscribe((resp: Tema) => {
      this.tema = resp
})

}

apagar(){
  this.temaService.deleteTema(this.idTema).subscribe(()=>{
    alert('Tema apagado com sucesso!')
    this.router.navigate(['/tema'])
})

}
}