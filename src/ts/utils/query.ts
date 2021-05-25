import gql from "graphql-tag";

export const launchNext = gql`
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
export const launchesPast = gql`
  query {
    launchesPast(limit: 10) {
      launch_date_local
      launch_site {
        site_name
      }
      links {
        video_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;
export const launchesUpcoming = gql`
  query {
    launchesUpcoming {
      launch_date_local
      launch_site {
        site_name
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
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
