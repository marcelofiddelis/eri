import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemModel } from '../../../../shared/models/ItemModel.model';

import { ModalService } from '../../../../core/services/modal/modal.service';

import { NewObjectComponent } from '../../../../components/new-object/new-object.component';

@Injectable()
export class HomeService {
	constructor(private modalService: ModalService) {}

	public openNovoObjetoModal(): Observable<ItemModel | null> {
		return this.modalService.openModal(NewObjectComponent, null);
	}
}