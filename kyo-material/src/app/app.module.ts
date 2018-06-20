import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.modules';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { CardComponent } from './modules/layout/card.component';
import { DividerComponent } from './modules/layout/divider.component';
import { ListComponent } from './modules/layout/list.component';
import { TabsComponent } from './modules/layout/tabs.component';

import { ButtonComponent } from './modules/buttons/button.components';
import { ButtonToggleComponent } from './modules/buttons/button-toggle.component';
import { BadgeComponent } from './modules/buttons/badge.component';
import { ChipsComponent } from './modules/buttons/chips.component';
import { ProgressSpinerComponent } from './modules/buttons/progress-spinner.component';
import { ProgressBarComponent } from './modules/buttons/progress-bar.component';

import { IconComponent } from './modules/buttons/icon.component';
import { SideNavComponent } from './modules/navigation/side-nav.component';
import { AutocompleteComponent } from './modules/formcontrol/autocomplete.component';
import { InputComponent } from './modules/formcontrol/input.component';

import { DialogComponent, DialogDetailComponent } from './modules/popups/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DividerComponent,
    ListComponent,
    TabsComponent,
    ButtonComponent,
    ButtonToggleComponent,
    BadgeComponent,
    ChipsComponent,
    IconComponent,
    ProgressSpinerComponent,
    ProgressBarComponent,
    SideNavComponent,
    AutocompleteComponent,
    InputComponent,
    DialogComponent,
    DialogDetailComponent
  ],
  entryComponents: [
    DialogDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
