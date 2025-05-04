import { ItemStatusEnum } from "../enums/ItemStatusEnum.enum";
import { ItemLocationEnum } from "../enums/ItemLocationEnum.enum";

export type ItemModel = {
	id: 		number,
	status: 	ItemStatusEnum,
	name: 		string,
	picture: 	string,
	findAt: 	ItemLocationEnum, // Se for virar um Enum para Bloco e outro para a Sala, esse campo poder virar um objeto com bloco e sala como campos
	date: 		string,
};