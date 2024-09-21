import { gql } from "graphql-request";

const List = gql`
    query GetPosts {
        getPosts {
            content
            id
            title
        }
    }
`;
export default List;
