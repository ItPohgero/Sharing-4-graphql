import posts, { type Post } from "../mock/posts";

interface GetPostArgs {
    id: number;
}

interface CreatePostArgs {
    title: string;
    content: string;
}

const resolvers = {
    Query: {
        getPosts: (): Post[] => posts,

        getPost: (_parent: undefined, args: GetPostArgs): Post | undefined => {
            const { id } = args;
            console.log({id});
            
            return posts.find(post => post.id === Number(id));
        },
    },

    Mutation: {
        createPost: (_parent: undefined, args: CreatePostArgs): Post => {
            const { title, content } = args;
            const newPost: Post = {
                id: posts.length + 1,
                title,
                content,
            };
            posts.push(newPost);
            return newPost;
        },
    },
};

export default resolvers;
