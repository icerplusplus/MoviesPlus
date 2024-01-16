package business

import (
	"backend/modules/movie/model"
	"context"
)

type GetMovieStorage interface {
	GetMovie(ctx context.Context, condition map[string]interface{}) (*model.MovieDetail, error)
}

type getMovieBusiness struct {
	store GetMovieStorage
}

func NewGetMovieBusiness(store GetMovieStorage) *getMovieBusiness {
	return &getMovieBusiness{store: store}
}

func (b *getMovieBusiness) GetMovieById(ctx context.Context, id int) (*model.MovieDetail, error) {
	data, error := b.store.GetMovie(ctx, map[string]interface{}{"id": id})

	if error != nil {
		return nil, error
	}

	return data, nil
}
