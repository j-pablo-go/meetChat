import { Routes } from '@angular/router';
import { Chats } from './page/chats/chats';
import { Home } from './page/home/home';

export const routes: Routes = [
    { path: 'chats', component: Chats },
    
    { path: '', component: Home },
    
    { path: '**', redirectTo: '' }
];