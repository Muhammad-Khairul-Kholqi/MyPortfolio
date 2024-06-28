const CodeDataBlog = [
    {
        id: 1,
        code: {
        html: 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <!-- link CDN feather icon untuk navbar icon -->
    <script src="https://unpkg.com/feather-icons"></script>
    <!-- link css file -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <!-- custom logo sesuai keinginan bisa menggunakan image -->
        <div class="navbar-logo">
            <p>Logo.</p>
        </div>
        <div class="navbar-nav-link">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#porfolio">Portofolio</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="navbar-extra">
            <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
        </div>
    </nav>

    <!-- script untuk nyambungin ke file js -->
    <script src="script.js"></script>
    <!-- script feather icon -->
    <script>
      feather.replace();
    </script>
</body>
</html>`,

css: 
`body {
    background-color: #fff;
    margin: 0;
    padding: 0;
}

.navbar-logo p {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

.navbar .navbar-nav-link a {
    color: #000000;
    display: inline-block;
    font-size: 18px;
    font-family: 'Nunito Sans',
        sans-serif;
    font-weight: bold;
    margin: 0 1rem;
    text-decoration: none;
}

.navbar-nav-link {
    margin-top: 5px;
}

.navbar .navbar-nav-link a:hover {
    background-color: #0060FF;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.navbar .navbar-nav-link a::after {
    content: '';
    display: block;
    padding-bottom: 3px;
    background-color: #0060FF;
    transform: scaleX(0);
    transition: 0.2s linear;
}

.navbar .navbar-nav-link a:hover::after {
    transform: scaleX(0.7);
}

.navbar .navbar-extra a {
    color: black;
    margin: 0 0.5rem;
}

#hamburger-menu {
    display: none;
    width: 30px;
}

.navbar-extra img {
    width: 35px;
}



@media (max-width: 800px) {
    .navbar .navbar-nav-link a {
        margin: 0 0.8rem;
    }
}

@media (max-width: 758px) {
    #hamburger-menu {
        display: inline-block;
    }

    .navbar .navbar-nav-link {
        position: absolute;
        top: 100%;
        right: -100%;
        background-color: #ffffff;
        width: 16rem;
        height: 82vh;
        transition: 0.3s;
        border-top: 3px solid red;
        margin-top: -1px;
    }

    .navbar .navbar-nav-link.active {
        right: 0;
    }

    .navbar .navbar-nav-link a {
        color: black;
        display: block;
        margin: 1.5rem;
        padding: 0.5rem;
        font-size: 18px;
    }

    .navbar .navbar-nav-link a::after {
        transform-origin: 0 0;
    }

    .navbar .navbar-nav-link a:hover::after {
        transform: scaleX(0.2);
    }

    .navbar .navbar-nav-link a:hover {
        background-color: #0060FF;
    }

    .navbar .navbar-nav-link a::after {
        background-color: #0060FF;
        padding-bottom: 1px;
    }

    .navbar .navbar-nav-link a:hover {
        background-color: #0060FF;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

}`,

js: 
`const navbarNav = document.querySelector('.navbar-nav-link');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});`
        }
    },

    {
        id: 2,
        code: {
        html: 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <!-- link CDN feather icon untuk navbar icon -->
    <script src="https://unpkg.com/feather-icons"></script>
    <!-- link css file -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <!-- custom logo sesuai keinginan bisa menggunakan image -->
        <div class="navbar-logo">
            <p>Logo.</p>
        </div>
        <div class="navbar-nav-link">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#porfolio">Portofolio</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="navbar-extra">
            <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
        </div>
    </nav>

    <!-- script untuk nyambungin ke file js -->
    <script src="script.js"></script>
    <!-- script feather icon -->
    <script>
      feather.replace();
    </script>
</body>
</html>`,

css: 
`body {
    background-color: #fff;
    margin: 0;
    padding: 0;
}

.navbar-logo p {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

.navbar .navbar-nav-link a {
    color: #000000;
    display: inline-block;
    font-size: 18px;
    font-family: 'Nunito Sans',
        sans-serif;
    font-weight: bold;
    margin: 0 1rem;
    text-decoration: none;
}

.navbar-nav-link {
    margin-top: 5px;
}

.navbar .navbar-nav-link a:hover {
    background-color: #0060FF;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.navbar .navbar-nav-link a::after {
    content: '';
    display: block;
    padding-bottom: 3px;
    background-color: #0060FF;
    transform: scaleX(0);
    transition: 0.2s linear;
}

.navbar .navbar-nav-link a:hover::after {
    transform: scaleX(0.7);
}

.navbar .navbar-extra a {
    color: black;
    margin: 0 0.5rem;
}

#hamburger-menu {
    display: none;
    width: 30px;
}

.navbar-extra img {
    width: 35px;
}



@media (max-width: 800px) {
    .navbar .navbar-nav-link a {
        margin: 0 0.8rem;
    }
}

@media (max-width: 758px) {
    #hamburger-menu {
        display: inline-block;
    }

    .navbar .navbar-nav-link {
        position: absolute;
        top: 100%;
        right: -100%;
        background-color: #ffffff;
        width: 16rem;
        height: 82vh;
        transition: 0.3s;
        border-top: 3px solid red;
        margin-top: -1px;
    }

    .navbar .navbar-nav-link.active {
        right: 0;
    }

    .navbar .navbar-nav-link a {
        color: black;
        display: block;
        margin: 1.5rem;
        padding: 0.5rem;
        font-size: 18px;
    }

    .navbar .navbar-nav-link a::after {
        transform-origin: 0 0;
    }

    .navbar .navbar-nav-link a:hover::after {
        transform: scaleX(0.2);
    }

    .navbar .navbar-nav-link a:hover {
        background-color: #0060FF;
    }

    .navbar .navbar-nav-link a::after {
        background-color: #0060FF;
        padding-bottom: 1px;
    }

    .navbar .navbar-nav-link a:hover {
        background-color: #0060FF;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

}`,

js: 
`const navbarNav = document.querySelector('.navbar-nav-link');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});`
        }
    }
]

export default CodeDataBlog;