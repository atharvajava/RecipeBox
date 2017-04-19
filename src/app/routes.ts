import { Routes } from '@angular/router';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { EditComponent } from './edit/edit.component';
export const appRoutes:Routes=[
    { path: '/RecipeBox/create-recipe', component: CreateRecipeComponent },
    { path: '/RecipeBox/recipe-book', component: RecipeBookComponent},
    { path: '/RecipeBox/edit-recipe', component: EditComponent},
    { path: '', redirectTo: '/RecipeBox/recipe-book', pathMatch: 'full' }
];