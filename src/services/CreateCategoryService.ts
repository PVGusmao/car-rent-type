import { CategoryRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoryRepository) { }

  execute({ name, description }: IRequest) {

    const categoryAlreadyExsists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExsists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description })
  }
}