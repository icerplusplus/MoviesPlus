package gin_movie

import (
	"backend/common"
	"backend/modules/movie/business"
	"backend/modules/movie/storage"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetListBanner(db *gorm.DB) func(*gin.Context) {
	return func(c *gin.Context) {

		// store and business handler
		store := storage.NewSQLStore(db)
		bsn := business.NewGetBannersBusiness(store)

		data, err := bsn.GetBanners(c.Request.Context())

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})

			return
		}

		c.JSON(http.StatusOK, common.SimpleSuccessResponse(data))

	}
}
