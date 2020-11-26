import { gql } from 'apollo-boost'

const allUsers = gql`
  query getProfiles {
    getUzrsProfiles {
        uid
        matricNo
        myNo
        studentId
        fullname
        gender
        programme{name}
        college{name, code}
        level
        phone
        department{name}
        createdAt
        isLiked
        memo
        __typename
      }
  }
`;

export default allUsers;