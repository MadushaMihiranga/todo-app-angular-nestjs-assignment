import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Todo } from '../../todo/entities/todo.entity';

@Entity()
export class Status {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 45 })
  name: string;

  @OneToMany(type => Todo, (todo) => todo.status)
  todoList: Todo[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
