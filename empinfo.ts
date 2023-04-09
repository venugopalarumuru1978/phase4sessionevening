import { Employee } from "./emp";

class EmpProcess
{
    private einfo:Employee[] = [
        new Employee(101,"Ravi", "Developer", 12000.00),
        new Employee(102,"Kavi", "Tester", 12000.00),
        new Employee(103,"Bavi", "HR-Manager", 12000.00),
        new Employee(104,"Lavi", "Tester", 12000.00),
        new Employee(105,"Kovi", "Developer", 12000.00)
    ];

    printEmpinfo()
    {
        for(let i in this.einfo)  // here only index number will copied into variable "i"
        {
            console.log(this.einfo[i].empno + "\t" + this.einfo[i].ename + "\t" + this.einfo[i].job + "\t" + this.einfo[i].sal);
        }
    }
}

var e1 = new EmpProcess();
e1.printEmpinfo();