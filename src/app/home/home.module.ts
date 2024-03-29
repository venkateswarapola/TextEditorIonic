import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { QuillModule } from 'ngx-quill';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    QuillModule.forRoot({
      modules: {
        syntax: true
      }
    }),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
