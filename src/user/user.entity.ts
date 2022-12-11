import { Cat } from '../cats/cat.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  tel: string;
  @Column({ default: true })
  isActive: boolean;
  @OneToMany(() => Cat, (cat) => cat.user)
  cats: Cat[];
}
