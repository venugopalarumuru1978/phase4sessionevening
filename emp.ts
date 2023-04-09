export class Employee
{
    empno :number;
    ename:string;
    job:string;
    sal:number;

    constructor(empno:number, ename:string, job:string, sal:number)
    {
        this.empno = empno;
        this.ename = ename;
        this.job = job;
        this.sal = sal;
    }
}
