<!doctype html>
<html lang="pl" class="h-100">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Weather appliaction">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Piotr & Piotr">
    
    <!-- Bootstrap Library -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    <!-- /Bootstrap Library -->

    <title>Weather appliaction</title>

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    <!-- Custom styles -->
    <link href="style/cover.css" rel="stylesheet">
    <link href="style/input_search.css" rel="stylesheet">

    <!-- Scritps -->
    <script src="scripts/api.js" defer></script>
    <?php

    $baza=mysqli_connect("localhost","root","","drony");

    if (mysqli_connect_errno())

    {echo "Wystąpił błąd połączenia z bazą";}

    $wynik = mysqli_query($baza,"SELECT * FROM imprezy");



    mysqli_close($baza);

    ?> 
  
  </head>
  
  <body class="d-flex h-100 text-center text-white">
    
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      
      <header class="mb-auto">
        <div>
          <a class="navbar-brand float-md-start mb-0" href="#">
            <img alt="Brand" src="images/CanIFly-logo1.png">
          </a>
          
          <!-- <h3 class="float-md-start mb-0">Cover</h3> -->
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            <a class="nav-link" href="imprezy.php">Imprezy</a>
          </nav>
        </div>
      </header>

      <main class="px-3">
      <?php
        echo "<ol>";
        while($row = mysqli_fetch_array($wynik)){
        echo "<li>". " Nazwa imprezy :  " .$row['Nazwa'] . "</br> Gdzie :  " . $row['Miasto']. "<br> Impreza odbędzie się w dniu : " . $row['Data']. "<br> W programie : " . $row['Opis']."</li>"; 
        echo "<br>";
        }
        echo "<ol>";
        ?>
      </main>

      <footer class="mt-auto text-white-50">
        <p>Website create by P&P for University in Płock</p>
      </footer>
    </div>


    
  </body>
</html>