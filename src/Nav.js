
export default function Nav() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href={`/`}>Home</a></li>
                    <li className="breadcrumb-item"><a href={`/criar`}>criar</a></li>
                </ol>
            </nav>
        </>
    );
}