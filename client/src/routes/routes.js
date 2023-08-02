const apiPath = process.env.CONFIG.API_BASEPATH;
const imagesPath = process.env.CONFIG.IMAGES_BASEPATH;

const routes = {
  mainPage: () => '/',
  auctionPage: () => 'auction/:id',
  notFoundPage: () => '*',
};

const apiRoutes = {
  dataPath: () => [apiPath, 'filterAuctions'].join('/'),
  searchPath: (request) => [apiPath, `filterAuctions?search=${request}`].join('/'),
  auctionPath: (id) => [apiPath, `auction/${id}`].join('/'),
  imagePath: () => imagesPath,
};

export { routes, apiRoutes };
