package model

import "time"

type Category struct {
	Id        uint64     `json:"id" gorm:"column:id;primarykey"`
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

func (Category) TableName() string { return "categories" }

type CategoryMovie struct {
	MovieId    uint64 `json:"movie_id" gorm:"column:movie_id;primarykey"`
	CategoryId uint64 `json:"category_id" gorm:"column:category_id;"`
}

func (CategoryMovie) TableName() string { return "category_movie" }
