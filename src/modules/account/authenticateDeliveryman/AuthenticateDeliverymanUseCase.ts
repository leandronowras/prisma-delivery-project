import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface iAuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({username, password}: iAuthenticateDeliveryman) {
    const deliveryman = await prisma.clients.findFirst({
      where: {
        username: username
      }
    })

    if (!deliveryman) {
      throw new Error('Username or password invalid')
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if(!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    const token = sign({username}, '00aac3a0bbb02848bfcf4c02b4e45fe8', {
      subject: deliveryman.id,
      expiresIn: '1d'
    }) 
    
    return token
  }
}