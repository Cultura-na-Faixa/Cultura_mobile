import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonIcon, IonModal, IonButtons, IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle, personCircleOutline } from 'ionicons/icons';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInput,
    IonButton,
    IonIcon,
    IonModal,
    IonButtons,
    IonAvatar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
  ]
})
export class Tab4Page implements OnInit {

  // Login
  loginEmail = '';
  loginSenha = '';

  // Cadastro
  cadastroNome = '';
  cadastroEmail = '';
  cadastroSenha = '';

  isModalOpen = false;
  mensagem = '';
  mensagemCadastro = '';

  // Perfil
  usuarioLogado = false;
  perfil: any = null;

  constructor(private supabase: SupabaseService) {
    addIcons({ logoGoogle, personCircleOutline });
  }

  async ngOnInit() {
    await this.verificarUsuario();
  }

  async verificarUsuario() {
    const user = await this.supabase.getUsuarioAtual();
    if (user) {
      this.perfil = await this.supabase.getPerfil(user.id);
      this.usuarioLogado = true;
    } else {
      this.usuarioLogado = false;
      this.perfil = null;
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.mensagemCadastro = '';
  }

  async entrar() {
    try {
      await this.supabase.login(this.loginEmail, this.loginSenha);
      this.mensagem = '';
      await this.verificarUsuario();
    } catch (error: any) {
      this.mensagem = 'Email ou senha incorretos.';
    }
  }

  async cadastrar() {
    try {
      await this.supabase.cadastrar(this.cadastroNome, this.cadastroEmail, this.cadastroSenha);
      this.mensagemCadastro = 'Cadastro realizado com sucesso, confira seu e-mail para ativar sua conta!';
    } catch (error: any) {
      this.mensagemCadastro = 'Erro ao cadastrar. Tente novamente.';
    }
  }

  async sair() {
    await this.supabase.logout();
    this.usuarioLogado = false;
    this.perfil = null;
    this.loginEmail = '';
    this.loginSenha = '';
  }

}
