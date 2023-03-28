import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Baptiste',
          description: 'Ma photo de profil',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 50,
          location: 'Bordeaux'
        },
        {
          id: 2,
          title: 'Débuter sur Angular',
          description: 'J\'adore le code',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'At home'
        },
        {
          id: 3,
          title: 'Surfer sur le bassin',
          description: 'Pas facile d\'aller surfer en hiver',
          imageUrl: 'https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_1280.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ]
      
    getAllFaceSnaps() : FaceSnap[]{
        return this.faceSnaps
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: string): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}   