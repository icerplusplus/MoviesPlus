package model

type Filter struct {
	MovieName string `json:"movie_name" form:"movie_name"`
	// Actor     string `json:"actor" form:"actor"`
	Category uint64 `json:"category" form:"category"`
}
