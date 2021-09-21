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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const todo_entity_1 = require("./entities/todo.entity");
const pagination_todo_dto_1 = require("./dto/pagination-todo-dto");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async search(page = 1, limit = 10, email, title, status, category, from, to) {
        limit = limit > 100 ? 100 : limit;
        return this.todoService.findAll({ page, limit }, email, title, status, category, from, to);
    }
    findOne(id) {
        return this.todoService.findOne(+id);
    }
    create(createTodoDto) {
        return this.todoService.create(createTodoDto);
    }
    update(id, updateTodoDto) {
        return this.todoService.update(+id, updateTodoDto);
    }
    remove(id) {
        return this.todoService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: pagination_todo_dto_1.PaginationTodoDto, isArray: false }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'email', required: true }),
    (0, swagger_1.ApiQuery)({ name: 'title', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'from', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'to', required: false }),
    (0, common_1.Get)('/findall'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('email')),
    __param(3, (0, common_1.Query)('title')),
    __param(4, (0, common_1.Query)('status')),
    __param(5, (0, common_1.Query)('category')),
    __param(6, (0, common_1.Query)('from')),
    __param(7, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: todo_entity_1.Todo, description: 'Find a Todo Item By ID' }),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: todo_entity_1.Todo }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "remove", null);
TodoController = __decorate([
    (0, swagger_1.ApiTags)('Todo List'),
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map