import { Component, OnInit } from '@angular/core';

import { ItemStatusEnum } from '../../shared/enums/ItemStatusEnum.enum';
import { ItemLocationEnum } from '../../shared/enums/ItemLocationEnum.enum';

import { ItemModel } from '../../shared/models/ItemModel.model';

import { HomeService } from './services/home/home.service';
import { NavigationService } from '../../core/services/navigation/navigation.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public  itemList: ItemModel[] = [];
	private initialItemList: ItemModel[] = [];

	constructor(
		private homeService: HomeService,
		private navigationService: NavigationService,
	) {}

	ngOnInit(): void {
		this.getItemsList();
	}

	private getItemsList(): void {
		this.itemList = [
			{
				id: 		1,
				status: 	ItemStatusEnum.AguardandoRetirada,
				name: 		"Fone de Ouvido Bluetooth",
				picture: 	"imgs/fone-perdido.png",
				findAt: 	ItemLocationEnum.BlocoE,
				date: 		new Date().toISOString()
			},
			{
				id: 		2,
				status: 	ItemStatusEnum.Retirado,
				name: 		"Celular iphone",
				picture: 	"imgs/celular-perdido.png",
				findAt: 	ItemLocationEnum.Ginasio,
				date: 		new Date().toISOString()
			},
			{
				id: 		3,
				status: 	ItemStatusEnum.Retirado,
				name: 		"Mochila",
				picture: 	"imgs/mochila-perdida.png",
				findAt: 	ItemLocationEnum.BlocoASala101,
				date: 		new Date().toISOString()
			}
		];

		this.initialItemList = this.itemList;
	}

	public onClickNovoObjeto(): void {
		this.homeService.openNovoObjetoModal().subscribe({
			next: (modalData: ItemModel | null) => {
				if (modalData === null) return;

				this.addNewObject(modalData);
			},
			error: (error: any) => {
				console.error("Erro ao registrar um novo objeto perdido: ", error);
			}
		});
	}

	public onFilter(event: Event): void {
		const searchValue: string = (event.target as any).value;

		this.itemList = this.initialItemList;

		this.itemList = this.itemList.filter((item) => item.name.toLowerCase().match(searchValue.toLowerCase()));
	}

	private addNewObject(item: ItemModel): void {
		this.itemList.push(item);
		
	}

	public onExit():void {
		this.navigationService.goTo("login");
	}
}