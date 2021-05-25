import gql from "graphql-tag";

export const query = gql`
  query {
    launchNext {
      launch_site {
        site_name
        site_id
      }
      launch_year
      rocket {
        rocket_name
      }
      mission_name
      details
      launch_date_local
    }
  }
`;
