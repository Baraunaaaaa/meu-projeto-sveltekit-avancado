<nav class="navbar bg-body-tertiary">
	<div class="container-fluid">
	  <a class="navbar-brand" href="/">Frameworks Aleixo</a>
	  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
		<div class="offcanvas-header">
		  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div class="offcanvas-body">
		  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
			<li class="nav-item">
			  <a class="nav-link active" aria-current="page" href="/">Inicio</a>
			</li>

			<li class="nav-item dropdown">
			  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				Capítulo 01
			  </a>
			  <ul class="dropdown-menu">
				<li><a class="dropdown-item" href="/01/a">a</a></li>
				<li><a class="dropdown-item" href="/01/b">b</a></li>
			  </ul>
			</li>

			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				  Capítulo 03
				</a>
				<ul class="dropdown-menu">
				  <li><a class="dropdown-item" href="/03/teste">teste</a></li>
				  <li><a class="dropdown-item" href="/03/pokemons">pokemons</a></li>
				  <li><a class="dropdown-item" href="/03/external/users">JSONPlaceholder - users</a></li>
				  <li><a class="dropdown-item" href="/03/dummy/users">Dummy - Users</a></li>
				</ul>
			  </li>

		  </ul>
		</div>
	  </div>
	</div>
  </nav>
