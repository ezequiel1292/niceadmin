<script>
    export let data
    const employees = data.employees
    let salaryEmployees = []
    let hourlyEmployees=[]
    
    function payTypeChange(event) {
        if (event.target.value === "salary") {
            salaryEmployees = employees.filter(employee => employee.pay === "salary")
        }
        else if (event.target.value ==="hourly") {
            hourlyEmployees = employees.filter(employee => employee.pay==="hourly")
        }
    }
</script>


<div class="main">
    <div class="left">
        <div class="employeeList">
            <div class="employeeTitle"> Employee List</div>
            <div class="employee">
                {#each employees as employee}
                    <div class="employeeName">
                        <div>{employee.name}</div>
                    </div>
                    <div class="employeeHireDate">
                        <div>{employee.hireDate}</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    
    <div class="right">
        <div class="salary">
            <div class="salarySelect">
                <div>
                    Salary
                    <input type="radio" on:change={payTypeChange} id="salary" value="salary">
                </div>
                <div>
                    Hourly
                    <input type="radio" on:change={payTypeChange} id="salary" value="hourly">
                </div>
            </div>
           
            <div class="payType">
                <div class="salaryEmployee">
                    {#each salaryEmployees as employee}
                        <div class="salaryEmployeeName">{employee.name}</div>
                    {/each}
                </div>
                <div class="hourlyEmployee">
                    {#each hourlyEmployees as employee}
                        <div class="hourlyEmployeeName">{employee.name}</div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>



           
        








<style>
    .main{
        display:grid;
        grid-template-columns:1fr 1fr;
        margin-top:16rem;
    }

   .employee{
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-content:center;
    align-items:center
    }
    .employeeList{
        border:solid;
        
    }
    .employeeName{
        display:flex;
        margin-bottom:1rem;
        justify-content:center;
        align-items:center
    }
    .employeeHireDate{
        display:flex;
        justify-content:center;
        align-items:center
    }
    .employeeTitle{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:2rem;
        margin-top:12px

    }
    .right{
        display: flex;
        justify-content:center;
        border:solid;
        height:14.5rem
    }
    .salarySelect{
        display:grid;
        grid-template-columns:1fr 1fr;
        padding-top:12px
    }
   
    .payType{
        display:grid;
        grid-template-columns:1fr 1fr
    }
    .salaryEmployeeName{
        padding-top:1rem;
        margin-bottom:1rem;

    }
    .hourlyEmployeeName{
        padding-top:1rem;
        margin-bottom:1rem;

    }
</style>