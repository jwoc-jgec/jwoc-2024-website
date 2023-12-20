// import { Html } from "@react-email/html"
// import logo from "@/assets/jwoc_logos/favicon.png";
// import Image from "next/image";
import { info } from "@/utils/mailer";

// const verificationMail = ({otp} : any) => {
//     return (
//         <Html>
//             <head>
//                 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//                 <title>Verify your email</title>
//             </head>

//             <body>
//                 <div className="font-sans bg-gray-100 min-h-screen p-8">
//                     <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
//                         <div className="text-center mb-8">
//                         <img
//                             src="https://www.jwoc.tech/_next/static/media/jwoc-2024.652c49b8.svg"
//                             alt="JWoC-2k24"
//                             className="mx-auto mb-4"
//                         />
//                         <h1 className="text-2xl font-bold">Verification Code</h1>
//                         <p className="text-gray-600">Please use the verification code below to verify your email Id.</p>
//                         </div>
//                         <div className="text-center">
//                         <p className="text-4xl font-semibold text-blue-600">{otp}</p><br/>
//                         <p className="text-gray-600">If you didn’t request this, you can ignore this email.</p>
//                         <p className="text-gray-600">Thanks,<br />JWoC-2k24</p>
//                         </div>
//                     </div>
//                 </div>
//             </body>
//         </Html>
//     );
// };


// const verificationMail = ({otp} : info) => {
//     const containerStyles: React.CSSProperties = {
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: '#f4f4f4',
//         margin: 0,
//         padding: 0,
//         width: '100%',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       };
    
//       const emailStyles: React.CSSProperties = {
//         maxWidth: '600px',
//         width: '100%',
//         minHeight: '50vh',
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//       };
    
//       const logoStyles: React.CSSProperties = {
//         width: '100px',
//         marginBottom: '20px',
//       };
    
//       const otpStyles: React.CSSProperties = {
//         fontSize: '36px',
//         color: '#007bff',
//         fontWeight: 'bold',
//         margin: '20px 0',
//       };
    
//       return (
//         <Html>
//             <head>
//                 <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//                 <title>Verify your email</title>
//             </head>

//             <body>
//                 <div style={containerStyles}>
//                     <div style={emailStyles}>
//                         <Image
//                             src={`${logo}`}
//                             alt="JWoC-2k24"
//                             style={logoStyles}
//                         />
//                         <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Verification Code</h1>
//                         <p style={{ color: '#666', marginBottom: '20px' }}>
//                             Please use the verification code below to verify your email Id.
//                         </p>
//                         <p style={otpStyles}>{otp}</p>
//                         <p style={{ color: '#666', marginBottom: '20px' }}>
//                             If you didn’t request this, you can ignore this email.
//                         </p>
//                         <p style={{ color: '#666' }}>
//                             Thanks,<br />
//                             JWoC-2k24
//                         </p>
//                     </div>
//                 </div>
//             </body>
//         </Html>
//       );
// };

const verificationMail = ({ otp }: info) => {
    return (
        `
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Verify your Email for JWoC-2k24</title>
            </head>

            <body
                style="
                    font-family: Helvetica, Arial, sans-serif;
                    margin: 0px;
                    padding: 0px;
                    background-color: #ffffff;
                "
            >
                <table
                    role="presentation"
                    style="
                        width: 100%;
                        border-collapse: collapse;
                        border: 0px;
                        border-spacing: 0px;
                        font-family: Arial, Helvetica, sans-serif;
                        background-color: rgb(239, 239, 239);
                    "
                >
                    <tbody>
                        <tr>
                            <td
                                align="center"
                                style="
                                    padding: 1rem 2rem;
                                    vertical-align: top;
                                    width: 100%;
                                "
                            >
                                <table
                                    role="presentation"
                                    style="
                                        max-width: 600px;
                                        border-collapse: collapse;
                                        border: 0px;
                                        border-spacing: 0px;
                                        text-align: left;
                                    "
                                >
                                    <tbody>
                                        <tr>
                                            <td style="padding: 40px 0px 0px">
                                                <div style="text-align: left">
                                                    <div style="padding-bottom: 20px">
                                                        <img
                                                            src="https://www.jwoc.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjwoc-2024.693e9e27.png&w=128&q=75"
                                                            alt="JWoC-2k24"
                                                            style="width: 56px"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    style="
                                                        padding: 20px;
                                                        background-color: rgb(
                                                            255,
                                                            255,
                                                            255
                                                        );
                                                    "
                                                >
                                                    <div
                                                        style="
                                                            color: rgb(0, 0, 0);
                                                            text-align: left;
                                                        "
                                                    >
                                                        <h1 style="margin: 1rem 0">
                                                            Verification code
                                                        </h1>
                                                        <p style="padding-bottom: 16px">
                                                            Please use the verification
                                                            code below to verify your email Id.
                                                        </p>
                                                        <p style="padding-bottom: 16px; color: rgb(47, 47, 199)">
                                                            <strong
                                                                style="font-size: 130%"
                                                                >${otp}</strong
                                                            >
                                                        </p>
                                                        <p style="padding-bottom: 16px">
                                                            If you didn’t request this,
                                                            you can ignore this email.
                                                        </p>
                                                        <p style="padding-bottom: 16px">
                                                            Thanks,<br />
                                                            JWoC-2k24 team
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    style="
                                                        padding-top: 20px;
                                                        color: rgb(153, 153, 153);
                                                        text-align: center;
                                                    "
                                                >
                                                    <p style="padding-bottom: 16px">
                                                        JGEC Winter of Code
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
        `
    );
}

export default verificationMail;