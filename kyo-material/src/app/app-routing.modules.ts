import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutocompleteComponent } from './modules/formcontrol/autocomplete.component';
import { CheckboxComponent } from './modules/formcontrol/checkbox.component';
import { InputComponent } from './modules/formcontrol/input.component';
import { RadioComponent } from './modules/formcontrol/radio.component';

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

import { BottomSheetComponent } from './modules/popups/bottom-sheet.component';
import { DialogComponent } from './modules/popups/dialog.component';
import { TooltipComponent } from './modules/popups/tooltip.component';

const routes: Routes = [
    { path: 'formcontrol/autocomplete', component: AutocompleteComponent },
    { path: 'formcontrol/checkbox', component: CheckboxComponent },
    { path: 'formcontrol/input', component: InputComponent },
    { path: 'formcontrol/radio', component: RadioComponent },
    { path: 'layout/card', component: CardComponent },
    { path: 'layout/divider', component: DividerComponent },
    { path: 'layout/list', component: ListComponent },
    { path: 'layout/stepper', component: StepperComponent },
    { path: 'layout/tabs', component: TabsComponent },
    { path: 'buttons/button', component: ButtonComponent },
    { path: 'buttons/button-toggle', component: ButtonToggleComponent },
    { path: 'buttons/badge', component: BadgeComponent },
    { path: 'buttons/chips', component: ChipsComponent },
    { path: 'buttons/icon', component: IconComponent },
    { path: 'buttons/progress-spinner', component: ProgressSpinerComponent },
    { path: 'buttons/progress-bar', component: ProgressBarComponent },
    { path: 'popups/bottom-sheet', component: BottomSheetComponent },
    { path: 'popups/dialog', component: DialogComponent },
    { path: 'popups/tooltip', component: TooltipComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
