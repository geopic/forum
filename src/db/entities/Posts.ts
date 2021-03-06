// * ------------------------------------
// * Regular forum posts database entity.
// * ------------------------------------
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Posts {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  public id!: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'author_id'
  })
  public authorId!: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'thread_id'
  })
  public threadId!: number;

  @Column({
    type: 'text',
    nullable: false,
    name: 'content'
  })
  public content!: string;

  @Column('datetime', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'date_created'
  })
  public dateCreated!: string;
}
