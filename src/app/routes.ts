import { Routes } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { EditComponent } from './edit/edit.component';
export const appRoutes:Routes=[
    { path: 'create-recipe', component: CreateRecipeComponent },
    { path: 'recipe-book', component: RecipeBookComponent},
    { path: 'edit-recipe', component: EditComponent},
    { path: '', redirectTo: '/recipe-book', pathMatch: 'full' }
];