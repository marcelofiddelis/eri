import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	constructor() {}

	public set(key: string, value: unknown): void {
		return localStorage.setItem(key, JSON.stringify(value));
	}

	public get(key: string): unknown | null {
		const storageValue = localStorage.getItem(key);

		return (storageValue) ? JSON.parse(storageValue) : null;
	}

	public deleteByKey(key: string): void {
		return localStorage.removeItem(key);
	}

	public clear(): void {
		return localStorage.clear();
	}
}