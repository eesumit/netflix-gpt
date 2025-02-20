const checkValidData = (email, password) =>{
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!emailValidate) return "Email is Not valid.";
    if(!passwordValidate) return "Password is Not valid.";
    return null;
}

export default checkValidData;