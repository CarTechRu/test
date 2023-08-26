function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(res.status));
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export default class Api {
  constructor() {
    this.apiPath = process.env.CONFIG.API_BASEPATH;
    this.request = request.bind(this);
  }

  getAuctions(query = '') {
    return this.request(`${this.apiPath}/filterAuctions?search=${query}`);
  }

  getAuctionInfo(auctionId) {
    return this.request(`${this.apiPath}/auction/:${auctionId}`);
  }
}

export const api = new Api();
