import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { status, statusText } = useRouteError();
    return (
        <div className="pageNotFound">
            <section className="contentWrapper">
                <span className="bigText">{status || 404}</span>
                <span className="smallText">{statusText || "Page not found!"}</span>
            </section>
        </div>
    );
};

export default ErrorPage;