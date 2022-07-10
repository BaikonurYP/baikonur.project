import {
    Model,
    Table,
    DataType,
    Column,
    AutoIncrement,
    PrimaryKey,
} from 'sequelize-typescript'

@Table({
    tableName: 'theme',
})
export class Theme extends Model<Theme> {
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
