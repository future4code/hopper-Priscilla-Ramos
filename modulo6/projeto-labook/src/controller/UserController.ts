export class UserController 

try {
    let message = "Success!"
    const { name, email, password } = req.body

    if (!name || !email || !password) {
       res.statusCode = 406
       message = '"name", "email" and "password" must be provided'
       throw new Error(message)
    }

    const id: string = generateId()

    await UserDataBase.connection('labook_users')
       .insert({
          id,
          name,
          email,
          password
       })

    res.status(201).send({ message })

 } catch (error:any) {
    res.statusCode = 400
    let message = error.sqlMessage || error.message
    res.send({ message })
 }
})