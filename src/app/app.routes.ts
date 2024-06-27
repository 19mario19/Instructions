import { Routes } from '@angular/router';
// basiscs
import { BasicsComponent } from './basics/basics.component';
import { GroomingComponent } from './basics/grooming/grooming.component';
// room status
import { RoomStatusComponent } from './room-status/room-status.component';
import { OccupiedComponent } from './room-status/occupied/occupied.component';
import { VacantComponent as VacantRoomComponent } from './room-status/vacant/vacant.component';
// cleaning status
import { LightComponent } from './cleaning-status/light/light.component';
import { LinenChangeComponent } from './cleaning-status/linen-change/linen-change.component';
import { FullComponent } from './cleaning-status/full/full.component';
import { ArrivalComponent } from './cleaning-status/arrival/arrival.component';
// products and tools
import { ProductsAndToolsComponent } from './products-and-tools/products-and-tools.component';
import { ListOfProductsComponent } from './products-and-tools/list-of-products/list-of-products.component';
import { ListOfToolsComponent } from './products-and-tools/list-of-tools/list-of-tools.component';
// procedure entering room
import { ProcedureEnteringRoomComponent } from './procedure-entering-room/procedure-entering-room.component';
// step by step guide
import { StepByStepGuideComponent } from './step-by-step-guide/step-by-step-guide.component';
import { StayoverComponent } from './step-by-step-guide/stayover/stayover.component';
import { VacantComponent as VacantGuideComponent } from './step-by-step-guide/vacant/vacant.component';
import { CleaningStatusComponent } from './cleaning-status/cleaning-status.component';
import { BehaviourGuidelinesComponent } from './basics/behaviour-guidelines/behaviour-guidelines.component';

export const routes: Routes = [
  {
    path: 'basics',
    children: [
      {
        path: '',
        redirectTo: 'grooming',
        pathMatch: 'full',
      },
      {
        path: 'grooming',
        component: GroomingComponent,
      },
      {
        path: 'behaviour-guidelines',
        component: BehaviourGuidelinesComponent,
      },
    ],
  },
  {
    path: 'room-status',
    children: [
      {
        path: '',
        redirectTo: 'occupied',
        pathMatch: 'full',
      },
      {
        path: 'occupied',
        component: OccupiedComponent,
      },
      {
        path: 'vacant',
        component: VacantRoomComponent,
      },
    ],
  },
  {
    path: 'cleaning-status',
    children: [
      {
        path: '',
        redirectTo: 'light',
        pathMatch: 'full',
      },
      {
        path: 'light',
        component: LightComponent,
      },
      {
        path: 'linen-change',
        component: LinenChangeComponent,
      },
      {
        path: 'full',
        component: FullComponent,
      },
      {
        path: 'arrival',
        component: ArrivalComponent,
      },

    ],
  },
  {
    path: 'products-and-tools',
    children: [
        {
          path: '',
          redirectTo: 'list-of-products',
          pathMatch: 'full',
        },
        {
          path: 'list-of-products',
          component: ListOfProductsComponent,
        },
        {
          path: 'list-of-tools',
          component: ListOfToolsComponent,
        },

    ],
  },
  {
    path: 'procedure-entering-room',
    component: ProcedureEnteringRoomComponent,
  },
  {
    path: 'step-by-step-guide',
    children: [
        {
            path: "",
            redirectTo: "stayover",
            pathMatch: "full",
        },
        {
          path: 'stayover',
          component: StayoverComponent,
        },
        {
          path: 'vacant',
          component: VacantGuideComponent,
        },
    ]
  },
];
