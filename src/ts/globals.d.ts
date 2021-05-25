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
