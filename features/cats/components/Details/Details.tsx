import { ICatBreed } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface DetailsProps {
  breed: ICatBreed;
}

export const Details = ({ breed }: DetailsProps) => {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div>
      <button className="btn btn-secondary mb-4" onClick={handleGoBack}>
        Go Back
      </button>
      <div className="hero bg-base-200 p-8 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Image
            src={breed?.imageUrl || ""}
            width={1024}
            height={1024}
            alt={breed.name}
            className="object-cover w-full lg:w-1/3 rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">{breed.name}</h1>
            <p className="text-xl">
              <strong>Life Span:</strong> {breed.life_span}
            </p>
            <p className="text-xl">
              <strong>Temperament:</strong> {breed.temperament}
            </p>
            <p className="text-xl">
              <strong>Weight:</strong> {breed.weight?.imperial} lbs / {breed.weight?.metric} kg
            </p>
            <p className="text-xl">
              <strong>Origin:</strong> {breed.origin}
            </p>
            <p className="text-xl">
              <strong>Description:</strong> {breed.description}
            </p>
            <p className="text-xl">
              <strong>Hypoallergenic:</strong> {breed.hypoallergenic ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
