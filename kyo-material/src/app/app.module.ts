import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/welcome.component';

import { AutocompleteComponent } from './modules/formcontrol/autocomplete.component';
import { CheckboxComponent } from './modules/formcontrol/checkbox.component';
import { DatepickerComponent } from './modules/formcontrol/datepicker.component';
import { InputComponent } from './modules/formcontrol/input.component';
import { FormFieldComponent } from './modules/formcontrol/form-field.component';
import { RadioComponent } from './modules/formcontrol/radio.component';
import { SelectComponent } from './modules/formcontrol/select.component';
import { SliderComponent } from './modules/formcontrol/slider.component';
import { SlideToggleComponent } from './modules/formcontrol/slide-toggle.component';

import { CardComponent } from './modules/layout/card.component';
import { DividerComponent } from './modules/layout/divider.component';
import { ListComponent } from './modules/layout/list.component';
import { StepperComponent } from './modules/layout/stepper.component';
import { TabsComponent } from './modules/layout/tabs.component';

import { ButtonComponent } from './modules/buttons/button.components';
import { ButtonToggleComponent } from './modules/buttons/button-toggle.component';
import { BadgeComponent } from './modules/buttons/badge.component';
import { ChipsComponent } from './modules/buttons/chips.component';
import { IconComponent } from './modules/buttons/icon.component';
import { ProgressSpinerComponent } from './modules/buttons/progress-spinner.component';
import { ProgressBarComponent } from './modules/buttons/progress-bar.component';

import { SideNavComponent } from './modules/navigation/side-nav.component';

import { BottomSheetComponent, BottomSheetOverviewComponent } from './modules/popups/bottom-sheet.component';
import { DialogComponent, DialogDetailComponent } from './modules/popups/dialog.component';
import { TooltipComponent } from './modules/popups/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    CardComponent,
    DividerComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    ButtonComponent,
    ButtonToggleComponent,
    BadgeComponent,
    ChipsComponent,
    IconComponent,
    ProgressSpinerComponent,
    ProgressBarComponent,
    SideNavComponent,
    BottomSheetComponent,
    BottomSheetOverviewComponent,
    DialogComponent,
    DialogDetailComponent,
    TooltipComponent
  ],
  entryComponents: [
    BottomSheetOverviewComponent,
    DialogDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
