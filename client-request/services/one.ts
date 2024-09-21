import { gql } from "graphql-request";

const One = gql`
    query GetPost {
        getPost(id: "1") {
            id
            title
            content
        }
    }
`;

export default One;
