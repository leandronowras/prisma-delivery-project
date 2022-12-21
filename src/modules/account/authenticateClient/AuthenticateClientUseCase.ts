import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface iAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({username, password}: iAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username: username
      }
    })

    if (!client) {
      throw new Error('Username or password invalid')
    }

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    const token = sign({username}, '00aac3a0bbb02848bfcf4c02b4e45fe8', {
      subject: client.id,
      expiresIn: '1d'
    }) 
    
    return token
  }
}