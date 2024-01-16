package model

import "time"

type Director struct {
	Id        uint64     `json:"id" gorm:"column:id;"`
	Name      string     `json:"name" gorm:"column:name;"`
	NameMd5   string     `json:"name_md5" gorm:"column:name_md5;"`
	Slug      string     `json:"slug" gorm:"column:slug;"`
	Gender    string     `json:"gender" gorm:"column:gender;"` // enum('male','female','other')
	Bio       string     `json:"bio" gorm:"column:bio;"`
	ThumbUrl  string     `json:"thumb_url" gorm:"column:thumb_url;"`
	SeoTitle  string     `json:"seo_title" gorm:"column:seo_title;"`
	SeoDes    string     `json:"seo_des" gorm:"column:seo_des;"`
	SeoKey    string     `json:"seo_key" gorm:"column:seo_key;"`
	CreatedAt *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}

func (Director) TableName() string { return "directors" }

type DirectorMovie struct {
	MovieId    uint64 `json:"movie_id" gorm:"column:movie_id;"`
	DirectorId uint64 `json:"director_id" gorm:"column:director_id;"`
}

func (DirectorMovie) TableName() string { return "director_movie" }