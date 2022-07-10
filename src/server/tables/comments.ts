import {
    Model,
    Table,
    DataType,
    Column,
    AutoIncrement,
    PrimaryKey
} from 'sequelize-typescript'

@Table({
    tableName: 'comments'
})
export class Comments extends Model<Comments> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
        id: number

    @Column(DataType.INTEGER)
        topic_id: number

    @Column(DataType.STRING)
        message: string

    @Column(DataType.INTEGER)
        user_id: number

    @Column(DataType.STRING)
        user_name: string

    @Column(DataType.STRING)
        user_avatar: string

    @Column(DataType.STRING)
        date: string
}
