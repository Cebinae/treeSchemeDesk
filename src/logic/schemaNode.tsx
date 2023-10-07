
export type node = {
    parentPool: unknown
    type: string
    title: string
    children: never[]
    key:string
    isFilled:boolean,
    createChild: (type: string, title: string) => void
}



export default class SchemaNode {
    parentPool: unknown
    type: string
    title: string
    children: Array<node|SchemaNode>
    key:string
    isFilled:boolean
    createChild: (type: string, title: string) => void
    constructor(type:string, parentPool:unknown, title:string) {
        this.type = type,
        this.parentPool = parentPool,
        this.title = title,
        this.key = title,
        this.children = []
        this.isFilled = false
        this.createChild = (type:string, title:string)=>{
            console.log('new child created, curr length is', this.children.length)

            const child = new SchemaNode (type, this.children, title)
            this.children.push(child)
        }
    }
}

