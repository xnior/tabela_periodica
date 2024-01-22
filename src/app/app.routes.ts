import { Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { ListelementsComponent } from './pages/listelements/listelements.component';







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
    path: 'balanceador',
    title: 'Balanceador de Equações Quimicas',
    loadComponent: () => import('./pages/balance-calculator/balance-calculator.component').then(m => m.BalanceCalculatorComponent),
}

];
