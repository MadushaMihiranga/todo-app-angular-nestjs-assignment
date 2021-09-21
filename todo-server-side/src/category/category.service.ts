import { Injectable } from '@nestjs/common';
//import { CreateCategoryDto } from './dto/create-category.dto';
//import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    try {
      return this.categoryRepository.find();
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number): Promise<Category> {
    try {
      return this.categoryRepository.findOneOrFail(id);
    } catch (error) {
      throw error;
    }
  }

  /*  create(createCategoryDto: CreateCategoryDto) {
      return 'This action adds a new category';
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
      return `This action updates a #${id} category`;
    }

    remove(id: number) {
      return `This action removes a #${id} category`;
    }*/
}
