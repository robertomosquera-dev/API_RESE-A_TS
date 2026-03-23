export const MessageError = {
  MOVIE_NOT_FOUND:          "La película no fue encontrada",
  MOVIE_ALREADY_EXISTS:     "La película ya está registrada",
  MOVIE_INVALID_YEAR:       "El año de la película no es válido",
  MOVIE_INVALID_DURATION:   "La duración de la película no es válida",
  REVIEW_NOT_FOUND:         "La reseña no fue encontrada",
  REVIEW_ALREADY_EXISTS:    "Ya tienes una reseña para esta película",
  REVIEW_NOT_OWNER:         "No puedes modificar una reseña que no es tuya",
  REVIEW_INVALID_SCORE:     "El puntaje debe estar entre 1 y 10",
  REVIEW_EMPTY_CONTENT:     "El contenido de la reseña no puede estar vacío",
  USER_NOT_FOUND:           "El usuario no fue encontrado",
  USER_ALREADY_EXISTS:      "El correo ya está registrado",
  USER_INVALID_CREDENTIALS: "Correo o contraseña incorrectos",
  USER_INACTIVE:            "La cuenta está desactivada",
  ACTOR_NOT_FOUND:          "El actor no fue encontrado",
  ACTOR_ALREADY_EXISTS:     "El actor ya está registrado",
  ACTOR_ALREADY_IN_MOVIE:   "El actor ya está asociado a esta película",
  ACTOR_NOT_IN_MOVIE:       "El actor no pertenece a esta película",
  GENRE_NOT_FOUND:          "El género no fue encontrado",
  GENRE_ALREADY_EXISTS:     "El género ya está registrado",
  GENRE_ALREADY_IN_MOVIE:   "El género ya está asociado a esta película",
  AUTH_TOKEN_MISSING:       "Token de autenticación requerido",
  AUTH_TOKEN_INVALID:       "Token inválido o expirado",
  AUTH_FORBIDDEN:           "No tienes permisos para realizar esta acción",
  INVALID_ID:               "El ID proporcionado no es válido",
  INVALID_PAGINATION:       "Los parámetros de paginación no son válidos",
  INTERNAL_ERROR:           "Ocurrió un error interno, intenta más tarde",
} as const;

export type MessageErrorType = typeof MessageError[keyof typeof MessageError]

 