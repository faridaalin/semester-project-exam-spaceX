interface IEndpoints {
  NEXT_LAUNCH: string;
  UPCOMING_LAUNCH: string;
  PREVIOUS_LAUNCH: string;
  PAD_LOCATIONS: string;
  ROCKETS: string;
}

interface IRegions {
  MI: string;
  TEXAS: string;
  FLORIDA: string;
  CALIFORNIA: string;
}

enum KeyNames {
  NEXT_LAUNCH = "NEXT_LAUNCH",
  PREVIOUS_LAUNCH = "PREVIOUS_LAUNCH",
  PAD_LOCATIONS = "PAD_LOCATIONS",
  UPCOMING_LAUNCH = "UPCOMING_LAUNCH",
  ROCKETS = "ROCKETS",
}

type LaunchSiteObj = {
  site_name: string;
  site_id: string;
};
type Rocket = {
  rocket_name: string;
};
interface ILocations {
  name: string;
  region: string;
}
interface LaunchYear {
  [key: string]: string;
}
interface MissionName {
  [key: string]: string;
}
interface Details {
  [key: string]: string;
}

type Launch = {
  launch_site: LaunchSiteObj;
  launch_year: LaunchYear;
  rocket: Rocket;
  mission_name: MissionName;
  details: Details;
  launch_date_local: string;
};

interface INextLaunch {
  launchNext: Launch;
}

type INextDate = Launch;

type SiteLocation = Launch;

type Pads = {
  location: ILocations;
  details: Details;
  status: string;
  name: string;
};

interface ILaunchPads {
  launchpads: [Pads];
}

type Prev = {
  launch_date_local: string;
  launch_site: LaunchSiteObj;
  rocket: Rocket;
  mission_name: MissionName;
};

interface IPreviousLaunches {
  launchesPast: [Prev];
}

interface IUpcomingLaunches {
  launchesUpcoming: [Prev];
}

type RocketTypes = {
  name: string;
  height: {
    meters: number;
  };
  diameter: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  engines: {
    number: number;
  };
  description: string;
  landing_legs: {
    number: number;
  };
  type: string;
  stages: number;
};

interface IRockets {
  rockets: [RocketTypes];
}
