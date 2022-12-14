import { ICategoriesRepository } from "../../repositories/ICategoriesrepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest) {

    const categoryAlreadyExsists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExsists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description })
  }
}