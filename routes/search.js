const dataScraper = require("./../dataScraper");
exports.searchController = async (req, res) => {
  const searchQuery = "nebula meaning";
  // //Top google links ------------------------------------------>
  let links = await dataScraper.googleLinkScraper(searchQuery);
  res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Search Results</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
    </head>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
    
    
        a {
            text-decoration: none;
            color: black;
        }
    
        .card {
            border: none;
        }
    
        .image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 15px;
            float: right;
            margin-top: 26px;
            margin-right: 20px;
        }
    
        .image-item img {
            max-width: 100%;
            width: 100%;
            height: 130px;
        }
    
        .box {
            width: 75%;
            height: 70%;
            background-color: white;
            padding: 4px;
            margin: 6px;
        }
    </style>
    
    <body>
    
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style="font-family: 'Rubik', sans-serif; font-size: 25px;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="font-weight: bold; font-size: 38px;">LOGO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./history.html">History</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search" action="./search.html" id="formSubmit">
                        <input class="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"
                            style="font-family: 'Merriweather', serif;">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                                class="material-icons">search</i></button>
                    </form>
                </div>
            </div>
        </nav>
    
        <div class="col" style="display: inline-block;">
            <div class="card mx-2 mb-2 mt-4 pt-3 "
                style="width: 120%; min-height: 300px; max-height: max-content; background-color: rgba(139, 180, 197, 0.836); ">
                <div class="card-body">
                    <h5 class="card-title" style="color: beige; font-family: 'Merriweather', serif; font-size: 36px;">Google
                        Results</h5>
                    <p class="card-text mt-3" style="font-family: 'Merriweather', serif;">asfsdfwfsdfsdfsdfsfsdf</p>
                    <div class="row" ">
                        <a href=" #" class="card-link" style="margin-left:10px;"
                        Card link</a>
                        <a href="#" class="card-link">Another link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
    
        </div>
        <div class="image-grid">
            <div class="image-item">
                <img src="1st.jpg" alt="Image 1">
            </div>
            <div class="image-item">
                <img src="3rd.jpg" alt="Image 2">
            </div>
            <div class="image-item">
                <img src="4th.jpg" alt="Image 3">
            </div>
            <div class="image-item">
                <img src="5th.jpg" alt="Image 4">
            </div>
        </div>
    
        <div class="card mx-1 mb-2 pt-3"
            style="width: 33%; min-height: 100vw; max-height:max-content;  float: right; background-color: rgba(139, 180, 197, 0.836);">
            <div class="card-body">
                <h5 class="card-title" style="font-family: 'Merriweather', serif; color: beige; font-size: 36px;">NEWS</h5>
                <p class="card-text" style="font-family: 'Merriweather', serif;">Some quick example text to build on the
                    card title and make up the bulk of the card's content.</p>
                <div class="row" style="margin: auto;">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
    
            </div>
        </div>
        <div class="row">
            <div class="card mx-2 ml-2 mt-2 py-3" style="width: 48%; background-color: rgba(139, 180, 197, 0.836);">
                <div class="card-body">
                    <h5 class="card-title" style="font-family: 'Merriweather', serif; color: beige; font-size: 36px;">
                        Related PDFs</h5>
                    <div class="row" style="margin: auto;">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
    
            <div class="card mx-2 ml-2 mt-2 py-3" style="width: 48%; background-color: rgba(139, 180, 197, 0.836);">
                <div class="card-body">
                    <h5 class="card-title" style="font-family: 'Merriweather', serif; color: beige; font-size: 36px;">
                        Research Papers</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <div class="row" style="margin: auto;">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="card mx-2 ml-2 mt-2 py-3"
            style="width: 65%; background-color: rgba(139, 180, 197, 0.836); min-height: 350px; max-height: max-content;">
            <div class="card-body">
                <h5 class="card-title" style="font-family: 'Merriweather', serif; color: beige; font-size: 36px;">Youtube
                    Links</h5>
                
                
                    <iframe width="150" height="150" src="https://www.youtube.com/embed/_kftb3baRi8"
                    title="Top 15+ Best Upcoming Mobile Phone Launches⚡March 2023" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                    <div class="box" style="float: right; height: 150px; width: 78%; margin-top: 3px; background-color: black; color: white;">
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reiciendis ipsa doloribus animi saepe
                    earum, hic cum odit dignissimos quis ad perferendis, nam, mollitia nihil. Et, facilis? Ipsum
                    exercitationem nam nisi hic molestiae?</p>
                </div>
                
    
            </div>
        </div>
    
        <div class="card mx-2 ml-2 mt-2 py-3"
            style="width: 65% ; min-height: 100vw;max-height: max-content; background-color: rgba(139, 180, 197, 0.836);">
            <div class="card-body">
                <h5 class="card-title" style="font-family: 'Merriweather', serif; color: beige; font-size: 36px;">Additional
                    Information
                </h5>
    
                <div class="container">
                    <img src="4th.jpg" alt="loading" style="width: 170px; height: 170px; float: right;">
                    <div class="box">
                        <h3>Website Name</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro necessitatibus
                            aperiam distinctio! Quam dolorem accusantium minus amet nihil doloribus blanditiis qui
                            distinctio aliquam at sit, maxime quae assumenda officiis laboriosam consequuntur tempora unde
                            facilis temporibus consectetur recusandae perferendis enim est. Saepe, quis.
                        </p>
                    </div>
    
                    <img src="5th.jpg" alt="loading" style="width: 170px; height: 170px; float: right;">
                    <div class="box">
                        <h3>Website Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellat sunt culpa fugiat
                            nobis quas earum maxime, unde nam quidem quo alias quisquam aliquam, sint dolor iusto eveniet
                            provident ut doloremque aliquid, expedita possimus totam aut! Totam alias ex repellat doloremque
                            excepturi. Vitae, minus!
                        </p>
    
                    </div>
                    <img src="3rd.jpg" alt="loading" style="width: 170px; height: 170px; float: right;">
                    <div class="box">
                        <h3>Website Name</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat neque perspiciatis
                            ipsam illo, expedita deleniti voluptates fuga velit! Nemo quia tenetur dolores recusandae
                            laudantium molestias, impedit sapiente molestiae ducimus sed repellat, numquam ipsum aliquam et
                            asperiores explicabo eius possimus enim magnam repudiandae dolorum?
                        </p>
                    </div>
    
                    <img src="7th.jpg" alt="loading" style="width: 170px; height: 170px; float: right;">
                    <div class="box">
                        <h3>Website Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus animi alias praesentium
                            consequuntur temporibus velit asperiores libero fugit ad! Dolor facilis expedita tenetur
                            incidunt similique autem quasi minus, inventore facere nobis beatae alias quis nemo hic
                            voluptas, dolore eos qui, quibusdam illum. Error.
                        </p>
                    </div>
                </div>
    
                <script>
    
                    const form = document.querySelector('#formSubmit');
    
                    form.addEventListener("submit", (e) => {
                        console.log("clicked");
                        const search = document.querySelector('#search').value;
                        console.log(search);
    
                    }) 
                </script>
    </body>
    
    </html>`);
};
