import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Resolve, RouterState, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../models/recipes.model';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService,private recipeService:RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        if (this.recipeService.recipes.length==0) {
            return this.dataStorageService.fetchRecipes();
        }

    }

}
