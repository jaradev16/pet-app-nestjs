import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class HealthScore {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public userId: string;

    @Column()
    created_at_debt: Date;

    @Column({type: 'integer', default: 0})
    debt_score: number;

    @Column({type: 'decimal', default: 0.0})
    debt_to_income_ratio: number;

    @Column({type: 'decimal', default: 0.0})
    emergency_savings_on_hand: number;

    @Column()
    guid: string;

    @Column({type: 'integer', default: 0})
    health_score: number;

    @Column({type: 'decimal', default: 0.0})
    months_of_cash_on_hand: number;

    @Column({type: 'decimal', default: 0.0})
    ninety_day_debt_spending_total: number;

    @Column({type: 'decimal', default: 0.0})
    ninety_day_income_total: number;

    @Column({type: 'decimal', default: 0.0})
    ninety_day_spending_total: number;

    @Column({type: 'integer', default: 0})
    saving_score: number;

    @Column({type: 'integer', default: 0})
    spending_fee_transaction_count: number;

    @Column({type: 'decimal', default: 0.0})
    spending_fee_transaction_spending_total: number;

    @Column({type: 'integer', default: 0})
    spending_score: number;

    @Column({type: 'decimal', default: 0.0})
    spending_to_income_ratio: number;

    @Column()
    user_guid: string;
}