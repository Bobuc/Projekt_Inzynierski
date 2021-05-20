<?php
    require 'head.php';
    
?>
  
<header class="mb-auto">
  <div>
    <a class="navbar-brand float-md-start mb-0" href="#">
      <img alt="Brand" src="images/CanIFly-logo1.png">
    </a>

    <nav class="nav nav-masthead justify-content-center float-md-end">
      <a class="nav-link active" aria-current="page" href="index.php">Home</a>
      <a class="nav-link" href="party.php">Imprezy</a>
      <a class="nav-link" href="safe.php">Bezpieczeństwo</a>
    </nav>
  </div>
</header>

<main class="px-3">

  <h1>Lataj bezpiecznie z Nami!</h1>
  <hr style="width:50%; height: 2px; margin: 1rem auto; opacity: 100%">
  
  <p class="lead">
    <input type="text" autocomplete="off" class="search-box" placeholder="Wyszukaj miasto..." />
  </p>
  
  <p class="lead">
    <section class="location">
      <div class="city"></div>
      <div class="date"></div>
      <div class="temp"></div>
    </section>

    <section class="current">
      <div class="row">
        <div class="col-sm">
          <div class="vibi"></div>
          <div class="humidity"></div>
          <div class="wind"></div>
        </div>
        
        <div class="col-sm">
          <div class="weather"></div>
          <div class="clouds"></div>
        </div>
        <div class="col-sm">
          <div class="sunrise"></div>
          <div class="sunset"></div>
          <div class="hi-low"></div>
        </div>  
      </div>
    </section>
  </p>
  
  <p class="lead">
    <div class="canifly"></div>
  </p>
  

</main>

<!--<script src="scripts/autocomplete.js"></script>-->
<script src="scripts/api.js" defer></script>


<?php
    require 'footer.php';
?>