package main

import (
	"backend/configs"
	"backend/configs/database"
	gin_movie "backend/modules/movie/transport/gin"
	"os"
	"time"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

func main() {

	// app init
	configs.AppInit()

	// connect to db
	db := database.GetInstance()

	r := gin.Default()

	// cors handler
	r.Use(cors.Default())

	v1 := r.Group("v1")
	{
		movies := v1.Group("movies")
		{
			movies.GET("", gin_movie.GetListMovie(db.DB))
			movies.GET("/:id", gin_movie.GetMovie(db.DB))
		}
		banners := v1.Group("banners")
		{
			banners.GET("", gin_movie.GetListBanner(db.DB))
		}
	}

	r.Run(os.Getenv("PORT")) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

}

type Menus struct {
	Id        uint64     `json:"id" gorm:"column:id;"`
	Name      string     `json:"name" gorm:"column:name;"`
	Type      string     `json:"type" gorm:"column:type;"`
	Link      string     `json:"link" gorm:"column:link;"`
	ParentId  uint64     `json:"parent_id" gorm:"column:parent_id;"`
	Lft       uint64     `json:"lft" gorm:"column:lft;"`
	Rgt       uint64     `json:"rgt" gorm:"column:rgt;"`
	Depth     uint64     `json:"depth" gorm:"column:depth;"`
	CreatedAt *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"column:updated_at;"`
	DeletedAt *time.Time `json:"deleted_at" gorm:"column:deleted_at;"`
}

type Tags struct {
	Id        uint64     `json:"id" gorm:"column:id;"`
	Name      string     `json:"name" gorm:"column:name;"`
	NameMd5   string     `json:"name_md5" gorm:"column:name_md5;"`
	Slug      string     `json:"slug" gorm:"column:slug;"`
	SeoTitle  string     `json:"seo_title" gorm:"column:seo_title;"`
	SeoDes    string     `json:"seo_des" gorm:"column:seo_des;"`
	SeoKey    string     `json:"seo_key" gorm:"column:seo_key;"`
	CreatedAt *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}

type Catalogs struct {
	Id        uint64     `json:"id" gorm:"column:id;"`
	Name      string     `json:"name" gorm:"column:name;"`
	Slug      string     `json:"slug" gorm:"column:slug;"`
	Paginate  int        `json:"paginate" gorm:"column:paginate;"`
	Value     string     `json:"value" gorm:"column:value;"`
	SeoTitle  string     `json:"seo_title" gorm:"column:seo_title;"`
	SeoDes    string     `json:"seo_des" gorm:"column:seo_des;"`
	SeoKey    string     `json:"seo_key" gorm:"column:seo_key;"`
	CreatedAt *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}
