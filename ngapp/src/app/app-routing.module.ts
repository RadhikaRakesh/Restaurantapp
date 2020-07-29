import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder ,FormGroup,Validators,ReactiveFormsModule, FormControl} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ItemsService} from './items.service';

import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { SpecialComponent } from './special/special.component';
import { AuthGuard } from './auth.guard';
import {AdminGuard} from './admin.guard';
import { MenuComponent } from './menu/menu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { DisplaymenuComponent } from './displaymenu/displaymenu.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { UpdateComponent } from './update/update.component';
import { HomepageComponent } from './homepage/homepage.component';
import {OrderformComponent} from './orderform/orderform.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'menu',component:MenuComponent},
  {path:'contact',component:ContactusComponent},
  {path:'special',component:SpecialComponent,canActivate:[AuthGuard]},
  {path:'footer',component:FooterComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'display',component:DisplaymenuComponent,canActivate:[AdminGuard]},
  {path:'new',component:NewmenuComponent,canActivate:[AdminGuard]},
  {path:'orderform',component:OrderformComponent},
  {path:'orderlist',component:OrderlistComponent,canActivate:[AdminGuard]},
  {path:'update',component:UpdateComponent,canActivate:[AdminGuard]},
  {path:'homepage',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
