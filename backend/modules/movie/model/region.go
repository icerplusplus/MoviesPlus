package model

import "time"

type Region struct {
	Id        uint64     `json:"id" gorm:"column:id;"`
	Name      string     `json:"name" gorm:"column:name;"`
	Slug      string     `json:"slug" gorm:"column:slug;"`
	SeoTitle  string     `json:"seo_title" gorm:"column:seo_title;"`
	SeoDes    string     `json:"seo_des" gorm:"column:seo_des;"`
	SeoKey    string     `json:"seo_key" gorm:"column:seo_key;"`
	UserId    string     `json:"user_id" gorm:"column:user_id;"`
	UserName  string     `json:"user_name" gorm:"column:user_name;"`
	CreatedAt *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}

func (Region) TableName() string { return "regions" }

type MovieRegion struct {
	MovieId  uint64 `json:"movie_id" gorm:"column:movie_id;"`
	RegionId uint64 `json:"region_id" gorm:"column:region_id;"`
}

func (MovieRegion) TableName() string { return "movie_region" }
