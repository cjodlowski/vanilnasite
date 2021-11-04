import React from 'react';

const HomePage = () => {
    return(
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link href="./index.css" rel="stylesheet"></link>
</head>
<body class= "rainbow-anim">
    <div class="container mx-2 py-3">
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h2>Do you remember famous tumblr post?</h2>
            <h2>You know the one...</h2>
            <image src="john.jpg"></image>

            <h2>...</h2>
            <h2>...Okay maybe you didn't know the one.</h2>
            <h2></h2>
            <h2></h2>
            <image src="VANILNA.jpg"></image>
        </div>
    </div>
</body>
    )
}