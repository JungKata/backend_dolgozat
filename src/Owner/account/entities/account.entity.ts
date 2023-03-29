import { Owner } from "src/Owner/owner/entities/owner.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Account{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountNumber: string;

    @Column()
    balancce: number;

    @OneToOne(() => Owner, (owner) => owner.account)
    owner: Owner
}