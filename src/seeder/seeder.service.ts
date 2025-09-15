import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../categories/entities/category.entity';
import { Product } from '../products/entities/product.entity';
import { Repository, DataSource} from 'typeorm';
import { categories } from './data/categories';
import { products } from './data/products';

@Injectable()
export class SeederService {
    constructor (
        @InjectRepository(Category) private readonly categoryRepository : Repository<Category>,
        @InjectRepository(Product) private readonly productRepository : Repository<Product>,
        private dataSource: DataSource
    ){}

    async onModuleInit() {
        const connection = this.dataSource
        await connection.dropDatabase()
        await connection.synchronize()
    }

    async seed () {
        const saved = await this.categoryRepository.save(categories);
        const indexToId = new Map<number, number>();
        saved.forEach((c, i) => indexToId.set(i + 1, c.id));
        for await (const seedProduct of products) {
            const realId = indexToId.get(seedProduct.categoryId);

            if (!realId) throw new Error(`Categoría seed index ${seedProduct.categoryId} no mapeada`)
            const product = new Product()
            product.name = seedProduct.name
            product.image = seedProduct.image
            product.price = seedProduct.price
            product.inventory = seedProduct.inventory
            product.category = { id: realId } as Category
            await this.productRepository.save(product)
            
        }
    }

}


