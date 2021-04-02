const { RESTDataSource } = require('apollo-datasource-rest');

class NYTBestSellersAPI extends RESTDataSource {
  constructor(apiBaseURL: string) {
    super();
		this.baseURL = apiBaseURL;
  }

	async getListData(listsURL: string) {
		const response = await this.get(listsURL);
		return response ? ({ copyright: response.copyright, results: response.results }) : {};
	}
}

module.exports = NYTBestSellersAPI;