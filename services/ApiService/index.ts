import ApiClient from "./ApiClient";
import { Dogs as DogsAPI } from "./entities";
import { Cats as CatsAPI } from "./entities";

const makeApiList = () => {
  const dogApiKey = process.env.NEXT_PUBLIC_DOG_API_KEY || "";
  const catApiKey = process.env.NEXT_PUBLIC_CAT_API_KEY || "";

  const dogApiClient = new ApiClient({
    baseURL: "https://api.thedogapi.com/v1/",
    apiKey: dogApiKey,
  });

  const catApiClient = new ApiClient({
    baseURL: "https://api.thecatapi.com/v1/",
    apiKey: catApiKey,
  });

  return {
    dogApi: new DogsAPI({ apiClient: dogApiClient }),
    catApi: new CatsAPI({ apiClient: catApiClient }),
  };
};

export default makeApiList;
