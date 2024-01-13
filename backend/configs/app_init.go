package configs

import (
	"log"

	"github.com/joho/godotenv"
)

func AppInit() {
	// environment loader
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}
