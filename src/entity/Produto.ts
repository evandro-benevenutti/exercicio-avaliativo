import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm"
import { carrinho } from "./Carrinho"

@Entity("tb_produto")
export class produto {
    @PrimaryGeneratedColumn()
    id_produto: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: string


}