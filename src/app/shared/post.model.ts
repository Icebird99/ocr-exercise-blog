export class Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    // Post can be either loaded (all properties provided) or newly created (only title and content)
    constructor(id: number, title : string, content : string, created_at : Date = new Date(), loveIts: number = 0){
      this.id = id;
      this.title = title;
      this.content = content;
      this.created_at = created_at;
      this.loveIts = loveIts;
    }
  }