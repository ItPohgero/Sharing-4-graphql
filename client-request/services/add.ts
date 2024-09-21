import { gql } from "graphql-request";

const Add = gql`
    mutation CreatePost {
        createPost(title: "test", content: "content") {
            id
            title
            content
        }
    }
`;

export default Add;
