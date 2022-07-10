import {
    Model,
    Table,
    DataType,
    Column,
    AutoIncrement,
    PrimaryKey
} from 'sequelize-typescript'

@Table({
    timestamps: false,
    paranoid: true,
    tableName: 'user_themes'
})
export class UserThemes extends Model<UserThemes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
        id: number

    @Column(DataType.STRING)
        name: string

    @Column(DataType.INTEGER)
        user_id: number
}
