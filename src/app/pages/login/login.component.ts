import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './services/login/login.service';
import { NavigationService } from '../../core/services/navigation/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
	public pageForm!: FormGroup;

	public hide = signal(true);

	constructor(
		private loginService: LoginService,
		private navigationService: NavigationService,
	) {}

	ngOnInit(): void {
		this.setInitialForm();
	}

	private setInitialForm(): void {
		this.pageForm = new FormGroup({
			matricula: 	new FormControl(null, Validators.required),
			senha: 		new FormControl(null, Validators.required),
		});
	}

	public togglePasswordIcon(event: MouseEvent): void {
		this.hide.set(!this.hide());
		// event.stopPropagation();
	}

	public onSubmit(): void {
		const formData = this.pageForm.getRawValue() as { matricula: string, senha: string };

		if (!formData.matricula) return alert("O campo 'matricula' é obrigatório!");
		if (!formData.senha) return alert("O campo 'senha' é obrigatório!");

		this.loginService.login(formData.matricula, formData.senha)
			.then((loginData: { matricula: string, senha: string }) => {
				this.navigationService.goTo("home");
			})
			.catch((error: any) => alert(`Erro ao efetuar o login: ${error}`));
	}
}