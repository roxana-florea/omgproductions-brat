import Nav from "./Nav";

export default function Page({children}: any) {

    return <div style={{border: '2px solid red'}}>
        <Nav/>
       {children}
    </div>
}