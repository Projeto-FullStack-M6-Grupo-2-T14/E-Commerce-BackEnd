import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './users.entity'

@Entity('posters')
class Poster {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 120 })
    title: string

    @Column({ length: 120 })
    brand: string

    @Column({ length: 300})
    model: string

    @Column({ type: 'date' })
    year: string

    @Column({ length: 80 })
    fuel: string

    @Column({ length: 20 })
    mileage: string

    @Column({ length: 120 })
    color: string

    @Column({ length: 20 })
    fipe_price: string

    @Column({ length: 20 })
    price: string

    @Column({ length: 200 })
    description: string

    @Column({ nullable: true })
    cover_image: string

    @Column({ type: 'boolean', default: false})
    is_active: boolean

    @CreateDateColumn({ type: 'date' })
    created_at: string

    @ManyToOne(() => User)
    user: User;
}

export { Poster }
