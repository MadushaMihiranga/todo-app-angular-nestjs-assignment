"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./entities/todo.entity");
const typeorm_2 = require("typeorm");
const status_entity_1 = require("../status/entities/status.entity");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async findAll(options, email, title, status, category, from, to) {
        const queryBuilder = this.todoRepository.createQueryBuilder('todo');
        queryBuilder
            .leftJoinAndSelect('todo.status', 'status')
            .leftJoinAndSelect('todo.category', 'category')
            .where('todo.email = :email', { email: email })
            .andWhere(from && to ? 'todo.due BETWEEN :from AND :to' : 'true', {
            from,
            to,
        })
            .andWhere(title ? 'todo.title like :title' : 'true', {
            title: '%' + title + '%',
        })
            .andWhere(status ? 'todo.status like :status' : 'true', {
            status: status,
        })
            .andWhere(category ? 'todo.category like :category' : 'true', {
            category: category,
        })
            .orderBy('todo.id', 'DESC');
        return (0, nestjs_typeorm_paginate_1.paginate)(queryBuilder, options);
    }
    findOne(id) {
        try {
            return this.todoRepository.findOneOrFail(id);
        }
        catch (error) {
            throw error;
        }
    }
    async create(createTodoDto) {
        createTodoDto.status = new status_entity_1.Status(1, 'Pending');
        return this.todoRepository.save(createTodoDto);
    }
    async update(id, updateTodoDto) {
        try {
            const todo = await this.todoRepository.findOneOrFail(id);
            todo.due = updateTodoDto.due;
            todo.status = updateTodoDto.status;
            return this.todoRepository.save(todo);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const todo = await this.todoRepository.findOne(id);
            await this.todoRepository.delete(todo);
            return todo;
        }
        catch (error) {
            throw error;
        }
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map