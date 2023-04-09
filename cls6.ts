interface iface1
{
    GetValue(n:number);
}

interface iface2
{
    PrintValue();
}

class DemoIface implements iface1, iface2
{
    private n:number;
    GetValue(n: number) {
        this.n = n;
    }

    PrintValue() {
        console.log("N value : " + this.n);
    }
}

var df = new DemoIface();
df.GetValue(10);
df.PrintValue();