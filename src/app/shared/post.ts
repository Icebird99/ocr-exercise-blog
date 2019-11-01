export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  
    // Post can be either loaded (all properties provided) or newly created (only title and content)
    constructor(title : string, content : string, created_at : Date = new Date(), loveIts: number = 0){
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.created_at = created_at;
      this.loveIts = loveIts;
    }
  
    likeIt = function (like : boolean) {
      this.loveIts += like ? 1 : -1;
    }
  }