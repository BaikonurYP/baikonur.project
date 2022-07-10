import {
    Model,
    Table,
    DataType,
    Column,
    AutoIncrement,
    PrimaryKey
} from 'sequelize-typescript'

@Table({
    tableName: 'topics'
})
export class Topics extends Model<Topics> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
        id: number

    @Column(DataType.STRING)
        name: string

    @Column(DataType.INTEGER)
        count: number

    @Column(DataType.STRING)
        date: string
}
