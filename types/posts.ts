export type SimplifyPost = {
  uid: string;
  title: string;
  author: string;
  date: string;
};

export type IPosts = {
  posts: [];
};

export type Post = {
  status: string;
  ok: boolean;
  post: {
    deaft: boolean;
    readyToPost: boolean;
    title: string;
    post: string;
    author: string;
    tags: string[];
    dateTobePosted: string;
    date: string;
    uid: string;
  };
};
