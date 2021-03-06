// * -------------------------------------------------
// * Threads are a collection of posts inside a board.
// * -------------------------------------------------
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Threads {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  public id!: number;

  @Column('varchar', {
    nullable: false,
    length: 64,
    name: 'title'
  })
  public title!: string;

  @Column({
    type: 'int',
    nullable: false,
    name: 'author_id'
  })
  public authorId!: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'board_id'
  })
  public boardId!: number;

  @Column('datetime', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'date_created'
  })
  public dateCreated!: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
    name: 'num_replies'
  })
  public numReplies!: number;

  @Column({
    type: 'tinyint',
    nullable: false,
    default: 0,
    name: 'is_promoted'
  })
  public isPromoted!: number;
}
