import { NgModule } from '@angular/core';

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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        MatFormFieldModule,
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
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatBottomSheetModule,
        MatDialogModule
    ],
    exports: [
        MatFormFieldModule,
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
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatBottomSheetModule,
        MatDialogModule
    ]
})
export class CustomMaterialModule { }
