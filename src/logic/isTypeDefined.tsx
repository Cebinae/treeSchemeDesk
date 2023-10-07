import { node } from "./schemaNode"

export const isTypeDefined = (arrayToCheck:Array<object|undefined>)=>{
    const isCategories = arrayToCheck.includes((elem:node)=>elem.type === 'category')
    const isServices = arrayToCheck.includes((elem:node)=>elem.type === 'service')

    isCategories&&isServices? console.log('too many categories in single row'):null
    !isCategories&&!isServices? console.log('not even a single valid category in a row'):null

    if (isCategories&&!isServices) return 'categories'
    if (!isCategories&&isServices) return 'services'

    else return 'no type provided'
}