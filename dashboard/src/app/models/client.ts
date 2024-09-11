import { first } from 'rxjs';

export class Client {
  constructor(
    public userId: string | null | undefined,
    public firtsName: string,
    public lastName: string,
    // public country: string,
    public email: string,
    public phone: string,
    public instagram: string,
    public linkedin: string,
    public website: string,
    public photo: string,
    public photoNew: string | null | undefined | File | Blob,
    public description: string,
    public spotify: string,
    public facebook: string,
    public youtube: string,
    public x: string,
    public tiktok: string,
    public twitch: string,
    public idCard: string,
    public map: string,
    public myfile: string,
    public userName: string,

  ) {}
}

export class TecCard {
  constructor(
    public cardId:          String,
    public backgroundColor: String,
    public avatarStyle:   String,
    public fontFamily :     String,
    public colorTitle  :    String,
    public colorDescription: String,
    public fontSizeTitle:  String,
    public fontSizeDescription:  String,
    public colorFontButtons:    String,
    public colorButtons:    String,
    public hoverButtons:   String,
  ) {}
}
// export class TecCard {
//   constructor(
//     public cardId: String,
//     public userId: String,
//     public title: String,
//     public backgroundColor: String,
//     public font: String,
//     public fontStyle: String,

//   ) {}
// }

export class TecComponent {
  constructor(
    public id: string,
    public cardId: string,
    public repoComponentId: string,
    public type: string,
    public prop_one: string,
    public prop_two: string,
    public prop_tree: string,
    public prop_four: string,
    public prop_five: string,
    public prop_six: string
  ) {}
}
