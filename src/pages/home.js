import React from "react";
import { HeaderContainer } from "../containers/header";
import HeadCon from "../containers/newheader";

export default function Home({isLogin,...rest}) {
    console.log(`home ${isLogin}`);
    return (
        <>
                <HeadCon/>
                <div>this is {isLogin}</div>
        </>
    )
}