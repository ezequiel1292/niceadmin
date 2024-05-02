const employees= [
    {
        name:"Ezequiel",
        hireDate:"04/13/21",
        pay:"salary"
    },
    {
        name:"Brian",
        hireDate:"04/01/19",
        pay:"hourly"
    },
    {
        name:"Armando",
        hireDate:"06/01/20",
        pay:"hourly"
    },
    {
        name:"John",
        hireDate:"01/01/20",
        pay:"salary"
    },
    
    {
        name:"Allen",
        hireDate:"04/26/08",
        pay:"salary"
    }
]

export const load = async ({ fetch, params  }) => {
    return {employees:employees}}