import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { ButtonComponent } from './modules/buttons/button.components';
import { SideNavComponent } from './modules/navigation/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SideNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
