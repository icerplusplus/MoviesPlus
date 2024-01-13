package common

import (
	"errors"
	"net/http"
)

type AppError struct {
	StatusCode int    `json:"status_code"`
	RootErr    error  `json:"-"`
	Message    string `json:"message"`
	Log        string `json:"log"`
	Key        string `json:"error_key"`
}

func (e *AppError) RootError() error {
	if err, ok := e.RootErr.(*AppError); ok {
		return err.RootError()
	}

	return e.RootErr
}

func (e *AppError) Error() string {
	return e.RootError().Error()
}

func NewFullErrorResponse(statusCode int, root error, msg, log, key string) *AppError {
	return &AppError{
		StatusCode: statusCode,
		RootErr:    root,
		Message:    msg,
		Log:        log,
		Key:        key,
	}
}

func NewErrorResponse(root error, msg, log, key string) *AppError {
	return &AppError{
		StatusCode: http.StatusBadRequest,
		RootErr:    root,
		Message:    msg,
		Log:        log,
		Key:        key,
	}
}

func Unauthorized(root error, msg, key string) *AppError {
	return &AppError{
		StatusCode: http.StatusUnauthorized,
		RootErr:    root,
		Message:    msg,
		Key:        key,
	}
}

func ErrorDB(err error) *AppError {
	return NewFullErrorResponse(http.StatusInternalServerError, err, "Something went wrong with database", err.Error(), "DB_ERROR")
}

func ErrorInternalServerError(err error) *AppError {
	return NewFullErrorResponse(http.StatusInternalServerError, err, "An internal server error occurred, please contact the system administrator", err.Error(), "INTERNAL_SERVER_ERROR")
}

func ErrorNotFound(err error) *AppError {
	return NewFullErrorResponse(http.StatusNotFound, err, "The requested resource could not be found", err.Error(), "NOT_FOUND_ERROR")
}

func ErrorForbidden(err error) *AppError {
	return NewFullErrorResponse(http.StatusForbidden, err, "The requested action was forbidden", err.Error(), "FORBIDDEN_ERROR")
}

func ErrorUnsupportedMediaType(err error) *AppError {
	return NewFullErrorResponse(http.StatusUnsupportedMediaType, err, "The request is using an unknown content type", err.Error(), "UNSUPORTED_MEDIA_TYPE_ERROR")
}

func ErrorConflict(err error) *AppError {
	return NewFullErrorResponse(http.StatusConflict, err, "The resource could not be created due to a conflict", err.Error(), "CONFLICT_ERROR")
}

// ErrRecordNotFound is used to make our application logic independent of other libraries errors
var ErrorRecordNotFound = errors.New("Record not found")
