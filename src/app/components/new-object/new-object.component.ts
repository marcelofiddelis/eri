import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ItemStatusEnum } from '../../shared/enums/ItemStatusEnum.enum';

import { ItemModel } from '../../shared/models/ItemModel.model';
import { ItemLocationsModel } from '../../core/constants/ItemLocations.const';

import { generateRandomId } from '../../shared/utils/functions/generateRandomId.util';
import { convertFileToBase64 } from '../../shared/utils/functions/convertFileToBase64.util';

import { ItemLocations } from '../../core/constants/ItemLocations.const';

@Component({
	selector: 'app-new-object',
	templateUrl: './new-object.component.html',
	styleUrl: './new-object.component.scss'
})
export class NewObjectComponent implements OnInit {
	private modalData: ItemModel | null = inject(MAT_DIALOG_DATA);
	private modalRef = inject(MatDialogRef<NewObjectComponent>);

	public componentForm!: FormGroup;

	public locationsList: ItemLocationsModel[] = ItemLocations;

	public pictureSelected: string | null = null;

	ngOnInit(): void {
		this.setInitialForm();
		this.patchFormValue();
	}

	private onClose(data: ItemModel | null): void {
		this.modalRef.close(data);
	}

	private setInitialForm(): void {
		this.componentForm = new FormGroup({
			name: 		new FormControl(null, Validators.required),
			findAt: 	new FormControl(null, Validators.required),
		});
	}

	private patchFormValue(): void {
		if (!this.modalData) return;

		this.componentForm.patchValue(this.modalData);
	}

	public async onChangeItemPicture(event: Event): Promise<void> {
		// console.log((event as any).target.files[0]);

		this.pictureSelected = await convertFileToBase64((event as any).target.files[0]);
		
	}

	public onClickCloseComponent(): void {
		this.onClose(null);
	}

	public onSubmit(): void {
		const { name, findAt } = this.componentForm.getRawValue() as Partial<ItemModel>;

		if (!name) return console.error("O campo 'Objeto' é obrigatório!");
		if (!findAt) return console.error("O campo 'Local' é obrigatório!");
		if (!this.pictureSelected) return console.error("O campo 'Imagem' é obrigatório!");

		const newRegister: ItemModel = {
			id: 		generateRandomId(),
			status: 	ItemStatusEnum.AguardandoRetirada,
			name: 		name,
			picture: 	this.pictureSelected,
			findAt: 	findAt,
			date: 		new Date().toISOString(),
		};

		this.onClose(newRegister);
	}
}