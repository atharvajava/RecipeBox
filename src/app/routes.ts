import { Routes } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
export const appRoutes:Routes=[
    { path: 'create-recipe', component: CreateRecipeComponent },
    { path: '', redirectTo: '/create-recipe', pathMatch: 'full' }
    
];