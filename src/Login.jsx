import Footer from "./Footer";
import Form from "./Form"
import Links from "./Links"
import logo from "../src/assets/login-logo.png"

function Login(){
    return <>
        <section className="login">
            <img src={logo} alt=""></img>
            <Form />
            <Links />
            <button className="create">Create an account</button>
            <Footer />
        </section>
    </>
}

export default Login;