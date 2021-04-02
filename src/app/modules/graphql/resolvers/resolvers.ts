module.exports = function (fictionURL: string, nonFictionURL: string) {
	return {
		Query: {
			combinedFictionList: async (_: any, __: any, { dataSources }: any) => {
				try {
					return dataSources.bestsellersAPI.getListData(fictionURL);
				} catch (err) {
					console.error('Cannot retrieve data for combined fiction list API', err)
				}
			},
			combinedNonFictionList: async (_: any, __: any, { dataSources }: any) => {
				try {
					return dataSources.bestsellersAPI.getListData(nonFictionURL);
				} catch (err) {
					console.error('Cannot retrieve data for combined fiction list API', err)
				}
			}
		},
	};
}