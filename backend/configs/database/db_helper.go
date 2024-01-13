package database

import (
	"fmt"
	"log"
	"os"
	"sync"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Database interface {
	Close()
}

type database struct {
	db *gorm.DB
}

// DBInstance holds both *gorm.DB and Database interface.
type DBInstance struct {
	DB      *gorm.DB
	Manager Database
}

var (
	instance *DBInstance
	once     sync.Once
)

func (d *database) initialize() error {
	dns := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", os.Getenv("DB_USERNAME"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_HOST"), os.Getenv("DB_PORT"), os.Getenv("DB_DATABASE"))
	fmt.Println(dns)
	db, err := gorm.Open(mysql.Open(dns), &gorm.Config{})

	if err != nil {
		return fmt.Errorf("Failed to connect to the database: %w", err)
	}
	fmt.Println("Database connection initialized")
	d.db = db
	return nil
}

func GetInstance() *DBInstance {
	once.Do(func() {
		db := &database{}
		db.initialize()

		instance = &DBInstance{
			DB:      db.db,
			Manager: db,
		}
	})
	return instance
}

func (d *database) Close() {
	sqlDB, err := d.db.DB()

	if err != nil {
		log.Fatalln("Failed to close database", err)
		return
	}

	sqlDB.Close()
	fmt.Println("Database connection closed")
}
