import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { MarvelEventosResponse } from 'src/app/models/eventos-detalhes.interface';
import { PersonagemMarvel } from 'src/app/models/personagens-marvel.interface';
import { MarvelDetalhesResponse, Series } from 'src/app/models/series-detalhes.interface';
import { MarvelService } from 'src/app/service/marvel.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})

export class DetalheComponent implements OnInit {
  @Output() fechar = new EventEmitter<void>();
  @Input() personagemSelecionado: PersonagemMarvel | undefined;
  public imagemFundo: string | undefined | null;
  public nomePersonage: string | undefined;
  public dataAtualizacao: string | undefined;
  public descricao: string | undefined;
  public dadosSeries: MarvelDetalhesResponse<Series> | undefined;
  public dadosEventos: MarvelEventosResponse | undefined;
  public wiki: string | undefined;
  public maisDetalhes: string | undefined;
  public comic: string | undefined;
  public idPersonagem: number | undefined;

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {

    this.montaInformacoes()
    this.getSeries()
    this.getEventos()
  }

  public montaInformacoes(): void {
    if (this.personagemSelecionado) {
      this.imagemFundo = `${this.personagemSelecionado?.thumbnail.path + "." + this.personagemSelecionado?.thumbnail.extension}`;
      this.nomePersonage = this.personagemSelecionado?.name;
      this.dataAtualizacao = this.personagemSelecionado?.modified;
      this.descricao = this.personagemSelecionado?.description;

      if(this.personagemSelecionado?.urls.length > 0)
      {
        this.personagemSelecionado?.urls.forEach(url => {
          switch (url.type) {
            case "detail":
              this.maisDetalhes = url.url;
              break;
            case "wiki":
              this.wiki = url.url;
              break;
            case "comiclink":
              this.comic = url.url;
              break;
          }
        })
      }
      this.idPersonagem = this.personagemSelecionado?.id;
    }
  }

  public getSeries(): void {
    this.marvelService.getSeries(`${this.idPersonagem}`).subscribe((data: MarvelDetalhesResponse<Series>) => {
      this.dadosSeries = data
    })
  }


  public getEventos(): void {
    this.marvelService.getEventos(`${this.idPersonagem}`).subscribe((data: MarvelEventosResponse) => {
      this.dadosEventos = data;
      console.log(this.dadosEventos, "eventos", this.dadosEventos?.data.total)
    })
  }

  public fecharDialog(): void {
    this.fechar.emit();
  }

  public abrirNavegador(url: string | null | undefined): void {
    if (url)
      window.open(url, '_blank');
  }
}
