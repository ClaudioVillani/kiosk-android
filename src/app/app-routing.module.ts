import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';


const routes: Routes = [
   {path: '', component: RedirectPageComponent, pathMatch: 'full'},
  // {path: 'store-list', component: StoreListComponent},
  // {path: 'oos/:storeNum/date/:date', component: OosDailyPageComponent},
  // {path: 'oos/:storeNum', component: OosDailyPageComponent},
  // { path: '**', redirectTo: '/store-list', pathMatch: 'full'}
  // testing jira integration with  improvement type kios17
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
