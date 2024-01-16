package gin_movie

import (
	"backend/common"
	"backend/modules/movie/business"
	"backend/modules/movie/model"
	"backend/modules/movie/storage"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetListMovie(db *gorm.DB) func(*gin.Context) {
	return func(c *gin.Context) {
		var paging common.Paging
		var filter model.Filter

		// Paging params
		if err := c.ShouldBind(&paging); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})

			return
		}

		paging.Process()

		// Filter params
		if err := c.ShouldBindQuery(&filter); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})

			return
		}

		// store and business handler
		store := storage.NewSQLStore(db)
		bsn := business.NewGetListMovieBusiness(store)

		data, err := bsn.GetMovies(c.Request.Context(), &filter, &paging)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})

			return
		}

		c.JSON(http.StatusOK, common.NewSuccessResponse(data, paging, nil))

	}
}
