import { useState } from "react";

const useAuth = () => {
    const [isAuth] = useState<boolean>(false);

    return {
        isAuth
    }
}

export default useAuth;
