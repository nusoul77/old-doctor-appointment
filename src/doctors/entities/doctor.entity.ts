import { Specialization } from 'src/specializations/entities/specialization.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'doctors' })
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => Specialization, (specialization) => specialization.doctors)
  @JoinColumn({ name: 'specializationId' })
  specialization: Specialization;

  @Column()
  specializationId: string;

  @Column()
  level: string;

  @CreateDateColumn()
  createdAt: string;
}