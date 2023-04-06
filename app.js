// Memanggil Modul yang diperlukan
const jwt = require("jsonwebtoken")
const fs = require("fs")
const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))

// Routing untuk get token
app.post("/login-user", (req, res) => {
  const { username, password } = req.body

  const readUser = fs.readFileSync("./data/users.json", "utf-8")
  const parsingtoJSON = JSON.parse(readUser)

  const userFound = parsingtoJSON.find((user) => user.username === username)
  if (userFound && userFound.password === password) {
    res.send("Login Berhasil.")
    const data = {
      username: userFound.username,
      password: userFound.password,
    }
    jwt.sign(
      {
        data: data,
      },
      "secret",
      (err, token) => {
        console.log(`Token Anda: ${token}`)
      }
    )
  } else if (userFound && userFound.password !== password) {
    res.send("Password Salah")
  } else {
    res.send("Data tidak valid!")
  }
})

//  verifikasi
const verifikasi = (req, res, next) => {
  let getHeader = req.headers["auth"]
  if (typeof getHeader !== "undefined") {
    req.token = getHeader
    next()
  } else {
    res.sendStatus(403)
  }
}

// Routing data teachers
app.get("/get-teachers", verifikasi, (req, res) => {
  jwt.verify(req.token, "secret", (err, auth) => {
    if (err) {
      res.sendStatus(403)
    } else {
      const users = fs.readFileSync("./data/teachers.json", "utf-8")
      const parsingtoJSON = JSON.parse(users)
      res.json(parsingtoJSON)
    }
  })
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
