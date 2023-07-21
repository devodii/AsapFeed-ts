import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 300, unique: true })
  email: string;

  @Column('varchar', { length: 700 })
  password: string;
}
