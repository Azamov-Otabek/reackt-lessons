import "./style.scss";

const index = () => {
    return (
        <header>
            <div className="container">
                <div className="header-logo">
                    <img src="https://c4.wallpaperflare.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg" alt="logo" />
                </div>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default index;