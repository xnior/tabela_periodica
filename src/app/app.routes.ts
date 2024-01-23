import { Routes } from '@angular/router';
import { ChemBalanceComponent } from './pages/chem-balance/chem-balance.component';







export const routes: Routes = [{
    path: '',
    title: 'Tabela Periodica',
    loadComponent: () => import('./pages/table/table.component').then(m => m.TableComponent),
    
},
{

    path: 'elementos',
    title: 'Pesquisar Dados de Elementos',
    loadComponent: () => import('./pages/listelements/listelements.component').then(m => m.ListelementsComponent),
},{
   path: 'balancedor',
    title: 'Balancedor de Equações Quimicas',
    component: ChemBalanceComponent,
}

];
