import axios from "axios";
const { useState, useEffect } = require("react");
const { jwt } = require("../utilities/APIRoutes");

export const useToken = email => {
    const [token, setToken] = useState('');

    console.log(email);
    useEffect(() => {

        if (email) {
            const { data } = axios.post(jwt, {
                email
            });
            console.log(data);
            setToken(data);
        }


    }, [email]);

    return [token];
};