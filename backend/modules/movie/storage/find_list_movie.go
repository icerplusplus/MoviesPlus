package storage

import (
	"backend/common"
	actorModel "backend/modules/actor/model"
	cateModel "backend/modules/category/model"
	movieModel "backend/modules/movie/model"
	"context"
)

func (sql *sqlStore) GetMovies(
	ctx context.Context,
	filter *movieModel.Filter,
	paging *common.Paging,
	moreKeys ...string,
) ([]movieModel.Movie, error) {
	var data []movieModel.Movie
	var listCateMovie []uint64
	var listActorMovie []uint64

	// Handler filter with condition: category id, actor, movie name
	if f := filter; f != nil {
		if category := f.Category; category > 0 {
			sql.db.Table(cateModel.CategoryMovie{}.TableName()).Select("movie_id").Where("category_id = ?", f.Category).Find(&listCateMovie)
			sql.db.Table(movieModel.Movie{}.TableName()).Where("id IN ?", listCateMovie)
		}
		if actor := f.Actor; actor != "" {
			sql.db.Table(actorModel.ActorMovie{}.TableName()).Select("movie_id").Where("category_id = ?", f.Category).Find(&listActorMovie)
			sql.db.Table(movieModel.Movie{}.TableName()).Where("id IN ?", listActorMovie)
		}
		if movieName := f.MovieName; movieName != "" {
			sql.db.Table(movieModel.Movie{}.TableName()).Where("name LIKE ?", "%"+movieName+"%").Or("origin_name LIKE ?", "%"+movieName+"%").Or("slug LIKE ?", "%"+movieName+"%")
		}
	}

	// Count
	sql.db.Table(movieModel.Movie{}.TableName()).Count(&paging.Total)

	// Pagination
	if err := sql.db.Table(movieModel.Movie{}.TableName()).Order("id desc").Offset((paging.Page - 1) * paging.Limit).Limit(paging.Limit).Find(&data).Error; err != nil {
		return nil, err
	}

	return data, nil
}
