import { Component } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

export interface Gate { id: string; description: string; status: string; schedule: object;
  }

@Component({
  selector: 'app-control-center',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  title = 'Control Center';
  gates: Observable<any>;
  environmental: Observable<any>;
  irrigators: Observable<any>;
  livestock: Observable<any>;

  editRowId: any;
  control_interface: '';
  selectedRow: any;
  setClickedRow: Function;
  update: Function;
  editor: Boolean;
  private gatesCollection: AngularFirestoreCollection<Gate>;
  constructor(private db: AngularFirestore) {
    this.gatesCollection = db.collection<Gate>('gates');
    this.gates = this.gatesCollection.valueChanges();
/*    this.environmental = db.collection('evironmental').valueChanges();
    this.irrigators = db.collection('irrigators').valueChanges();
    this.livestock = db.collection('livestock').valueChanges();*/
    this.setClickedRow = function (index) {
      this.selectedRow = index;
      console.log(index + ' clicked');
    };
  }
  addGate(description: string, status: string, schedule: object) {
    const id = this.db.createId();
    const gate: Gate = { id, description, status, schedule};
    this.gatesCollection.add(gate);
  }
  public toggle(view) {
    if (this.control_interface === view) {
      this.control_interface = '';
    } else {
      this.control_interface = view;
    }
  }
  toggleEdit(id) {
    this.editRowId = id;
  }
  updateData = function () {
    console.log('this');
  };
  public openGateForm () {
    this.editor = true;
  }
}
