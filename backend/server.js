require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Mailjet = require("node-mailjet")

const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY)

const app = express()
app.use(express.json())
app.use(cors())


app.post("/send-email", async (req, res) => {
    const { name, email, subject, body } = req.body;

    try {
        const request = await mailjet.post("send", { "version": "v3.1" }).request({
            "Messages": [
                {
                    "From": {
                        "Email": process.env.MAILJET_FROM_EMAIL,
                        "Name": name
                    },
                    "To": [
                        {
                            "Email": process.env.MAILJET_EMAIL_TO,
                            "Name": "Juan Tomas Martinez"
                        }
                    ],
                    "Subject": subject,
                    "TextPart": `Nuevo mensaje de ${name} <${email}>: ${body}`,
                    "HTMLPart": `<h3>Nuevo mensaje de ${name}, email ${email}</h3><br/><p>${body}</p>`
                }
            ]
        })
        res.status(200).json({ success: true, message: "Mail sended correctly" })
    } catch(err) {
        console.error("Error sending email", err)
        res.status(500).json({ success: false, message: "Error sending email" })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})