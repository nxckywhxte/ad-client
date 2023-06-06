declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      image: string
      username: string
      role: Role
      group: Group[]
    }
  }
  interface Role {
    id: string
    name: string
  }

  interface Group {
    id: string
    name: string
  }
}
