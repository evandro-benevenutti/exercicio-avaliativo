import { Entity, Column, PrimaryGeneratedColumn} from "typeorm"


@Entity("tb_cliente")
export class cliente {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    fone: number

    @Column()
    email: string

}