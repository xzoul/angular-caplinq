import { Component, ViewChild  } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonButtons, IonInput } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  // public supplier: string = '';

  // SelectedSupplier(supplier: string) {
  //   this.supplier = supplier;
  // }

  // public supplierList = [
  //   { name: 'Amsterdam', active: false },
  //   { name: 'Buenos Aires', active: false },
  //   { name: 'Cairo', active: false },
  //   { name: 'Geneva', active: false },
  //   { name: 'Hong Kong', active: false },
  //   { name: 'Istanbul', active: false },
  //   { name: 'London', active: false },
  //   { name: 'Madrid', active: false },
  //   { name: 'New York', active: false },
  //   { name: 'Panama City', active: false },
  //   { name: 'Naga City', active: false }
  // ];

  public supplierList = [
    {
      name: 'Supplier A',
      products: ['Product A1', 'Product A2', 'Product A3']
    },
    {
      name: 'Supplier B',
      products: ['Product B1', 'Product B2']
    },
    {
      name: 'Supplier C',
      products: ['Product C1', 'Product C2', 'Product C3', 'Product C4']
    }
  ];

  public selectedSupplier: any = null;

  selectSupplier(supplier: any) {
    this.selectedSupplier = supplier;
  }

  public results = [...this.supplierList];

  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.results = this.supplierList.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  }



  // Modal

  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
