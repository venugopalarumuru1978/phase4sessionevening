class DemoClass
{
    private x:number = 100;
    private y:number = 120;

    printValues():void
    {
        console.log("X value : " + this.x);
        console.log("Y value : " + this.y);
        var sum = this.x+this.y;
        console.log("Sum Value : " + sum);
    }
}

let  obj1 = new DemoClass();
obj1.printValues();

