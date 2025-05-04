import { Component, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-card-item',
	templateUrl: './card-item.component.html',
	styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
	@Input({ required: true }) public itemData!: any;

	constructor() {}
	
	retirar(){
		this.itemData.status = 'Retirado';
	}
	aguardar(){
		this.itemData.status = 'Aguardando retirada';
	}
}