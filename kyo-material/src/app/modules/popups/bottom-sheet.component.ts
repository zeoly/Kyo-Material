import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
    selector: 'app-popups-bottom-sheet',
    templateUrl: 'bottom-sheet.component.html'
})
export class BottomSheetComponent {

    constructor(private bottomSheet: MatBottomSheet) { }

    openSheet(): void {
        this.bottomSheet.open(BottomSheetOverviewComponent);
    }
}

@Component({
    selector: 'app-popups-bottom-sheet-overview',
    templateUrl: 'bottom-sheet-overview.html',
})
export class BottomSheetOverviewComponent {

    constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewComponent>) { }
}
