//I will use class based data model (available at run time too) rather than interface based data model (available only at compile time and not at run time). Do remember to use public infront of the data types. 
export class VideoPackages {
  constructor(
  public id: string, 
  public title: string, 
  public description: string, 
  //public imageUrl: string, 
  public price: number,
  ) {}
}

// In case I wanted to define an interface, I would have done like this (read more on https://stackoverflow.com/questions/37652801/when-to-use-interface-and-model-in-typescript-angular2)
// export interface VideoPackages {
//    id: string; 
//    title: string; 
//    description: string; 
//    imageUrl: string; 
//    proce: number;
// }