import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonList, IonItem, IonLabel, IonButton, IonButtons, IonIcon, IonTabButton,
  IonModal} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline, heartSharp, heartOutline } from 'ionicons/icons';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonButtons,
    IonIcon,
    IonTabButton,
    CommonModule,
    FormsModule,
    IonModal
  ]
})
export class Tab2Page implements OnInit {

  termoBusca = '';
  categoriaAtiva = '';
  isModalOpen = false;
  eventoSelecionado: any = null;

  todosEventos = [
    {
      id: 1,
      titulo: 'Carlinhos do Teclado',
      local: 'Sesc Pompeia',
      data: '20/12 13h às 15h',
      imagem: 'https://files.pressmanager.net/clientes/625b13d2e0f9dc14e52ac4deac083e71/imagens/2025/02/18/82817132bcc406c20824c21a3c2e52e2.jpg',
      descricao: 'Prepare-se para uma noite inesquecível com Carlinhos do Teclado! Com muito talento, carisma e um repertório contagiante, o artista promete colocar todo mundo para cantar, dançar e se emocionar. O show reúne grandes sucessos, músicas românticas e os ritmos mais animados, em uma apresentação cheia de energia e interação com o público.',
      categoria: 'Música',
      favorito: false
    },
    {
      id: 2,
      titulo: 'Ricardo & Morenin',
      local: 'Vale do Anhangabaú',
      data: '18/09 18h às 20h',
      imagem: 'https://p2.trrsf.com.br/image/fget/cf/478/481/smart/images.terra.com/2025/07/08/302523534-8-dupla-sertaneja-felipe-e-matheus-viralizou-em-2024-ao-fazer-show-sem-plateia.jpg',
      descricao: 'A dupla traz toda a energia e a paixão do forró em um show animado, cheio de sucessos, romantismo e aquele ritmo envolvente que faz ninguém ficar parado. Com muito carisma no palco, Ricardo & Morein prometem levantar o público com um repertório que mistura tradição, emoção e muita dança.',
      categoria: 'Música',
      favorito: false
    },
    {
      id: 3,
      titulo: 'Os Companheiros',
      local: 'Campo Limpo',
      data: '05/06 12h às 13h',
      imagem: 'https://www.louveira.sp.gov.br/painel/dbanexos/dbanexo_imagem/03-2021/0c3b1c263df8c19db08eff8ba67e2d084e060323.jpeg',
      descricao: 'A história acompanha um grupo de amigos que, unidos pela coragem e pela amizade, vivem grandes aventuras repletas de desafios, descobertas e momentos surpreendentes. Entre risos, emoções e reviravoltas, “Os Companheiros” mostra a força da união e o verdadeiro valor da amizade.',
      categoria: 'Teatro',
      favorito: false
    },
    {
      id: 4,
      titulo: 'Cia da dança',
      local: 'Brasilândia',
      data: '02/10 10h às 12h',
      imagem: 'https://www.sabra.org.br/site/wp-content/uploads/2024/06/a-danca-como-ferramenta-de-expressao-corporal-20181109101935.jpg-jpg.webp',
      descricao: 'Em um espetáculo marcado pela elegância do ballet, os bailarinos levam ao palco movimentos harmoniosos, emoção e muita expressão artística. Cada coreografia foi preparada para transmitir sensibilidade, técnica e a magia da dança clássica, proporcionando ao público uma experiência única e inesquecível. Uma apresentação que celebra a arte, a disciplina e a paixão pela dança, encantando espectadores de todas as idades com performances cheias de leveza e emoção.',
      categoria: 'Dança',
      favorito: false
    },
    {
      id: 5,
      titulo: 'Irmãos a parte',
      local: 'Sesc Pinheiros',
      data: '07/09 19h às 21h',
      imagem: 'https://www.guiadasemana.com.br/contentFiles/image/2016/10/FEA/principal/52967_w840h0_1477575822selfie.jpg',
      descricao: 'Após um trágico acidente de carro que muda completamente suas vidas, os irmãos Albuquerque são separados ainda na infância e seguem caminhos diferentes, sem contato e com lembranças fragmentadas do passado. Anos depois, o destino começa a aproximá-los novamente, revelando segredos guardados, feridas antigas e a possibilidade de reconstruir os laços que foram interrompidos. Em meio a conflitos, descobertas e fortes emoções, a peça explora o poder da memória, da identidade e do amor familiar, conduzindo o público por uma narrativa intensa e comovente sobre o reencontro entre irmãos.',
      categoria: 'Teatro',
      favorito: false
    },
    {
      id: 6,
      titulo: 'Noite de Jazz',
      local: 'Sesc Paulista',
      data: '03/11 20h às 22h',
      imagem: 'https://i.scdn.co/image/ab67616d0000b273207950cac3ff7e40a444b66e',
      descricao: 'Uma apresentação especial de jazz ao vivo com músicos convidados, trazendo clássicos do gênero e improvisações marcantes. A noite promete uma atmosfera sofisticada e envolvente, ideal para os amantes da música instrumental.',
      categoria: 'Música',
      favorito: false
    },
    {
      id: 7,
      titulo: 'Corpo em Movimento',
      local: 'Teatro Sérgio Cardoso',
      data: '15/11 19h às 21h',
      imagem: 'https://www.forumluisatodi.pt/wp-content/uploads/2024/06/ACDS.jpg',
      descricao: 'Uma performance de dança contemporânea que explora emoções humanas através de movimentos intensos e expressivos. A coreografia mistura técnicas modernas e clássicas em uma apresentação impactante.',
      categoria: 'Dança',
      favorito: false
    },
    {
      id: 8,
      titulo: 'O Último Julgamento',
      local: 'Teatro Municipal de São Paulo',
      data: '12/09 20h às 22h',
      imagem: 'https://f.i.uol.com.br/fotografia/2020/02/04/15808317035e3993d72e5e2_1580831703_3x2_md.jpg',
      descricao: 'Um drama teatral envolvente que acompanha um julgamento decisivo onde segredos do passado vêm à tona. A peça traz suspense, emoção e reflexões sobre justiça e moral.',
      categoria: 'Teatro',
      favorito: false
    },
    {
      id: 9,
      titulo: 'Noite de Clássicos',
      local: 'Parque Villa-Lobos',
      data: '29/10 19h às 22h',
      imagem: 'https://assets.papelpop.com/wp-content/uploads/2020/05/image15.jpg',
      descricao: 'Uma sessão especial de cinema ao ar livre com exibição de grandes clássicos do cinema mundial. O público pode aproveitar o ambiente aberto enquanto assiste a filmes icônicos.',
      categoria: 'Cinema',
      favorito: false
    },
    {
      id: 10,
      titulo: 'A Era do Gelo',
      local: 'Centro Cultural Grajaú',
      data: '22/12 11h às 12h',
      imagem: 'https://i.ytimg.com/vi/wuYXN78XTHA/maxresdefault.jpg',
      descricao: 'Durante o período Pleistoceno, um esquilo dente-de-sabre chamado Scrat tenta encontrar um lugar seguro para guardar sua única e preciosa bolota; eventualmente, quando Scrat tenta enterrá-la no chão ele causa uma grande rachadura no solo que se estende por quilômetros antes de desencadear numa grande avalanche que quase o esmaga; ele consegue escapar, mas é pisado por uma manada de animais pré-históricos migrando para o sul a fim de escapar da próxima era do gelo',
      categoria: 'Cinema',
      favorito: false
    }
  ];

