"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";


export default function VerifyEmailPage() {

    const searchParams = useSearchParams();

    const verifyUserEmail = async (urlToken: string, userType: string) => {
        try {
            await fetch('/api/verifyEmail', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    verifyToken: urlToken,
                    type: userType
                }),
            })
            
        } catch (error:any) {
            console.log(error.reponse.data); 
        }

    }

    useEffect(() => {
        const urlToken = searchParams.get("token") || "";
        const userType = searchParams.get("user") || "";
        verifyUserEmail(urlToken, userType);
    }, []);

    return(
        <div> scmmlkmskdmckjmdkjcx
        </div>
    )

}