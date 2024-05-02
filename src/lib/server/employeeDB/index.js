import Database from 'better-sqlite3'
import {Employee} from './employee'

const database= new Database('db',{verbose: console.log})
export const models= { 
    Employee: new Employee (database),
}