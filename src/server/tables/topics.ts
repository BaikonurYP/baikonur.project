import {
    Model,
    Table,
    DataType,
    Column,
    AutoIncrement,
    PrimaryKey
} from 'sequelize-typescript'

@Table({
    timestamps: false, // don't add 'created_at', 'updated_at'
    paranoid: true, // add 'deleted_at'
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
