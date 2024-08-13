import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonLabel,IonItem,IonButton,IonActionSheet,IonAlert,IonList,IonBadge,IonCheckbox } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonLabel,IonItem,IonButton,IonActionSheet,IonAlert,IonList,IonBadge,IonCheckbox],
})
export class Tab1Page {
  constructor() {}
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Add',
      data: {
        action: 'add',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('ยกเลิก');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('สำเร็จ');
      },
    },
  ];

  public alertButtons1 = ['OK'];
  public alertInputs = [
    {
      placeholder: 'ชื่อ',
    },
    {
      placeholder: 'ชื่อเล่น (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'อายุ',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'เขียนอะไรสักเล็กน้อยเกี่ยวกับตัวคุณ',
    },
  ];



}