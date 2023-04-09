class DemoClass1
{
    x:number;

    square():number
    {
        return this.x*this.x;
    }

    cube():string 
    {
        var cb = this.x*this.x*this.x;
        var str = this.x + " Cube Value is " + cb;
        return str;
    }
}

let obj2 = new DemoClass1();
obj2.x = 10;
console.log(obj2.x + " Square Value is " + obj2.square());
console.log(obj2.cube());
