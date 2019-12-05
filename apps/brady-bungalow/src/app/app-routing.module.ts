import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { TestComponent } from './test/test.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full'},
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'todos',
    component: ToDosComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
