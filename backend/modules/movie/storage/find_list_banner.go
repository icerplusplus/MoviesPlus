package storage

import (
	"backend/modules/movie/model"
	"context"
)

func (sql *sqlStore) GetBanners(ctx context.Context) ([]model.Movie, error) {
	var data []model.Movie

	if err := sql.db.Table(model.Movie{}.TableName()).Order("id desc").Limit(10).Find(&data).Error; err != nil {
		return nil, err
	}

	return data, nil
}
