import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeService } from './services/home/home.service';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { NewObjectModule } from '../../components/new-object/new-object.module';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		CoreModule,
		SharedModule,
		NewObjectModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
	],
	providers: [HomeService]
})
export class HomeModule { }