type Post = {
    id: number;
    title: string;
    content: string;
};

const posts: Post[] = [
    { id: 1, title: "Post Pertama", content: "This is the content of the first post" },
    { id: 2, title: "Post Kedua", content: "This is the content of the second post" },
];

export type { Post };
export default posts