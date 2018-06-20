export class Food {

  constructor(


    public ID: string,
    public name: string,
    public userID : string,
    public foodID : string,
    public kcal : number,
    public percentageFat : number,
    public amount:number,
    public createdAt : string,
    public favorite: boolean,
    public url: string,
    public _id: string,
    public _rev: string

  ) { }
}
