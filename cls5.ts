class Student
{
    protected  sname:string;
    protected course:string;

    GetStdInfo(sname:string, course:string)
    {
        this.sname = sname;
        this.course = course;
    }
}

class Marks extends Student
{
    protected sub1:number;
    protected sub2:number;

    GetMarksInfo(s1:number, s2:number)
    {
        this.sub1 = s1;
        this.sub2 = s2;
    }
}

class Results extends Marks
{
    printResults() 
    {
        console.log("Student Name : " + this.sname);
        console.log("Course : " + this.course);
        console.log("Subject 1 Marks : " + this.sub1);
        console.log("Subject 2 Marks : " + this.sub2);

        if(this.sub1>=35 && this.sub2>=35)
            console.log("Passed");
        else
            console.log("Failed");
    }
}

var r1 = new Results();
r1.GetStdInfo("Pavan", "Java");
r1.GetMarksInfo(45,67);
r1.printResults();
