import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable()
export class ModalService {
	constructor(private dialogService: MatDialog) {}

	public openModal(component: ComponentType<unknown>, modalData: unknown): Observable<any> {
		const dialog = this.dialogService.open(component, {
			disableClose: 	true,
			data: 			modalData,
			panelClass:		"modal-medium-size-container"
		});

		return dialog.afterClosed();
	}
}