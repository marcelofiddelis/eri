import { Component } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation/navigation.service';

@Component({
	selector: 'app-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
	public sideMenuOptions: any[] = [];

	constructor(private navigationService: NavigationService) {
		this.setSideMenuOptions();
	}

	private setSideMenuOptions(): void {
		this.sideMenuOptions = [
			{
				icon:  "home",
				label: "Home",
			},
			{
				icon:  "photo_camera",
				label: "Meus Posts",
				function: "sair"
			},
			{
				icon:  "account_circle_outline",
				label: "Minha Conta",
				function: "sair"
			},
			{
				icon:  "help_outline",
				label: "Ajuda",
				function: "sair"
			},
			{
				icon:  "logout",
				label: "Sair",
				function: () => this.sair()
			}
		];
	}

	public sair(){
		console.log("Sair")
		this.navigationService.goTo("login");
	}
}