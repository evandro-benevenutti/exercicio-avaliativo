import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { cliente } from "./Cliente"

@Entity("tb_venda")
export class venda {
    @PrimaryGeneratedColumn()
    id_venda: number

    @Column()
    data: string

    @Column()
    status: string

   
    @ManyToOne(() => cliente)
    @JoinColumn({name: 'id_cliente'})
    cliente: cliente
}