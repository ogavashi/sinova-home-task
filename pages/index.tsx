import { NextPageWithLayout } from "./_app";
import { AppLayout } from "@/components";
import { api } from "@/features/app";
import { Card as CatCard } from "@/features/cats";
import { Card as DogCard } from "@/features/dogs";
import { ICatBreed, IDogBreed } from "@/types";

type Props = {
  dogBreeds: IDogBreed[];
  catBreeds: ICatBreed[];
};

const Home: NextPageWithLayout<Props> = ({ dogBreeds, catBreeds }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {dogBreeds.map((dogBreed) => (
        <div className="flex-shrink-0" key={dogBreed.id}>
          <DogCard breed={dogBreed} />
        </div>
      ))}
      {catBreeds.map((catBreed) => (
        <div className="flex-shrink-0" key={catBreed.id}>
          <CatCard breed={catBreed} />
        </div>
      ))}
    </div>
  );
};

Home.getLayout = (page: React.ReactNode) => {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps = async () => {
  const dogBreeds = await api.dogApi.getBreeds();
  const catBreeds = await api.catApi.getBreeds();

  return {
    props: { dogBreeds, catBreeds },
  };
};

export default Home;
