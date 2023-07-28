import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 100 })
  url: string;

  @ManyToOne(() => User, (user) => user.board)
  user: User;
  board: Promise<Board>;
}
