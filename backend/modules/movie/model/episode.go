package model

import "time"

type Episode struct {
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

func (Episode) TableName() string { return "episodes" }

type StreamServers struct {
	Embed []Episode `json:"embed"`
	M3u8  []Episode `json:"m3u8"`
}
