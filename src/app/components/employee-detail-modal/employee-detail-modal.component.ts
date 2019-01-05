import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Modalable} from '../modal/modalable';
import {Employee} from '../../services/employee.service';

@Component({
    selector: 'employee-detail-modal',
    templateUrl: './employee-detail-modal.component.html',
    styleUrls: ['./employee-detail-modal.component.scss']
})
export class EmployeeDetailModalComponent extends Modalable implements OnInit {

    @Input()
    employee: Employee;

    @ViewChild('notBonus')
    template: TemplateRef<any>;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        console.log(this.template);
    }
}

// switch (variavel) {
//     case 1:
//
//         break;
//     case 2:
//
//         break;
//     default:
//
// }

//if else if else
