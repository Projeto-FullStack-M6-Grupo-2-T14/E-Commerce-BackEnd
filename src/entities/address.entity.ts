import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from './users.entity'

@Entity('adresses')
class Address {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 8 })
    zipcode: string

    @Column({ length: 80})
    state: string

    @Column({ length: 120 })
    city: string

    @Column({ length: 150 })
    street: string

    @Column({ length: 8 })
    number: string

    @Column({ length: 200 })
    complement: string

    @OneToOne(() => User , { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User
}

export { Address }