import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 300, unique: true })
  email: string;

  @Column('varchar', { length: 700 })
  password: string;

  @OneToMany(() => Board, (board) => board.user)
  board: Board[];
}
