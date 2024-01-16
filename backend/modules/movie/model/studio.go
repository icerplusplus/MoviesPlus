package model

import "time"

type Studio struct {
	Id        uint64     `json:"id" gorm:"column:id;"`
	Name      string     `json:"name" gorm:"column:name;"`
	NameMd5   string     `json:"name_md5" gorm:"column:name_md5;"`
	Slug      string     `json:"slug" gorm:"column:slug;"`
	ThumbUrl  string     `json:"thumb_url" gorm:"column:thumb_url;"`
	SeoTitle  string     `json:"seo_title" gorm:"column:seo_title;"`
	SeoDes    string     `json:"seo_des" gorm:"column:seo_des;"`
	SeoKey    string     `json:"seo_key" gorm:"column:seo_key;"`
	CreatedAt *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}

func (Studio) TableName() string { return "studios" }

type MovieStudio struct {
	MovieId  uint64 `json:"movie_id" gorm:"column:movie_id;"`
	StudioId uint64 `json:"studio_id" gorm:"column:studio_id;"`
}

func (MovieStudio) TableName() string { return "movie_studio" }
