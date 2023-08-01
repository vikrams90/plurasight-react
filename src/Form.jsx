function Form(){
    return <>
     <form >
            <div className="ae">
                <label className="email">Email address</label>
                <input type="email" class="eml" />
            </div>
            <div className="be">
                <label className="password">Password</label>
                <input type="password" class="pass" />
            </div>
            <button className="signin">Sign In</button>
        </form>
    </>
}

export default Form