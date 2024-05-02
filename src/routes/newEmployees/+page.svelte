<script>
   export let data 
   export let form 
   const employee=data.employee
   const payType=data.payType
  // console.log(employee,"employee")
  //console.log(payType,"pay type")
   //console.log(employee)
   console.log(payType)

</script>

<div class="newEmployee">
    <form method="post" label="newEmployee">
        <input name="name" placeholder="NAME"/><br>
        <input name="hireDate" placeholder="Hire Date"/><br>
        <input name="position" placeholder="Position"/><br>
        <input type="hidden" name="employee_id" value={employee.id} />
        <select name="pay_type" placeholder="Pay Type"><br>
            <option value="" selected hidden>Pay Type</option>
            <option name="pay_type"value="hourly">Hourly</option>
            <option name="pay_type"value="salary">Salary</option>
        </select> <br>
        <button type="submit" class="mt-4">Add Employee</button>
    </form>
</div>
<div>

</div>
<style>
    .newEmployee{
        margin-left: 38rem;
        margin-top: 20rem;
    }

</style>