import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface GroupLetter {
    letter: string;
    names: string[];
}

@Component({
    selector: 'app-formcontrol-autocomplete',
    templateUrl: 'autocomplete.component.html'
})
export class AutocompleteComponent implements OnInit {

    stateForm: FormGroup = this.fb.group({
        stateGroup: '',
    });

    myControl: FormControl = new FormControl();
    myControl1: FormControl = new FormControl();

    options = ['冰箱', '空调', '洗衣机'];

    letters = ['aabbcc', 'bbccdd', 'ccddee'];

    groupLetters: GroupLetter[] = [{
        letter: 'A',
        names: ['Aa1111', 'A2222', 'A333', 'A444']
    }, {
        letter: 'C',
        names: ['C1111', 'C2222', 'C3333']
    }, {
        letter: 'D',
        names: ['D1111', 'D22222']
    }];

    filteredOptions: Observable<string[]>;

    groupLetterOptions: Observable<GroupLetter[]>;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.filteredOptions = this.myControl1.valueChanges
            .pipe(
                startWith(''),
                map(val => this.filter(val))
            );

        this.groupLetterOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(
                startWith(''),
                map(val => this.filterGroup(val))
            );
    }

    filter(val: string): string[] {
        return this.letters.filter(letter =>
            letter.toLowerCase().includes(val.toLowerCase()));
    }

    filterGroup(val: string): GroupLetter[] {
        if (val) {
            return this.groupLetters
                .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
                .filter(group => group.names.length > 0);
        }

        return this.groupLetters;
    }

    private _filter(opt: string[], val: string) {
        const filterValue = val.toLowerCase();
        return opt.filter(item => item.toLowerCase().startsWith(filterValue));
    }
}
