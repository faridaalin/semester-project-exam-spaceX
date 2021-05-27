import gql from "graphql-tag";

export const launch = gql`
  query {
    launchesPast(limit: 10) {
      launch_date_local
      launch_site {
        site_name
      }
      mission_name
      rocket {
        rocket_name
      }
    }
    launchesUpcoming {
      launch_date_local
      launch_site {
        site_name
      }
      mission_name
      rocket {
        rocket_name
      }
    }
    launchNext {
      launch_site {
        site_name
        site_id
      }
      rocket {
        rocket_name
      }
      mission_name
      details
      launch_date_local
      launch_year
    }
  }
`;

export const launchpads = gql`
  query {
    launchpads {
      location {
        name
        region
      }
      details
      status
      name
    }
  }
`;
export const rockets = gql`
  query {
    rockets {
      name
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      engines {
        number
      }
      description
      landing_legs {
        number
      }
      type
      stages
    }
  }
`;
