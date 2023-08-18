import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavouritesClientProps {
  favouriteListings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavouritesClient: React.FC<FavouritesClientProps> = ({
  favouriteListings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favourites" subtitle="Listings you have favourited." />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favouriteListings.map((favourite) => (
          <ListingCard
            key={favourite.id}
            currentUser={currentUser}
            data={favourite}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavouritesClient;
