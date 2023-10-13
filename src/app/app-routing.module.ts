import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { OrderlistComponent } from './Pages/orderlist/orderlist.component';
import { UserlistComponent } from './Pages/userlist/userlist.component';
import { BooklistComponent } from './Pages/booklist/booklist.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'order-list', component: OrderlistComponent },
  { path: 'user-list', component: UserlistComponent },
  { path: 'book-list', component: BooklistComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
