import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss'],
})
export class MeetingFormComponent implements OnInit {
  public meetingForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MeetingFormComponent>, // @Optinal (@Inject(MAT_DIALOG_DATA) public data: string)
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.meetingForm = this.fb.group({
      id: null,
      meetingName: ['', Validators.required],
      meetingSubject: ['', Validators.required],
      meetingResponsable: ['', Validators.required],
      meetingDate: ['', Validators.required],
      meetingTime: ['', Validators.required],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {}
}
