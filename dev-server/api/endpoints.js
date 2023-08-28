const res = require('../data/auctions.json');

const getRandom = (max) => Math.round(Math.random() * max);

const auctions = res.auctions.map((auction) => ({
  ...auction,
  finishTime: new Date().getTime() + 1000 * 600 * getRandom(10),
  bid: 0,
}));

const filterAuctions = (req) => {
  const search = (req.query.search || '').trim().toLowerCase();
  auctions.forEach((auction) => {
    // eslint-disable-next-line no-param-reassign
    auction.bid = getRandom(10) <= 7 ? auction.bid : auction.bid + getRandom(10) * 100;
  });

  return {
    auctions:
    search ? auctions.filter(({ title }) => !(title.toLowerCase().indexOf(search) < 0)) : auctions,
  };
};

const getAuctionById = (req) => {
  const { auctionId } = req.params;
  const auction = auctions.find(({ id }) => auctionId.toString() === id.toString());
  return {
    auction: {
      ...auction,
      mileage: getRandom(100) * 1000,
    },
  };
};

module.exports = [
  { path: '/api/filterAuctions', controller: filterAuctions },
  { path: '/api/auction/:auctionId', controller: getAuctionById },
];
