import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";

import React from "react";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
  const favouriteListings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (favouriteListings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourite found"
          subtitle="Looks like you haven't favourite any trips yet."
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavouritesClient
        favouriteListings={favouriteListings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default FavouritesPage;
