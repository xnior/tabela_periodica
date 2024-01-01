import { Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { ListelementsComponent } from './pages/listelements/listelements.component';







export const routes: Routes = [{
    path: '',
    title: 'Tabela Periodica',
    component: TableComponent,
    
},
{

    path: 'elementos',
    title: 'Pesquisar Dados de Elementos',
    component: ListelementsComponent,
},

];
