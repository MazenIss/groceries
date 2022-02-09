export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;

constructor(n:string,d:string,i:string){
    this.description=d;
    this.name=n;
    this.imagePath=i;
}
}