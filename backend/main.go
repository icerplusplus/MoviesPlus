package main

import (
	"backend/configs"
	"backend/configs/database"
	gin_movie "backend/modules/movie/transport/gin"
	"fmt"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {

	// app init
	configs.AppInit()

	// connect to db
	db := database.GetInstance()

	fmt.Println(db)

	r := gin.Default()

	v1 := r.Group("v1")
	{
		movies := v1.Group("movies")
		{
			movies.GET("", gin_movie.GetListMovie(db.DB))
			movies.GET("/:id", gin_movie.GetMovie(db.DB))
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

type Directors struct {
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

type Episodes struct {
	Id            uint64     `json:"id" gorm:"column:id;"`
	MovieId       uint64     `json:"movie_id" gorm:"column:movie_id;"`
	Server        string     `json:"server" gorm:"column:server;"`
	Name          string     `json:"name" gorm:"column:name;"`
	Slug          string     `json:"slug" gorm:"column:slug;"`
	Type          string     `json:"type" gorm:"column:type;"`
	Link          string     `json:"link" gorm:"column:link;"`
	HasReport     int        `json:"has_report" gorm:"column:has_report;"`
	ReportMessage string     `json:"report_message" gorm:"column:report_message;"`
	CreatedAt     *time.Time `json:"created_at" gorm:"column:created_at;"`
	UpdatedAt     *time.Time `json:"updated_at" gorm:"column:updated_at;"`
}

type Regions struct {
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

type Studios struct {
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
