import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../../status/entities/status.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ name: 'title', length: 25, nullable: false })
  title: string;

  @ApiProperty()
  @Column({ length: 75, name: 'description' })
  description: string;

  @ApiProperty()
  @Column('datetime', { name: 'due' })
  due: Date;

  @ApiProperty()
  @Column({ name: 'email', length: 255, nullable: true })
  email: string;

  @ApiProperty()
  @ManyToOne(type => Status, status => status.todoList ,{ eager:true, nullable:false })
  status: Status;

  @ApiProperty()
  @ManyToOne(type => Category, category => category.todoList,{ eager:true, nullable:false })
  category: Category;
}
