import React, { createContext } from 'react';

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const hotelNameAPI = process.env.REACT_APP_GO_COMET_HOTELS_NAME_API;
  const hotelDetailsAPI = process.env.REACT_APP_GO_COMET_HOTELS_DETAILS_API;

  return (
    <APIContext.Provider value={{ hotelNameAPI, hotelDetailsAPI }}>
      {children}
    </APIContext.Provider>
  );
};
