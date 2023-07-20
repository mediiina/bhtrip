import { auth } from '../firebase';


let error = null;

const login = async (email, password) => {
    error = null;

    try {
        const res = await auth.signInWithEmailAndPassword (email, password);
        error = null;
        console.log(res.user)

        return res
    }
        
        catch (err) {
            error = err.message;
            console.log(error);

        }
    };

    const userLogin = () => {
        return {error, login};
    }; 

    export default userLogin;
