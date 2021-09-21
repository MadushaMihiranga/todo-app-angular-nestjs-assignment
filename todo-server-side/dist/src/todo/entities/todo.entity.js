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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const status_entity_1 = require("../../status/entities/status.entity");
const category_entity_1 = require("../../category/entities/category.entity");
let Todo = class Todo {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Todo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'title', length: 25, nullable: false }),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 75, name: 'description' }),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('datetime', { name: 'due' }),
    __metadata("design:type", Date)
], Todo.prototype, "due", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ name: 'email', length: 255, nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(type => status_entity_1.Status, status => status.todoList, { eager: true, nullable: false }),
    __metadata("design:type", status_entity_1.Status)
], Todo.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.ManyToOne)(type => category_entity_1.Category, category => category.todoList, { eager: true, nullable: false }),
    __metadata("design:type", category_entity_1.Category)
], Todo.prototype, "category", void 0);
Todo = __decorate([
    (0, typeorm_1.Entity)()
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map