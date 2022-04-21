import { Repository, ObjectLiteral, InsertResult, UpdateResult, DeleteResult } from 'typeorm';


export default abstract class BaseService<T extends ObjectLiteral> {

    protected repo: Repository<T>;

    async findAll(opts?): Promise<T[]> {
        return this.repo.find(opts);
    }


    async findOne(id: string): Promise<T> {
        return this.repo.findOne(id);
    }

    async remove(id: string): Promise<DeleteResult> {
        return this.repo.delete(id);
    }

    async add(entity: T): Promise<InsertResult> {
        return this.repo.insert(entity);
    }

    async update(id: string, entity: T): Promise<UpdateResult> {
        return this.repo.update(id, entity);
        // executes UPDATE user SET {}...entity} WHERE id = 1
    }
}