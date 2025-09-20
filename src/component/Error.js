import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>OOPS! Page Not Found</h1>
            <h2>{err.status + " : " + err.statusText}</h2>
            <h3>{err.data}</h3> {/* err.data is coming from throw new Response in app.js file */}
        </div>
        
    )
}
export default Error;