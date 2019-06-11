import {Routes} from '@angular/router';
import { PruebamaterialComponent } from './components/pruebamaterial/pruebamaterial.component';


export const ROUTES: Routes = [
    {path: 'home', component: PruebamaterialComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];