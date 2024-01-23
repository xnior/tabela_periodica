import { Routes } from '@angular/router';


export const routes: Routes = [{
    path: '',
    title: 'Tabela Periodica',
    loadComponent: () => import('./pages/table/table.component').then(m => m.TableComponent),
    
},
{

    path: 'elementos',
    title: 'Pesquisar Dados de Elementos',
    loadComponent: () => import('./pages/listelements/listelements.component').then(m => m.ListelementsComponent),
},
{
  path: 'balanceamento',
    title: 'Balanceamento de Equações Químicas',
    loadComponent: () => import('./pages/chem-balance/chem-balance.component').then(m => m.ChemBalanceComponent),
}

];
