import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-popups-dialog',
    templateUrl: 'dialog.component.html'
})
export class DialogComponent {

    animal: string;
    name: string;

    constructor(public dialog: MatDialog) { }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogDetailComponent, {
            width: '250px',
            position: { top: '200px', left: '200px' },
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}

@Component({
    selector: 'app-popups-dialog-detail',
    templateUrl: 'dialog-detail.component.html'
})

export class DialogDetailComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
