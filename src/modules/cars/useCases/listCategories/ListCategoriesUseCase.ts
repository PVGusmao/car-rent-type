import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesrepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(): Category[] { 
    const categories = this.categoriesRepository.list();
    console.log(categories);
    return categories;
  }
}