package business

import (
	"backend/common"
	"backend/modules/movie/model"
	"context"
)

type GetMoviesStorage interface {
	GetMovies(
		ctx context.Context,
		filter *model.Filter,
		paging *common.Paging,
		moreKeys ...string,
	) ([]model.Movie, error)
}

type getMoviesBusiness struct {
	store GetMoviesStorage
}

func NewGetListMovieBusiness(store GetMoviesStorage) *getMoviesBusiness {
	return &getMoviesBusiness{store: store}
}

func (b *getMoviesBusiness) GetMovies(
	ctx context.Context,
	filter *model.Filter,
	paging *common.Paging,
) ([]model.Movie, error) {
	data, error := b.store.GetMovies(ctx, filter, paging)

	if error != nil {
		return nil, error
	}

	return data, nil
}
