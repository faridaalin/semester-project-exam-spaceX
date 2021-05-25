interface IEndpoints {
  NEXT_LAUNCH: string;
  UPCOMING_LAUNCH: string;
  PREVIOUS_LAUNCH: string;
  PAD_LOCATIONS: string;
  ROCKETS: string;
}

enum KeyNames {
  NEXT_LAUNCH = "NEXT_LAUNCH",
  PREVIOUS_LAUNCH = "PREVIOUS_LAUNCH",
  PAD_LOCATIONS = "PAD_LOCATIONS",
  UPCOMING_LAUNCH = "UPCOMING_LAUNCH",
  ROCKETS = "ROCKETS",
}

interface IObjectFromApiCall {
  [key: string]: any;
}

interface IPads {
  location: {
    name: string;
    region: string;
  };
  details: string;
  status: string;
  name: string;
}

interface ILaunchPads {
  launchpads: [IPads];
}

interface IPrevObject {
  launch_date_local: date;
  launch_site: {
    site_name: string;
  };
  links: {
    video_link: string;
    flickr_images: string;
  };
  rocket: {
    rocket_name: string;
  };
}

interface IPreviousLaunches {
  launchesPast: [IPrevObject];
}

interface IUpcomingObject {
  launch_site: {
    site_name: string;
    site_id: string;
  };
  launch_year: interger;
  rocket: {
    rocket_name: string;
  };
  mission_name: string;
  details: string;
  launch_date_local: ate;
}
interface IUpcomingLaunches {
  launchesUpcoming: [IUpcomingObject];
}
