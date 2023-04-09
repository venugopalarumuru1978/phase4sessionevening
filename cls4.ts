class Consparam
{
    private n : number;
    constructor(n:number)
    {
        this.n = n;
        console.log("It is Constructor with parameters");       
    }

    printval()
    {
       console.log("Given Value : " + this.n); 
    }
}

var c2 = new Consparam(100);
c2.printval();
