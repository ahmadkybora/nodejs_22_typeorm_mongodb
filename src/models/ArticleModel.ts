import { Entity, ObjectId, ObjectIdColumn, Column } from "typeorm"

@Entity()
class Article {
    @ObjectIdColumn()
    _id!: ObjectId

    @Column()
    title!: string

    @Column()
    code_article!: number

    @Column()
    description!: string
}

export default Article;
