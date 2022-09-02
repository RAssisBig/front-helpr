import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrabalheConoscoFormComponent } from '../trabalhe-conosco-form/trabalhe-conosco-form.component';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.scss']
})
export class TrabalheConoscoComponent implements OnInit {

  public dialog: MatDialog;
  constructor(dialog: MatDialog) { 
    this.dialog = dialog
  }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(TrabalheConoscoFormComponent, { width: "400px"});
  }
}
