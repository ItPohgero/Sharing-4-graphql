export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface GetPostsResponse {
    getPosts: Post[];
}

export interface CreatePostResponse {
    createPost: Post;
}

export interface CreatePostVariables {
    title: string;
    content: string;
}
