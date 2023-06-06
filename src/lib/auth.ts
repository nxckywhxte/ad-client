import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      id: '1',
      type: 'credentials',
      name: 'Войти в систему',
      credentials: {
        username: {
          label: 'Никнейм',
          type: 'text',
          placeholder: 'nw',
        },
        password: {
          label: 'Введите пароль',
          type: 'password',
        },
      },
      async authorize(credentials) {
        return {
          id: 'dfdsfdsf',
          name: 'Белоногов Никита Иванович',
          username: 'nw',
          image: '',
          email: 'text@gmail.com',
          role: {
            id: 'dfdsfdsfsdfsd',
            name: 'Администратор',
          },
          group: [
            {
              id: 'dsfsdfsdfsd',
              name: '71-61',
            },
          ],
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', {
        session,
        token,
      })
      return {
        ...session,
        user: {
          ...session.user,
        },
      }
    },
  },
}
