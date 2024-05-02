export class Employee {
    constructor(db) {
        this.db=db;
        this.init() 
    } 

    init() {
        const creation_statement=`
        CREATE TABLE IF NOT EXISTS employee (
            id INTEGER PRIMARY KEY,
            name TEXT,
            hire_date TEXT,
            position TEXT,
            pay_type TEXT
        )`
        
        this.db.exec(creation_statement)
        
    }

    add(name, hire_date, position){
        const statement=`INSERT INTO employee (name,hire_date,position,pay_type) VALUES(@name,@hire_date,@position,@pay_type)`
        const result= this.db.prepare(statement).run({name,hire_date,position,pay_type});
        console.log(result)
    }

    getAll() {
        const statement= `SELECT * FROM employee`
        return this.db.prepare(statement).all()
    }

    remove(id) {
        const statement = `DELETE FROM employee WHERE id = @id`
        this.db.prepare(statement).run({id})
    }
      
    findByPK(id) {
        const statement = `SELECT * FROM employee WHERE id = @id`
        return this.db.prepare(statement).get({id})
     }
     
}