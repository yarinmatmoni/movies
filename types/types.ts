export type movieType = {
	id: string;
	title: string;
	release_date: string;
	poster_path: string | null;
};

export type movieIdType = {
	params: {
		movieId: string;
	};
};
