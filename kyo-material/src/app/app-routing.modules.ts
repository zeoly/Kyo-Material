import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './modules/buttons/button.components';
import { ButtonToggleComponent } from './modules/buttons/button-toggle.component';
import { BadgeComponent } from './modules/buttons/badge.component';
import { ChipsComponent } from './modules/buttons/chips.component';
import { IconComponent } from './modules/buttons/icon.component';
import { ProgressSpinerComponent } from './modules/buttons/progress-spinner.component';

import { AutocompleteComponent } from './modules/formcontrol/autocomplete.component';
import { InputComponent } from './modules/formcontrol/input.component';

import { DialogComponent } from './modules/popups/dialog.component';

const routes: Routes = [
    { path: 'formcontrol/autocomplete', component: AutocompleteComponent },
    { path: 'formcontrol/input', component: InputComponent },
    { path: 'buttons/button', component: ButtonComponent },
    { path: 'buttons/button-toggle', component: ButtonToggleComponent },
    { path: 'buttons/badge', component: BadgeComponent },
    { path: 'buttons/chips', component: ChipsComponent },
    { path: 'buttons/icon', component: IconComponent },
    { path: 'buttons/progress-spinner', component: ProgressSpinerComponent },
    { path: 'popups/dialog', component: DialogComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
