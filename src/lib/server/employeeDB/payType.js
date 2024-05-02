export class PayType {
    constructor(db) {
        this.db = db;
        this.init();
    }

    init() {
        const creation_statement = `
        CREATE TABLE IF NOT EXISTS payType (
            id INTEGER PRIMARY KEY,
            employee_id INT,
            pay_type TEXT,
            FOREIGN KEY (employee_id) REFERENCES employee(id)
        )`;
        this.db.exec(creation_statement);
    }

    add(employee_id, pay_type) {
        const statement = `INSERT INTO payType(employee_id, pay_type) VALUES(@employee_id, @pay_type)`;
        this.db.prepare(statement).run({ employee_id, pay_type });
    }

    getAll() {
        const statement = `SELECT * FROM payType`;
        return this.db.prepare(statement).all();
    }

    remove(id) {
        const statement = `DELETE FROM payType WHERE id = @id`;
        this.db.prepare(statement).run({ id });
    }

    findByPK(id) {
        const statement = `SELECT * FROM payType WHERE id = @id`;
        return this.db.prepare(statement).get({ id });
    }
}