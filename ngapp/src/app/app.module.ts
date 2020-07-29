import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthService} from './auth.service';
import { SpecialComponent } from './special/special.component';
import { AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { DisplaymenuComponent } from './displaymenu/displaymenu.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { NewmenuComponent } from './newmenu/newmenu.component';
import {ItemsService} from './items.service';
import { UpdateComponent } from './update/update.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminGuard } from './admin.guard';
import { OrderformComponent } from './orderform/orderform.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SpecialComponent,
    ContactusComponent,
    MenuComponent,
    FooterComponent,
    CartComponent,
    DisplaymenuComponent,
    OrderlistComponent,
    NewmenuComponent,
    UpdateComponent,
    HomepageComponent,
    OrderformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,ItemsService,AuthGuard,AdminGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
