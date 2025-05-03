import React from "react"
import {
    useLoaderData,
    useActionData,
    Form,
    redirect,
    useNavigation
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const redirectTo = new URL(request.url).searchParams.get("redirectTo")

    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
    const response = redirect(redirectTo || "/host");
    response.body = true;
    return response;
    }catch(error){
        return error
    }
    
}

export default function Login() { 
    const error = useActionData();
    const message = useLoaderData();
    const navigate = useNavigation();
    
    

    return (
        <div className="login">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}

            <Form method="post" replace className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigate.status === "submitting"}
                >
                    {navigate.status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}