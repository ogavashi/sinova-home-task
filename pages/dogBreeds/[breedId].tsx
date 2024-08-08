import { IDogBreed } from "@/types";
import { NextPageWithLayout } from "../_app";
import { AppLayout } from "@/components";
import { api } from "@/app";
import { GetServerSideProps } from "next";
import { Details } from "@/features/dogs";

type Props = {
  breed: IDogBreed;
};

const Breed: NextPageWithLayout<Props> = ({ breed }) => {
  return <Details breed={breed} />;
};

Breed.getLayout = (page: React.ReactNode) => {
  return <AppLayout>{page}</AppLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const breed = await api.dogApi.getBreed(params?.breedId as string);

  return {
    props: { breed },
  };
};

export default Breed;
