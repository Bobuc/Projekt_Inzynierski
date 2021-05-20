<?php
    require 'head.php';
?>

<header class="mb-auto">
  <div>
    <a class="navbar-brand float-md-start mb-0" href="#">
      <img alt="Brand" src="images/CanIFly-logo1.png">
    </a>

    <nav class="nav nav-masthead justify-content-center float-md-end">
      <a class="nav-link" href="index.php">Home</a>
      <a class="nav-link active" aria-current="page" href="party.php">Imprezy</a>
      <a class="nav-link" href="safe.php">Bezpieczeństwo</a>
    </nav>
  </div>
</header>

<main class="px-3">
  <h1>Imprezy lotnicze</h1>
  <p class="lead">
    <?php
      $servername = "localhost";
      $username = "root";
      $password = "";
      $dbname = "drony";

      // Create connection
      $conn = new mysqli($servername, $username, $password, $dbname);

      // Check connection
      if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
      }

      $query = mysqli_query($conn,"SELECT * FROM imprezy");
      
      while($row = mysqli_fetch_array($query)){
        echo  '<ul class="list-group party-ul">'
              .'<li class="list-group-item"><span style="color: #ffe030;"><b>'.$row['Nazwa'].'</b></span></li>'
              .'<li class="list-group-item">Miasto: <b>'.$row['Miasto'].'</b></li>'
              .'<li class="list-group-item">Dzień: <b>'.$row['Data'].'</b></li>'
              .'<li class="list-group-item">'.$row['Opis'].'</li>'
              .'</ul>'; 
      }
    
      $conn->close();
    ?>
  </p>
</main>

<?php
    require 'footer.php';
?>