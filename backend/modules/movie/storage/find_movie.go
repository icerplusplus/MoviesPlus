package storage

import (
	"backend/modules/movie/model"
	"context"
)

func (sql *sqlStore) GetMovie(ctx context.Context, condition map[string]interface{}) (*model.Movie, error) {
	var data model.Movie

	if err := sql.db.Table(model.Movie{}.TableName()).Where(condition).First(&data).Error; err != nil {
		return nil, err
	}

	return &data, nil
}
