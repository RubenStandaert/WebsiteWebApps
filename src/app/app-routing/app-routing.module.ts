import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
    { path: 'home', loadChildren: "../notebook/notebook.module.ts" },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
  ];

  @NgModule({
    imports: [
      //RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {
}
