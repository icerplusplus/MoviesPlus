package business

import (
	"backend/modules/movie/model"
	"context"
)

type GetBannersStorage interface {
	GetBanners(ctx context.Context) ([]model.Movie, error)
}

type getBannersBusiness struct {
	store GetBannersStorage
}

func NewGetBannersBusiness(store GetBannersStorage) *getBannersBusiness {
	return &getBannersBusiness{store: store}
}

func (b *getBannersBusiness) GetBanners(ctx context.Context) ([]model.Movie, error) {
	data, error := b.store.GetBanners(ctx)

	if error != nil {
		return nil, error
	}

	return data, nil
}
