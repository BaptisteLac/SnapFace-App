import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(){
    this.buttonText = 'Snap Me !'
  }

  onSnap() {
    if(this.buttonText === 'Snap Me !'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Desnap Me !';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Snap Me !'
    }
  }
}
