import { ItemLocationEnum } from "../../shared/enums/ItemLocationEnum.enum";

export type ItemLocationsModel = {
	label: ItemLocationEnum,
	value: ItemLocationEnum,
}

export const ItemLocations: ItemLocationsModel[] = [
	{ label: ItemLocationEnum.BlocoASala101, 	value: ItemLocationEnum.BlocoASala101 },
	{ label: ItemLocationEnum.BlocoE, 			value: ItemLocationEnum.BlocoE },
	{ label: ItemLocationEnum.Ginasio, 			value: ItemLocationEnum.Ginasio },
];