  eventosFiltrados: any[] = [];

  constructor(private supabase: SupabaseService) {
    addIcons({ arrowBackOutline, heartSharp, heartOutline });
  }

  async ngOnInit() {
    await this.carregarFavoritos();
  }

  async ionViewWillEnter() {
    await this.carregarFavoritos();
  }

  async carregarFavoritos() {
    const ids = await this.supabase.getFavoritos();
    this.todosEventos.forEach(e => {
      e.favorito = ids.includes(e.id);
    });
    if (this.eventosFiltrados.length > 0) {
      this.eventosFiltrados = this.eventosFiltrados.map(ef =>
        this.todosEventos.find(e => e.id === ef.id) || ef
      );
    }
  }

  // modal

  abrirModal(evento: any) {
    this.eventoSelecionado = evento;
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
  }


  buscar(event: any) {
    const termo = event.target.value?.toLowerCase() || '';
    this.termoBusca = termo;
    this.categoriaAtiva = '';

    if (termo.length === 0) {
      this.eventosFiltrados = [];
      return;
    }

    this.eventosFiltrados = this.todosEventos.filter(e =>
      e.titulo.toLowerCase().includes(termo) ||
      e.local.toLowerCase().includes(termo) ||
      e.categoria.toLowerCase().includes(termo)
    );
  }

  abrirCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
    this.termoBusca = '';
    this.eventosFiltrados = this.todosEventos.filter(e => e.categoria === categoria);
  }

  voltar() {
    this.categoriaAtiva = '';
    this.eventosFiltrados = [];
    this.termoBusca = '';
  }

  async toggleFavorito(evento: any, event: Event) {
    event.stopPropagation();

    const user = await this.supabase.getUsuarioAtual();
    if (!user) {
      alert('Faça login para favoritar');
      return;
    }

    evento.favorito = !evento.favorito;

    if (evento.favorito) {
      await this.supabase.adicionarFavorito(evento.id);
    } else {
      await this.supabase.removerFavorito(evento.id);
    }
  }

}