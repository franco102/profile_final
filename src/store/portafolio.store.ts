import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from 'zustand/middleware/immer'
import { Curriculum, Hobbie, LinkPortafolio, Portafolio, Skills, socialNetworks } from "../type";
 
interface PortafolioState { 
  name:string
  lastname:string
  birthday:string
  phone:string
  email:string
  address:string
  position:string
  mostrarOcultarMenu:()=> void
  seleccionar:()=> void
  efectoHabilidades:()=> void
  menuVisible:boolean
  listLink:LinkPortafolio[]
  socialNetworks:socialNetworks[]
  hobbies:Hobbie[]
  skills: Skills[]
  curriculum: Curriculum[]
  portafolio: Portafolio[]
}


const portafalioStore:StateCreator<PortafolioState,[["zustand/devtools", never], ["zustand/immer", never]]>=(set,get)=>({  
    name:'Alan Franco', 
    lastname:'Silva Huarachi',  
    birthday:'27/10/1998',
    phone:'+51 964118376',
    email:'francodannaeyal@gmail.com',
    address:'Urb. Santo Domingo 2da Etapa, Carabayllo (Lima-Lima-Perú)',
    position:'Full-Stack',
    menuVisible:false,
    mostrarOcultarMenu:()=>{
      const menu= document.getElementById("nav")
      if(get().menuVisible){
        if(menu){
          menu.classList.remove("responsive");
          set((state)=>{
            state.menuVisible=false
          }) 
        }
      }else{
        if(menu){
          menu.classList.add("responsive");
          set((state)=>{
            state.menuVisible=true
          }) 
        } 
      }
  },
  seleccionar:()=>{
    const menu= document.getElementById("nav") 
    if(menu){
      menu.classList.remove("responsive");
      set((state)=>{
        state.menuVisible=false
      }) 
    } 
  },
  efectoHabilidades:()=>{ 
    const skills = document.getElementById("skills");
    if(skills){
      const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
      if(distancia_skills >= 300){
          let habilidades = document.querySelectorAll(".progreso");
          habilidades.forEach(skill => {
            skill.classList.add('professional-skill')
          });
      }
    }
  },
  listLink:[
    {title:'INICIO',url:'inicio'},
    {title:'SOBRE MI',url:'sobremi'},
    {title:'SKILLS',url:'skills'},
    {title:'CURRICULUM',url:'curriculum'},
    {title:'PORTFOLIO',url:'portfolio'},
    {title:'CONTACTO',url:'contacto'},
  ],
  socialNetworks:[
    {title:'facebook',url:'https://www.facebook.com/alanfranco.silvahuarachi', icon:'fa-brands fa-facebook-f'},
    {title:'github',url:'https://github.com/franco102', icon:'fa-brands fa-github'},
    {title:'instagram',url:'https://www.instagram.com/silvahuarachi/', icon:'fa-brands fa-instagram'},
    {title:'linkedin',url:'https://www.linkedin.com/in/alan-franco-silva-huarachi-82bb40167/', icon:'fa-brands fa-linkedin-in'}, 
  ],
  hobbies:[
    {title:'JUEGOS',icon:'fa-solid fa-gamepad'},
    {title:'MUSICA',icon:'fa-solid fa-headphones'},
    {title:'VIAJAR',icon:'fa-solid fa-plane'},
    {title:'PROGRAMAR',icon:'fa-solid fa-computer'},
    {title:'DEPORTE',icon:'fa-solid fa-futbol'}, 
    {title:'LIBROS',icon:'fa-solid fa-book'},
    {title:'AUTOS',icon:'fa-solid fa-car'},
    {title:'FOTOS',icon:'fa-solid fa-camera'},
    {title:'ANIMALS',icon:'fa-solid fa-dog'},
  ],
  skills:[
    {percentage:100,type:'professional',name:'Proactivo'},
    {percentage:100,type:'professional',name:'Dedicación'},
    {percentage:100,type:'professional',name:'Creatividad'},
    {percentage:100,type:'professional',name:'Trabajo en Equipo'},
    {percentage:100,type:'professional',name:'Resilencia'},
    {percentage:100,type:'professional',name:'Liderazgo'},
    {percentage:100,type:'professional',name:'Responzabilidad'},
    {percentage:20,type:'technical',name:'C#'},
    {percentage:85,type:'technical',name:'SQL-SERVER'},
    {percentage:90,type:'technical',name:'JAVASCRIPT'},
    {percentage:90,type:'technical',name:'HTML'},
    {percentage:72,type:'technical',name:'CSS3'},
    {percentage:75,type:'technical',name:'PHP'},
    {percentage:70,type:'technical',name:'LARAVEL'},
    {percentage:70,type:'technical',name:'MYSQL'},
    {percentage:80,type:'technical',name:'VUE-JS'},
    {percentage:60,type:'technical',name:'INFORMIX'},
    {percentage:70,type:'technical',name:'PYTHON'},
    {percentage:65,type:'technical',name:'FASTAPI'},
    {percentage:60,type:'technical',name:'POSTGRESQL'},
    {percentage:40,type:'technical',name:'MONGODB'},
    {percentage:75,type:'technical',name:'BOOSTRAP'},
    {percentage:55,type:'technical',name:'TAILWIND'},
    {percentage:50,type:'technical',name:'DART'},
    {percentage:40,type:'technical',name:'FLUTTER'},
    {percentage:70,type:'technical',name:'REACT'},
    {percentage:60,type:'technical',name:'TYPESCRIPT'},
    {percentage:50,type:'technical',name:'NODE'},
  ],
  curriculum:[
    {type:'education',tittle:'EDUCACIÓN PRIMARIA',subTitle:'COLEGIO JUAN VALER SANDOVAL',date:'(2005-2010)',description:'' },
    {type:'education',tittle:'EDUCACIÓN SECUNDARIA',subTitle:'COLEGIO SANTO DOMINGO DE GUZMÁN',date:'(2011-2015)',description:'' },
    {type:'education',tittle:'EDUCACIÓN UNIVERSITARIA',subTitle:'UNIVERSIDAD NACIONAL DEL CALLAO',date:'(2017 – 2021)',description:'- INGENIERA DE SISTEMAS(Tercio superior)' },
    {type:'education',tittle:'INSTITUTO',subTitle:'INSTITUTO CULTURAL PERUANO NORTE AMERICANO',date:'(2019 – 2025)',description:'Actualmente Avanzado 5' },
    {type:'education',tittle:'ESPECIALIZACIÓN',subTitle:'CIBERTEC:',date:'2024',description:'ESPECIALIZACIÓN EN BASE DE DATOS' },
    {type:'job',tittle:'FENIXLOGISTIC',subTitle:'ANALISTA – PROGRAMADOR',date:'JUNIO 2020 - DICIEMBRE 2020',description:'Me desarrollé en área de desarrollo de software, realizando un sistema Logístico de la empresa Fénix Logistic S.A.C., siendo el proyecto desarrollado con el framework Laravel(back-end), VueJS (fron-end) y Bootstrap, para la gestión y versión del código se realizó con GitHub además asumí el cargo de desplegar el Software en un servidor Web.' },
    {type:'job',tittle:'UNIVERSIDAD NACIONAL EL CALLAO',subTitle:'SOPORTE TÉCNICO',date:'SETIEMBRE 2021 - NOVIEMBRE 2021',description:'Me desarrollé en el de oficina de educación virtual realizando mantenimientos, conexión de equipos de cómputo, la gestión de áreas, además de encargar de la administración y creación de los correos de la universidad.' },
    {type:'job',tittle:'MAPROSOFT',subTitle:'FULL STACK',date:'DICIEMBRE 2021 - ENERO -2024',description:'Me desarrollé en el área de TI realizando los requerimientos y automatizaciones de los procesos en mina Summa-Gold y Shougang desarrollando dashboard (AmcharTs4, APEX Chart, Chart-JS), mapas geológicos (Map-Box, leaflet), mantenimientos, registros, soporte en Base de Datos, Sistema de Dispatch (control en tiempo real de los equipos de mina) y para los diferentes procesos mina se realizó con (Devexpress-JS). El desarrollo se realizó con a ASP para el lado del back-end se trabajó con Procedure en SQL Server y el lado del fron-end con JavaScript, estilos con Bootstrap, para la gestión de tareas y versión del código se realizó Azure DevOps.' },
    {type:'job',tittle:'URBANAO EXPRESS',subTitle:'FULL STACK',date:'FEBRERO 2024 – (actualmente',description:'Me desarrollo en el área de TI realizando los diferentes procesos logísticos del mercado a nivel de procedimientos almacenados como Informix y PostgreSQL, nivel de Back desarrollando APIS con PHP(Laravel) y con Python (FastAPI) así permitiendo la integración con empresas externas como LG, Ripley, Mercado Libre, etc., en ámbito de Front-End he trabajado con las siguientes tecnologías PHP, JavaScript, VueJS NUXT, React con NextJS, Boostrap, Tailwind-Css realizando paginas SPA, en laravel Modelo , Vista y Controlador, en conjunto realizando Deploy en Servidores con Nginx realizando implementación React, FastAPI, laravel, etc., además dando soporte en Base de Datos en las diferentes áreas como Facturación, Experiencia de Usuario, Cobranzas.' },
  ],
  portafolio:[
    {img:'img/quisco-next.png',title:'Quisco',description:'Sistema de Ventas',url:'https://quiosco-next-wine.vercel.app/order/cafe'},
    {img:'img/cocktail.png',title:'CockTailApp',description:'Preparación de Tragos',url:'https://bebidas-react-one.vercel.app'},
    {img:'img/up-task.png',title:'Up-Task',description:'planer de proyectos',url:'https://up-task-sigma.vercel.app'},
    {img:'img/pacientes_app.png',title:'PacientesApp',description:'Seguimiento de Pacientes Veterinaria',url:'https://pacientes-zustand-azure.vercel.app/'},
    {img:'img/guitar-la.png',title:'GuitarLA',description:'Ventas de Instrumentos',url:'https://guitar-la-ghnl.vercel.app/'},
    {img:'img/cripto_app.png',title:'CriptoApp',description:'Cotizador de Criptomonedas',url:'https://cripto-cotiza.vercel.app/'},
    {img:'img/clima_app.png',title:'ClimaApp',description:'Buscador de clima',url:'https://clima-beta-umber.vercel.app/'},
    {img:'img/gasto_app.png',title:'GastosApp',description:'Planificador de Gastos',url:'https://control-gastos-taupe.vercel.app/'},
    {img:'img/admin_producto.png',title:'ProductosApp',description:'Administrador de Productos',url:'https://crud-product-rouge-theta.vercel.app/'},
    {img:'img/contador_calories.png',title:'CaloriasApp',description:'Contador de Calorias',url:'https://calorie-tracker-dun.vercel.app/'},
    {img:'img/propinas_app.png',title:'PropinasApp',description:'Calculadora con Propinas',url:'https://calculadora-propinas-gamma.vercel.app/'},
    {img:'img/back_node.png',title:'BackProductApp',description:'Api de ProductoApp',url:'https://server-product-69pm.onrender.com/docs/#/Products'},
    {img:'img/project_students.png',title:'Project Students',description:'Proyecto Estudiantes',url:'https://front-students-qfzbd3w2p-francosh102798s-projects.vercel.app'},
  ]
}); 


export const usePortafalioStore=create<PortafolioState>()(
  devtools(
    persist(
      immer(
        portafalioStore
      )
       ,{
          name:'portafolio-store',
        }
     )
  )
);