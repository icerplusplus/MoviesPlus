package model

import "time"

type Movie struct {
	Id                 uint64     `json:"id" gorm:"column:id;primarykey"`
	Name               string     `json:"name" gorm:"column:name;"`
	OriginName         string     `json:"origin_name" gorm:"column:origin_name;"`
	Slug               string     `json:"slug" gorm:"column:slug;"`
	Content            string     `json:"content" gorm:"column:content;"`
	ThumbUrl           string     `json:"thumb_url" gorm:"column:thumb_url;"`
	PosterUrl          string     `json:"poster_url" gorm:"column:poster_url;"`
	Type               string     `json:"type" gorm:"column:type;"`     //  enum('single','series')
	Status             string     `json:"status" gorm:"column:status;"` // enum('trailer','ongoing','completed')
	TrailerUrl         string     `json:"trailer_url" gorm:"column:trailer_url;"`
	EpisodeTime        string     `json:"episode_time" gorm:"column:episode_time;"`
	EpisodeCurrent     string     `json:"episode_current" gorm:"column:episode_current;"`
	EpisodeTotal       string     `json:"episode_total" gorm:"column:episode_total;"`
	Quality            string     `json:"quality" gorm:"column:quality;"`
	Language           string     `json:"language" gorm:"column:language;"`
	Notify             string     `json:"notify" gorm:"column:notify;"`
	Showtimes          string     `json:"showtimes" gorm:"column:showtimes;"`
	PublishYear        int        `json:"publish_year" gorm:"column:publish_year;"`
	IsShownInTheater   int        `json:"is_shown_in_theater" gorm:"column:is_shown_in_theater;"`
	IsRecommended      int        `json:"is_recommended" gorm:"column:is_recommended;"`
	IsCopyright        int        `json:"is_copyright" gorm:"column:is_copyright;"`
	IsSensitiveContent int        `json:"is_sensitive_content" gorm:"column:is_sensitive_content;"`
	EpisodeServerCount int        `json:"episode_server_count" gorm:"column:episode_server_count;"`
	EpisodeDataCount   int        `json:"episode_data_count" gorm:"column:episode_data_count;"`
	ViewTotal          int        `json:"view_total" gorm:"column:view_total;"`
	ViewDay            int        `json:"view_day" gorm:"column:view_day;"`
	ViewWeek           int        `json:"view_week" gorm:"column:view_week;"`
	ViewMonth          int        `json:"view_month" gorm:"column:view_month;"`
	RatingCount        int        `json:"rating_count" gorm:"column:rating_count;"`
	RatingStar         float32    `json:"rating_star" gorm:"column:rating_star;"`
	UpdateHandler      string     `json:"update_handler" gorm:"column:update_handler;"`
	UpdateIdentity     string     `json:"update_identity" gorm:"column:update_identity;"`
	UpdateChecksum     string     `json:"update_checksum" gorm:"column:update_checksum;"`
	UserId             uint64     `json:"user_id" gorm:"column:user_id;"`
	UserName           string     `json:"user_name" gorm:"column:user_name;"`
	CreatedAt          *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt          *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}

func (Movie) TableName() string { return "movies" }

type MovieDetail struct {
	Movie         Movie         `json:"movie"`
	StreamServers StreamServers `json:"stream_servers"`
	Actors        []Actor       `json:"actors"`
	Directors     []Director    `json:"directors"`
	Regions       []Region      `json:"regions"`
	Categories    []Category    `json:"categories"`
}
