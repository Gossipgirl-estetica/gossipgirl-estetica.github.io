
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaQwWTBg-MdQtmY5uVG8nXAu6UUmbjkgs",
  authDomain: "gossipgirlestetica.firebaseapp.com",
  projectId: "gossipgirlestetica",
  storageBucket: "gossipgirlestetica.firebasestorage.app",
  messagingSenderId: "485582248099",
  appId: "1:485582248099:web:bf30667f4c73b11ea34716",
  measurementId: "G-8D182HRPW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// -------------------- Navegación --------------------
function abrirServicios(profesional) {
  localStorage.setItem('profesional', profesional);
  window.location.href = 'servicios.html';
}
function volver() { window.location.href = 'index.html'; }

// -------------------- Datos de servicios --------------------
const profesional = localStorage.getItem('profesional');
const titulo = document.getElementById('titulo-servicios');
const container = document.getElementById('servicios-container');

const servicios = {
  magali: [
    { nombre: 'Perfilado de Cejas', precio: 0, img: 'images/cejas.jpg' },
    { nombre: 'Lifting', precio: 12000, img: 'images/lifting.jpg' },
    { nombre: 'Pestañas Extensiones Clásicas', precio: 15000, img: 'images/ext_clasicas.jpg' },
    { nombre: 'Pestañas Extensiones Brasileñas', precio: 18000, img: 'images/ext_brasil.jpg' },
    { nombre: 'Pestañas Extensiones Hawaianas', precio: 17000, img: 'images/ext_hawai.jpg' },
    { nombre: 'Pestañas Tecnológicas', precio: 17000, img: 'images/ext_tecnologicas.jpg' },
  ],
  mariana: [
    { nombre: 'Uñas Permanentes', precio: 0, img: 'images/unas_perm.jpg' },
    { nombre: 'Uñas Semi Permanentes', precio: 0, img: 'images/unas_semi.jpg' },
  ]
};

// -------------------- Cargar servicios --------------------
if (container) {
  titulo.textContent = profesional === 'magali' ? 'Servicios de Magali' : 'Servicios de Mariana';
  servicios[profes
