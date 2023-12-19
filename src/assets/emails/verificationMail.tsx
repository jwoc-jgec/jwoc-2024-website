import { Html } from "@react-email/html"
import logo from "@/assets/jwoc_logos/favicon.png";
import Image from "next/image";
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


const verificationMail = ({otp} : info) => {
    const containerStyles: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const emailStyles: React.CSSProperties = {
        maxWidth: '600px',
        width: '100%',
        minHeight: '50vh',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      };
    
      const logoStyles: React.CSSProperties = {
        width: '100px',
        marginBottom: '20px',
      };
    
      const otpStyles: React.CSSProperties = {
        fontSize: '36px',
        color: '#007bff',
        fontWeight: 'bold',
        margin: '20px 0',
      };
    
      return (
        <Html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Verify your email</title>
            </head>

            <body>
                <div style={containerStyles}>
                    <div style={emailStyles}>
                        <Image
                            src={`${logo}`}
                            alt="JWoC-2k24"
                            style={logoStyles}
                        />
                        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Verification Code</h1>
                        <p style={{ color: '#666', marginBottom: '20px' }}>
                            Please use the verification code below to verify your email Id.
                        </p>
                        <p style={otpStyles}>{otp}</p>
                        <p style={{ color: '#666', marginBottom: '20px' }}>
                            If you didn’t request this, you can ignore this email.
                        </p>
                        <p style={{ color: '#666' }}>
                            Thanks,<br />
                            JWoC-2k24
                        </p>
                    </div>
                </div>
            </body>
        </Html>
      );
};


export default verificationMail;