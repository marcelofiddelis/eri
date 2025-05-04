import { Injectable } from '@angular/core';

import { StorageService } from '../../../../core/services/storage/storage.service';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private readonly USER_KEY: string = "@ERI-user";

	constructor(private storageService: StorageService) {}

	public login(matricula: string, senha: string): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				if (!matricula) throw("O campo 'matricula' é obrigatório!");
				if (!senha) throw("O campo 'senha' é obrigatório!");

				if (matricula === "202311300018" && senha === "123456") {
					this.storageService.set(this.USER_KEY, { matricula, senha });

					resolve({ matricula, senha });
				} else {
					throw("A matricula/senha estão incorretos!");
				}
			} catch (error: any) {
				reject(error);
			}
		});
	}
}