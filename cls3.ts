class DemoCons
{
    private n : number;
    constructor()
    {
        this.n = 10;
        console.log("It is Constructor");       
    }

    printval()
    {
       console.log("Given Value : " + this.n); 
    }
}

var c1 = new DemoCons();
c1.printval();
