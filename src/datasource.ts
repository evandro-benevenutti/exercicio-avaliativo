import { DataSource } from "typeorm"
import { carrinho } from './entity/Carrinho'
import { cliente } from './entity/Cliente'
import { produto } from "./entity/Produto"
import { venda } from "./entity/Venda"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [carrinho, cliente, produto, venda],
    logging: false,
    synchronize: true,
})

export default dataSource