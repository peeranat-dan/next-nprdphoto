const getPhotoList = (option) => {
  const photosList = [
    "PProud1",
    "PProud2",
    "PPom1",
    "Aom1",
    "Aom2",
    "Aom3",
    "PEarn1",
    "Billing1",
    "PTam1",
    "Nin1",
    "Coach1",
  ];
  return photosList.map((photo) => `/assets/photos/${option}/${photo}.jpg`);
};
