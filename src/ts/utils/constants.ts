const endpoints: IEndpoints = {
  NEXT_LAUNCH: "https://api.spacexdata.com/v3/launches/next",
  UPCOMING_LAUNCH: "https://api.spacexdata.com/v3/launches/upcoming",
  PREVIOUS_LAUNCH: "https://api.spacexdata.com/v3/launches/past",
  PAD_LOCATIONS: "https://api.spacexdata.com/v3/launchpads",
  ROCKETS: "https://api.spacexdata.com/v3/rockets",
};

export default endpoints;

export const storage: IEndpoints = {
  NEXT_LAUNCH: "NEXT_LAUNCH",
  UPCOMING_LAUNCH: "UPCOMING_LAUNCH",
  PREVIOUS_LAUNCH: "PREVIOUS_LAUNCH",
  PAD_LOCATIONS: "PAD_LOCATIONS",
  ROCKETS: "ROCKETS",
};

export const locations: IRegions = {
  MI: "Marshall Islands",
  TEXAS: "Texas",
  FLORIDA: "Florida",
  CALIFORNIA: "California",
};
