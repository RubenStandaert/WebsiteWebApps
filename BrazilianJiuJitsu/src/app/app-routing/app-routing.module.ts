import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { NotebookComponent } from '../notebook/notebook/notebook.component';

const appRoutes: Routes = [
    { path: 'notebook', component: NotebookComponent },
    { path: '', redirectTo: 'notebook', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {
}
