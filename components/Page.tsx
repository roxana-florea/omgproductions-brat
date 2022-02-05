import Nav from "./Nav";

export default function Page({children}) {

    return <div style={{border: '2px solid red'}}>
        <Nav/>
       {children}
    </div>
}