import { info } from "@/utils/mailer";

const projectSelectionMail = ({userType, senderName, userName} : info) => {
    if(userType === "SELECTED") {
        return (
            `
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <title>JGEC Winter of Code Welcome</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                            color: #000;
                        }
            
                        .container {
                            background-color: #f4f4f4;
                        }
            
                        .email-content {
                            background-color: #ffffff;
                            margin: 20px auto;
                            border-radius: 8px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            padding: 40px 30px;
                            text-align: left;
                        }
            
                        h2 {
                            color: #333;
                            margin-bottom: 20px;
                        }
            
                        p {
                            line-height: 1.6;
                            margin-bottom: 20px;
                        }
            
                        a {
                            text-decoration: none;
                            color: #1dacb6;
                        }
                    </style>
                </head>
            
                <body>
                    <table cellpadding="0" cellspacing="0" width="100%" class="container">
                        <tr>
                            <td>
                                <table
                                    align="center"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="600"
                                    class="email-content"
                                >
                                    <tr>
                                        <td style="text-align: left">
                                            <!-- Logo Placeholder -->
                                            <img
                                                src="https://www.jwoc.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjwoc-2024.693e9e27.png&w=128&q=75"
                                                alt="JWoC-2k24"
                                                style="
                                                    max-width: 100px;
                                                    margin-bottom: 20px;
                                                "
                                            />
            
                                            <h2>Congratulations ${senderName}!</h2>
            
                                            <p>
                                                JGEC Winter of Code 2K24 extends a warm
                                                welcome to you. We are elated to share that
                                                you have been SELECTED as a MENTOR for your
                                                project
                                                <strong style="color: #005000"
                                                    >${userName}</strong
                                                >
                                                in this coding extravaganza. We look forward
                                                to your active participation in the event
                                                and inculcating the joy of open-source
                                                contribution among the budding developers.
                                            </p>
            
                                            <p style="color: #800080; margin-bottom: 20px">
                                                <a
                                                    href="https://discord.gg/WhEtft8V"
                                                    target="_blank"
                                                    >Join our Discord Community</a
                                                >
                                            </p>
            
                                            <p>
                                                Also, ask or mention to organizers after you
                                                join our server. We will need to assign you
                                                your
                                                <strong style="color: #f1c232"
                                                    >MENTOR</strong
                                                >
                                                role.
                                            </p>
            
                                            <p>
                                                All kinds of event communication and
                                                official announcements will be done on the
                                                Discord server. We request you to share your
                                                project details, including the GitHub link
                                                on your allotted channel as per the rules
                                                mentioned in the
                                                <a
                                                    href="https://drive.google.com/file/d/16CVVlnbns_xhp4V2zfzgJfpvk0OjvAIn/view?usp=drivesdk"
                                                    target="_blank"
                                                    >Mentor Manual</a
                                                >.
                                                <br />
                                                Kindly engage with the mentees during the
                                                Community Bonding Phase and solve any
                                                necessary doubts they may have.
                                            </p>
            
                                            <p>
                                                Your mentor badge is attached to the mail.
                                                You can also find it
                                                <a
                                                    href="https://drive.google.com/file/d/16HC8MYCJ5hVE15sdglRaTuc85qiGFnO4/view?usp=drivesdk"
                                                    target="_blank"
                                                    >here</a
                                                >.
                                                <br />
                                                Do share it on LinkedIn and do not forget to
                                                tag
                                                <a
                                                    href="https://www.linkedin.com/company/jwoc/"
                                                    target="_blank"
                                                    >JGEC Winter of Code</a
                                                >.
                                            </p>
            
                                            <p>
                                                If you have any queries with respect to the
                                                event or rules, feel free to reach out to us
                                                at
                                                <a href="mailto:contact.jwoc@gmail.com"
                                                    >contact.jwoc@gmail.com</a
                                                >.
                                            </p>
            
                                            <p>Kudos and All the Best!</p>
            
                                            <p>Team JWOC</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>            
          `
        );
    }
    else if(userType === "REJECTED") {
        return (
            `
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <title>JGEC Winter of Code - Project Rejection</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                            color: #000;
                        }

                        .container {
                            background-color: #f4f4f4;
                        }

                        .email-content {
                            background-color: #ffffff;
                            margin: 20px auto;
                            border-radius: 8px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            padding: 40px 30px;
                            text-align: center;
                        }

                        h2 {
                            color: #333;
                            margin-bottom: 20px;
                        }

                        p {
                            line-height: 1.6;
                            margin-bottom: 30px;
                            color: #333;
                        }

                        .logo {
                            max-width: 100px; /* Adjust the max-width as needed */
                            margin-bottom: 20px;
                        }
                    </style>
                </head>

                <body>
                    <table cellpadding="0" cellspacing="0" width="100%" class="container">
                        <tr>
                            <td>
                                <table
                                    align="center"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="600"
                                    class="email-content"
                                >
                                    <tr>
                                        <td style="text-align: left">
                                            <!-- Logo Placeholder -->
                                            <img
                                                src="https://www.jwoc.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjwoc-2024.693e9e27.png&w=128&q=75"
                                                alt="JWoC-2k24"
                                                class="logo"
                                            />

                                            <h2>Project Rejection Notification</h2>

                                            <p>
                                                Dear
                                                <strong>${senderName}</strong>,<br /><br />

                                                We hope this message finds you well. Thank
                                                you for your interest and effort in applying
                                                for JGEC Winter of Code 2K24.<br />

                                                After careful consideration, we regret to
                                                inform you that your project proposal for
                                                <strong>${userName}</strong> has not been
                                                selected for this year. The competition was
                                                tough, and unfortunately, we had to make
                                                difficult decisions.<br />

                                                We appreciate your dedication and the time
                                                you invested in preparing your proposal. The
                                                selection process was challenging due to the
                                                high quality of submissions.<br />

                                                Please don't be discouraged, as this
                                                decision does not reflect on the value of
                                                your work or your abilities. We encourage
                                                you to continue your contributions to open
                                                source and consider participating in future
                                                events.<br /><br />

                                                Thank you again for your interest in JGEC
                                                Winter of Code, and we wish you success in
                                                your future endeavors.<br /><br />

                                                Best regards,<br />

                                                JWoC-2k24
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
            `
        );
    }
}

export default projectSelectionMail;