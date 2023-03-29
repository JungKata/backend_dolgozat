import { Account } from "src/Owner/account/entities/account.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Owner{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    business: boolean;

    @OneToOne(() => Account, (account) => account.owner)
    @JoinColumn()
    account : Account

    
}