import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string
}

export async function ensureAuthenticateDelivery(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if(!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, '00aac3a0bbb02848bfcf4c02b4e45fe8') as IPayload
    
    request.id_delivery = sub

    return next()
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token"
    })
  }
}