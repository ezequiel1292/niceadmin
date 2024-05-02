import {models} from "$lib/server/employeeDB/index.js"

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const name = data.get("name")
        const hireDate = data.get ("hireDate")
        const position = data.get("position")
        const pay_type = data.get("pay_type")
        const employee_id = data.get("employee_id")


        await models.Employee.add(name,hireDate,position,pay_type)

        return {
            message: `name: ${name}, hire date: ${hireDate}, position:${position}, pay type: ${pay_type}
            employee id:${employee_id}
           `
            
        }
    }
}
export const load= async ({fetch, params}) =>{
    const employee =await  models.Employee.getAll()

    return {
        employee,
    };
}
