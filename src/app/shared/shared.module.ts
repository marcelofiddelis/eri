import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// side-menu
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// card-item
import { MatCardModule } from '@angular/material/card';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { MatButton, MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		SideMenuComponent,
  		CardItemComponent
	],
	imports: [
		CommonModule,
		MatListModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
        MatButton,
	],
	exports: [
		SideMenuComponent,
		CardItemComponent
	]
})
export class SharedModule { }
