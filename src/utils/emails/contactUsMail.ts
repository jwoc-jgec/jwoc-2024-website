import { info } from '@/utils/mailer'

const contactUsMail = ({ senderName, senderEmail, senderMessage }: info) => {
    return (
        `
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <title>Contact Us</title>
                </head>

                <body
                    style="
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    "
                >
                    <table
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="background-color: #f4f4f4"
                    >
                        <tr>
                            <td>
                                <table
                                    align="center"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="600"
                                    style="
                                        margin: 20px auto;
                                        background-color: #fff;
                                        border-radius: 5px;
                                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                    "
                                >
                                    <tr>
                                        <td style="padding: 20px">
                                            <img
                                                src="https://jwoc-5.vercel.app/_next/static/media/jwoc-2024.652c49b8.svg"
                                                alt="JWoC-2k24"
                                                style="
                                                    display: block;
                                                    margin: 0 auto 20px;
                                                    max-width: 40%;
                                                "
                                            />
                                            <h2 style="margin-bottom: 20px; color: #333">
                                                Contact Us / Feedback
                                            </h2>
                                            <table
                                                cellpadding="5"
                                                cellspacing="0"
                                                width="100%"
                                            >
                                                <tr>
                                                    <td
                                                        width="100"
                                                        align="right"
                                                        style="font-weight: bold"
                                                    >
                                                        Sender Name:
                                                    </td>
                                                    <td>${senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        width="100"
                                                        align="right"
                                                        style="font-weight: bold"
                                                    >
                                                        Email Address:
                                                    </td>
                                                    <td>${senderEmail}</td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        width="100"
                                                        align="right"
                                                        style="font-weight: bold"
                                                    >
                                                        Message:
                                                    </td>
                                                    <td>
                                                        ${senderMessage}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        `
    )
}


export default contactUsMail;