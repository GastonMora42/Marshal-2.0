import { LoginButton } from "./login.js";
import { LogoutButton } from "./logout.js";
import { Profile } from "./profile.js";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Hub from "./routes/hub.js";
import Carrousel from "./Carrousel.js";

import { Link } from "react-router-dom";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <body class="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-12">
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
        <Container>
          <Navbar.Brand>Marshal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Soluciones" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Creacion de contenido automatico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Estrategias publicitarias y SEO
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Planning mensual para redes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Combina todo y aumenta tus ventas
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Herramientas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link
                    className="text-decoration-none text-secondary"
                    to="/rb"
                  >
                    Remover fondo
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Crear contenido automatico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Editor con IA
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Programa tus publicaciones
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Comienza tu proyecto
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Precios / Planes</Nav.Link>
            </Nav>
            <Nav>
              {isAuthenticated ? (
                <>
                  <Nav.Link>
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/Formulario"
                    >
                      Comienza un nuevo proyecto
                    </Link>
                  </Nav.Link>
                  <Nav.Link to="/Hub">
                    <Link
                      className="text-decoration-none text-secondary"
                      to="/Hub"
                    >
                      Hub Estudio
                    </Link>
                  </Nav.Link>
                  <LogoutButton />
                  <Profile />
                </>
              ) : (
                <LoginButton />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br></br>
      <br></br>

      <div class="row no-gutters px-5">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-7 pe-5">
          <h1 class="display-4">Bienvenido a Marshal</h1>
          <br></br>
          <h2 class="">
            Tu community manager con Inteligencia artificial, que te ayudará a
            gestionar tus proyectos de marketing digital
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <div class="card shadow">
            <div class="card-header">
              <h4>
                Automatiza tus publicaciones
                <Badge className="ms-3" bg="success">
                  New
                </Badge>
              </h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Prueba nuestras herramientas impulsadas por IA
              </h5>
              <p class="card-text">
                Con Marshal podrás gestionar tus proyectos en piloto automatico
              </p>
              <a href="#" class="btn btn-dark">
                Marshal labs
              </a>
            </div>
          </div>
          <br></br>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-8 col-xl-5">
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/774/319/original/space-wallpaper-rocket-launch-explosion-with-fire-exploding-illustration-ai-generative-free-photo.jpg"
            class="shadow border rounded img-fluid"
            width="800px"
            height="2000px"
          ></img>
          <div class="card-body">
            <h3 class="card-title mt-2 d-block text-center mb-1">
              Las soluciones de IA que estabas buscando para tu proyecto
            </h3>
            <p class="card-text d-block text-center">
              Impulsa tu proyecto en automatico con Marshal
            </p>
            <a href="#" class="btn btn-dark d-block text-center">
              Comenzar ahora
            </a>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <div class="text-center d-block card row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h4>Empieza Gratis hoy mismo</h4>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Comenza con nuestra prueba gratuita de 15 dias
          </h5>
          <p class="card-text">
            Selecciona el plan que mas se ajuste a tus necesidades
          </p>
          <a href="#" class="btn btn-dark">
            Empezar prueba GRATIS
          </a>
        </div>
      </div>

      <br></br>
      <br></br>

      <footer class="footer py-3 bg-dark d-block">
        <div class="container">
          <span class="text-muted">Marshal 2023 ©</span>
          <span class="text-muted ps-3">Todos los derechos reservados</span>
          <Link
            className="text-decoration-none text-secondary float-end"
            to="/Hub"
          >
            Terminos y condiciones
          </Link>
          <Link
            className="text-decoration-none text-secondary float-end pe-5"
            to="/Hub"
          >
            Politicas de privacidad
          </Link>
        </div>
      </footer>
    </body>
  );
}

export default App;
