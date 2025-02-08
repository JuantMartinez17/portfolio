require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mailjet = require("node-mailjet").connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY
);

const app = express()
app.use(express.json())
app.use(cors())


app.post("/send-email", async (req, res) => {
    const { name, email, subject, body } = req.body;

    try {
        const request = await mailjet.post("send", { "version": "3.1" }).request({
            "Messages": [
                {
                    "From": {
                        "Email": email,
                        "Name": name
                    },
                    "To": [
                        {
                            "Email": process.env.EMAIL_TO,
                            "Name": "Juan Tomas Martinez"
                        }
                    ],
                    "Subject": subject,
                    "TextPart": body,
                    "HTMLPart": `<h3>${body}</h3>`
                }
            ]
        })
    }
})