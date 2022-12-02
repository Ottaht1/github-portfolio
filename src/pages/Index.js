import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();

    const handleOnLoad = () => {
        navigate("/repos/home");
    }

    useEffect(() => {
        handleOnLoad()
    })

    return (
        <div>
        </div>
    );
}

export default Index;