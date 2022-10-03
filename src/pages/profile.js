import React from "react";
import { HeaderContainer } from "../containers/header";
import HeadCon from "../containers/header";
import { useParams } from "react-router-dom";

export default function Profile() {
    const {userid} = useParams();
    return (
        <>
                <HeadCon/>
                <div>this is {userid} page</div>
        </>
    )
}