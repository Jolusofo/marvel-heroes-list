import { Component, OnInit } from '@angular/core';
import { MarvelEvent } from 'src/app/models/marvel-eventos.interface';
import { MarvelSeries } from 'src/app/models/marvel-series.interface';
import { PersonagemMarvel } from 'src/app/models/personagens-marvel.interface';
import { MarvelService } from 'src/app/service/marvel.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  dialogAberto: boolean = false;
  paginaAtual: number = 1;
  itemsPorPagina: number = 10;
  totalpaginas: number = 0;
  data: Array<PersonagemMarvel> = [];
  pesquisaPersonagem: string | null | undefined;
  public personagemSelecionado: PersonagemMarvel | undefined;

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getAppSettings().subscribe((chaves:any) =>{
      this.marvelService.apiKey = chaves.apiKey;
      this.marvelService.hash = chaves.hash;
      this.getListaPersonagens(`${this.paginaAtual - 1}`)
    });

  }

  private getListaPersonagens(pagina: string) {
    this.marvelService.getPersonagens(pagina).subscribe((data: any) => {
      this.data = data.data.results;
      this.totalpaginas = data.data.total
    });
  }

  public onSearchInputChange() {
    console.log(this.pesquisaPersonagem)
    if (this.pesquisaPersonagem) {
      this.paginaAtual != 1 && this.pesquisaPersonagem.length == 1 ? this.paginaAtual = 1 : '';
      this.getPesquisaPersonagem(`${this.paginaAtual - 1}`)

    } else {
      this.getListaPersonagens(`${(this.paginaAtual - 1) * 10}`)
    }

  }

  private getPesquisaPersonagem(pagina: string) {
    if (this.pesquisaPersonagem) {
      this.marvelService.getBuscarPersonagem(this.pesquisaPersonagem, pagina).subscribe(data => {
        this.data = data.data.results;
        this.totalpaginas = data.data.total;
      });
    }
  }

  get totalPaginas() {
    return Math.ceil(this.totalpaginas / this.itemsPorPagina);
  }

  public proximaPagina() {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;

      if (!this.pesquisaPersonagem) {
        this.getListaPersonagens(`${(this.paginaAtual - 1) * 10}`)
      } else {
        this.getPesquisaPersonagem(`${(this.paginaAtual - 1) * 10}`)
      }
    }
  }

  public voltarPagina() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      if (!this.pesquisaPersonagem) {
        this.getListaPersonagens(`${(this.paginaAtual - 1) * 10}`)
      } else {
        this.getPesquisaPersonagem(`${(this.paginaAtual - 1) * 10}`)
      }
    }
  }

  public irParaPagina(page: number) {
    if (page >= 1 && page <= this.totalPaginas) {
      this.paginaAtual = page;
      if (!this.pesquisaPersonagem) {
        this.getListaPersonagens(`${(this.paginaAtual - 1) * 10}`)
      } else {
        this.getPesquisaPersonagem(`${(this.paginaAtual - 1) * 10}`)
      }
    }
  }

  public abrirDialog(personagem: any): void {
    this.personagemSelecionado = personagem;
    this.dialogAberto = true;
  }

  public fecharDialog(): void {
    this.dialogAberto = false;
  }

  public listarEventos(eventos: MarvelEvent): string {
    let listaEventos = "Não possui evento";
    if (eventos.available == 0) {
      return listaEventos;
    } else {
      listaEventos = "";
      const maxEventos = 3;
      for (let i = 0; i < Math.min(maxEventos, eventos.items.length); i++) {
        const evento = eventos.items[i];
        listaEventos += "<span>" + evento.name + "</span>";
      }
      return listaEventos;
    }
  }

  public listarSeries(series: MarvelSeries): string {
    let listaSeries = "Não possui evento";
    if (series.available == 0) {
      return listaSeries;
    } else {
      listaSeries = "";
      const maxSeries = 3;
      for (let i = 0; i < Math.min(maxSeries, series.items.length); i++) {
        const serie = series.items[i];
        listaSeries += "<span>" + serie.name + "</span>";
      }
      return listaSeries;
    }
  }

  public gerarNumeroPaginas(): number[] {
    const totalPaginas = this.totalPaginas;
    const paginaAtual = this.paginaAtual;
    const numeroMaximoPaginas = window.innerWidth < 800 ? 3 : 6;

    let paginaInicial = Math.max(paginaAtual - Math.floor(numeroMaximoPaginas / 2), 1);
    let ultimaPagina = Math.min(paginaInicial + numeroMaximoPaginas - 1, totalPaginas);

    if (ultimaPagina === totalPaginas) {
      paginaInicial = Math.max(ultimaPagina - numeroMaximoPaginas + 1, 1);
    }

    paginaInicial = Math.max(paginaInicial, 1);

    return Array.from({ length: ultimaPagina - paginaInicial + 1 }, (value, index) => paginaInicial + index);
  }
}
