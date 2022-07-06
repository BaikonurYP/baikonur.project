import { RequestHandler } from 'express'
import cookieParserMiddleware from 'cookie-parser'
import { auth } from './authMiddleware'

const cookieParser: RequestHandler = cookieParserMiddleware()

export const middlewares = [cookieParser, auth]
