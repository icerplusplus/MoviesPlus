package storage

import (
	"backend/common"
	"backend/modules/movie/model"
	"context"
)

func (sql *sqlStore) GetMovies(
	ctx context.Context,
	filter *model.Filter,
	paging *common.Paging,
	moreKeys ...string,
) ([]model.Movie, error) {
	var data []model.Movie

	query := sql.db.Table(model.Movie{}.TableName()).Order("id desc")

	// Handler filter with condition: category id, actor, movie name
	if f := filter; f != nil {
		if category := f.Category; category > 0 {
			query.
				Joins("JOIN category_movie ON movies.id = category_movie.movie_id").
				Joins("JOIN categories ON category_movie.category_id = categories.id").
				Where("categories.id = ?", category)
		}
		if movieName := f.MovieName; movieName != "" {
			query.Where("name LIKE ?", "%"+movieName+"%").Or("origin_name LIKE ?", "%"+movieName+"%").Or("slug LIKE ?", "%"+movieName+"%")
		}
	}

	// Count
	query.Count(&paging.Total)

	// Pagination
	if err := query.Offset((paging.Page - 1) * paging.Limit).Limit(paging.Limit).Find(&data).Error; err != nil {
		return nil, err
	}

	return data, nil
}
