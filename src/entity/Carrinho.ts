import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, } from "typeorm"
import { produto } from "./Produto"
import { venda } from "./Venda"

@Entity("tb_carrinho")
export class carrinho {
    @PrimaryGeneratedColumn()
    id_venda: number

    @PrimaryGeneratedColumn()
    id_produto: number

    @Column()
    nome: string

    @Column()
    quantidade: number

    @Column()
    preco: number

    @ManyToOne(() => venda)
    @JoinColumn({name: 'id_venda'})
    venda: venda

    @ManyToOne(() => produto)
    @JoinColumn({name: 'id_produto'})
    produto: produto
}