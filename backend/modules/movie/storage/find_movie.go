package storage

import (
	"backend/modules/movie/model"
	"context"
	"fmt"
	"sync"
)

func (sql *sqlStore) GetMovie(ctx context.Context, condition map[string]interface{}) (*model.MovieDetail, error) {
	var movie model.Movie

	// Get movie
	if err := sql.db.Table(model.Movie{}.TableName()).Where(condition).First(&movie).Error; err != nil {
		return nil, err
	}

	movieDetail := model.MovieDetail{
		Movie:         movie,
		StreamServers: *sql.getEpisodes(movie.Id),
		Actors:        *sql.getActors(movie.Id),
		Directors:     *sql.getDirectors(movie.Id),
		Regions:       *sql.getRegions(movie.Id),
		Categories:    *sql.getCategories(movie.Id),
	}

	return &movieDetail, nil
}

func (sql *sqlStore) getEpisodes(movieId uint64) *model.StreamServers {
	var servers model.StreamServers
	// Using goroutines and channels to handle 2 query run sync together
	wg := sync.WaitGroup{}
	embedChannel := make(chan []model.Episode)
	m3u8Channel := make(chan []model.Episode)
	wg.Add(2)
	go func() {
		// Filter movie with stream server is "embed"
		var listEmbed []model.Episode
		sql.db.Table(model.Episode{}.TableName()).Where(fmt.Sprintf("movie_id = %d AND type = '%s'", movieId, "embed")).Order("id").Find(&listEmbed)
		embedChannel <- listEmbed
		wg.Done()
	}()
	go func() {
		// Filter movie with stream server is "m3u8"
		var listM3u8 []model.Episode
		sql.db.Table(model.Episode{}.TableName()).Where(fmt.Sprintf("movie_id = %d AND type = '%s'", movieId, "m3u8")).Order("id").Find(&listM3u8)
		m3u8Channel <- listM3u8
		wg.Done()
	}()

	servers.Embed = <-embedChannel
	servers.M3u8 = <-m3u8Channel

	wg.Wait()

	return &servers
}

func (sql *sqlStore) getActors(movieId uint64) *[]model.Actor {
	var data []model.Actor
	wg := sync.WaitGroup{}
	ch := make(chan []model.Actor)
	query := sql.db.Table(model.Actor{}.TableName())
	wg.Add(1)
	go func() {
		// Filter movie with stream server is "embed"
		var actors []model.Actor
		query.Joins("JOIN actor_movie ON actor_movie.actor_id = actors.id").
			Where("actor_movie.movie_id = ?", movieId).
			Find(&actors)
		ch <- actors
		wg.Done()
	}()
	data = <-ch
	wg.Wait()

	return &data
}

func (sql *sqlStore) getDirectors(movieId uint64) *[]model.Director {
	var data []model.Director
	wg := sync.WaitGroup{}
	ch := make(chan []model.Director)
	query := sql.db.Table(model.Director{}.TableName())
	wg.Add(1)
	go func() {
		// Filter movie with stream server is "embed"
		var directors []model.Director
		query.Joins("JOIN director_movie ON director_movie.director_id = directors.id").
			Where("director_movie.movie_id = ?", movieId).
			Find(&directors)
		ch <- directors
		wg.Done()
	}()
	data = <-ch
	wg.Wait()

	return &data
}

func (sql *sqlStore) getRegions(movieId uint64) *[]model.Region {
	var data []model.Region
	wg := sync.WaitGroup{}
	ch := make(chan []model.Region)
	query := sql.db.Table(model.Region{}.TableName())
	wg.Add(1)
	go func() {
		// Filter movie with stream server is "embed"
		var regions []model.Region
		query.Joins("JOIN movie_region ON movie_region.region_id = regions.id").
			Where("movie_region.movie_id = ?", movieId).
			Find(&regions)
		ch <- regions
		wg.Done()
	}()
	data = <-ch
	wg.Wait()

	return &data
}

func (sql *sqlStore) getCategories(movieId uint64) *[]model.Category {
	var data []model.Category
	wg := sync.WaitGroup{}
	ch := make(chan []model.Category)
	query := sql.db.Table(model.Category{}.TableName())
	wg.Add(1)
	go func() {
		// Filter movie with stream server is "embed"
		var categories []model.Category
		query.Joins("JOIN category_movie ON category_movie.category_id = categories.id").
			Where("category_movie.movie_id = ?", movieId).
			Find(&categories)
		ch <- categories
		wg.Done()
	}()
	data = <-ch
	wg.Wait()

	return &data
}
