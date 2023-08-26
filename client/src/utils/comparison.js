function isBidChange(auction1, auction2) {
  return auction1.bid !== auction2.bid;
}

function cmpAuctionsData(currentData, newData) {
  const modifiedData = JSON.parse(JSON.stringify(currentData));

  newData.forEach((newAuction) => {
    const idx = currentData.findIndex((currentAuction) => currentAuction.id === newAuction.id);
    if (idx !== undefined) {
      if (isBidChange(currentData[idx], newAuction)) {
        modifiedData[idx] = newAuction;
      }
    } else {
      modifiedData.push(newAuction);
    }
  });
  return modifiedData;
}

export default cmpAuctionsData;
