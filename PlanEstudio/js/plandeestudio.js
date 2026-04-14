const planICC={
    "codigo": "IF01001",
    "carrera": "Ingeniería en Ciencias de la Computación",
    "bloques":[
        {
            "bloque": "I",
            "asignaturas":[
                { "codigo": "MT101", "nombre": "Matemáticas", "creditos": 4, "requisitos": [] },
                { "codigo": "ES101", "nombre": "Español", "creditos": 3, "requisitos": [] },
                { "codigo": "CS101", "nombre": "Sociología", "creditos": 3, "requisitos": [] },
                { "codigo": "FI101", "nombre": "Filosofía", "creditos": 3, "requisitos": [] },
                { "codigo": "INF101", "nombre": "Introducción a las Ciencias de la Computación", "creditos": 3, "requisitos": []}
            ]
        },
        {
            "bloque": "II",
            "asignaturas":[
                { "codigo": "ES102", "nombre": "Expresión Oral y Escrita", "creditos": 3, "requisitos": ["ES101"] },
                { "codigo": "MT102", "nombre": "Pre-Cálculo", "creditos": 4, "requisitos": ["MT101"] },
                { "codigo": "INF102", "nombre": "Fundamentos y Lógica de Programación", "creditos": 4, "requisitos": ["INF101"] },
                { "codigo": "HS101", "nombre": "Historia de Honduras", "creditos": 3, "requisitos": [] },
                { "codigo": "FI102", "nombre": "El Hombre Frente a la Vida", "creditos": 3, "requisitos": ["FI101"] }
            ]
        },
        {
            "bloque": "III",
            "asignaturas":[
                { "codigo": "MT201", "nombre": "Estadística I", "creditos": 4, "requisitos": ["MT102"] },
                { "codigo": "MT202", "nombre": "Cálculo I", "creditos": 4, "requisitos": ["MT102"] },
                { "codigo": "INF201", "nombre": "Programación Estructurada I", "creditos": 3, "requisitos": ["INF102"] },
                { "codigo": "INF202", "nombre": "Estructuras Discretas", "creditos": 3, "requisitos": ["INF102"] },
                { "codigo": "CCNN101", "nombre": "Electiva I (Área de CCNN)", "creditos": 3, "requisitos": [] }
            ]
        },
        {
            "bloque": "IV",
            "asignaturas":[
                { "codigo": "INV201", "nombre": "Métodos y Técnicas de Investigación", "creditos": 3, "requisitos": [] },
                { "codigo": "MT203", "nombre": "Cálculo II", "creditos": 4, "requisitos": ["MT202"] },
                { "codigo": "INF203", "nombre": "Programación Estructurada II", "creditos": 3, "requisitos": ["INF201"] },
                { "codigo": "FI201", "nombre": "Física I", "creditos": 3, "requisitos": [] },
                { "codigo": "ADM201", "nombre": "Administración I", "creditos": 3, "requisitos": [] }
            ]
        },
        {
            "bloque": "V",
            "asignaturas":[
                { "codigo": "INF204", "nombre": "Base de Datos I", "creditos": 3, "requisitos": ["INF201"] },
                { "codigo": "CON201", "nombre": "Contabilidad", "creditos": 3, "requisitos": [] },
                { "codigo": "INF205", "nombre": "Programación en Entornos de Desarrollo Visual", "creditos": 3, "requisitos": ["INF203"] },
                { "codigo": "ELE201", "nombre": "Principios de Electrónica", "creditos": 3, "requisitos": [] },
                { "codigo": "MT204", "nombre": "Matemática Financiera", "creditos": 3, "requisitos": ["MT202"] }
            ]
        },
        {
            "bloque": "VI",
            "asignaturas":[
                { "codigo": "INF206", "nombre": "Base de Datos II", "creditos": 3, "requisitos": ["INF204"] },
                { "codigo": "INF207", "nombre": "Análisis y Diseño de Sistemas", "creditos": 3, "requisitos": ["INF205"] },
                { "codigo": "RED201", "nombre": "Redes I", "creditos": 4, "requisitos": [] },
                { "codigo": "CIR201", "nombre": "Circuitos Lógicos", "creditos": 3, "requisitos": ["ELE201"] },
                { "codigo": "ETI201", "nombre": "Ética Profesional", "creditos": 3, "requisitos": [] }
            ]
        },
        {
            "bloque": "VII",
            "asignaturas":[
                { "codigo": "INF208", "nombre": "Base de Datos Multidimensional", "creditos": 3, "requisitos": ["INF206"] },
                { "codigo": "INF209", "nombre": "Programación Multiplataforma", "creditos": 3, "requisitos": ["INF205"] },
                { "codigo": "INF210", "nombre": "Desarrollo de Software", "creditos": 4, "requisitos": ["INF207"] },
                { "codigo": "RED202", "nombre": "Redes II", "creditos": 4, "requisitos": ["RED201"] },
                { "codigo": "INF211", "nombre": "Sistemas Automatizados", "creditos": 3, "requisitos": ["CIR201"] }
            ]
        },
        {
            "bloque": "VIII",
            "asignaturas":[
                { "codigo": "INF212", "nombre": "Sistemas Inteligentes para Negocios", "creditos": 3, "requisitos": ["INF210"] },
                { "codigo": "ELEC102", "nombre": "Electiva II (Área de Arte o Deporte)", "creditos": 3, "requisitos": [] },
                { "codigo": "INF213", "nombre": "Implementación de Sistemas de Software", "creditos": 3, "requisitos": ["INF207"] },
                { "codigo": "SO101", "nombre": "Sistemas Operativos I", "creditos": 3, "requisitos": [] },
                { "codigo": "INF214", "nombre": "Microcontroladores", "creditos": 3, "requisitos": ["ELE201"] }
            ]
        },
        {
            "bloque": "IX",
            "asignaturas":[
                { "codigo": "INF215", "nombre": "Desarrollo de Portales Web I", "creditos": 3, "requisitos": ["INF213"] },
                { "codigo": "INF216", "nombre": "Programación Móvil I", "creditos": 3, "requisitos": ["INF209"] },
                { "codigo": "INF217", "nombre": "Gestión de la Calidad Total", "creditos": 3, "requisitos": [] },
                { "codigo": "SO102", "nombre": "Sistemas Operativos II", "creditos": 3, "requisitos": ["SO101"] },
                { "codigo": "INF218", "nombre": "Seminario de Hardware y Electricidad", "creditos": 3, "requisitos": ["CIR201"] }
            ]
        },
        {
            "bloque": "X",
            "asignaturas":[
                { "codigo": "INF219", "nombre": "Desarrollo de Portales Web II", "creditos": 3, "requisitos": ["INF215"] },
                { "codigo": "INF220", "nombre": "Programación Móvil II", "creditos": 3, "requisitos": ["INF216"] },
                { "codigo": "MT205", "nombre": "Control Estadístico de la Calidad", "creditos": 3, "requisitos": ["MT204"] },
                { "codigo": "INF221", "nombre": "Gestión y Estándares de Tecnología de Información", "creditos": 3, "requisitos": [] },
                { "codigo": "SOC101", "nombre": "Doctrina Social de la Iglesia", "creditos": 3, "requisitos": [] }
            ]
        },
        {
            "bloque": "XI",
            "asignaturas":[
                { "codigo": "INF222", "nombre": "Negocios Web", "creditos": 3, "requisitos": ["INF215"] },
                { "codigo": "INF223", "nombre": "Programación de Negocios", "creditos": 3, "requisitos": ["INF219"] },
                { "codigo": "INF224", "nombre": "Planeación y Diseño de un Modelo de Calidad", "creditos": 3, "requisitos": ["INF217"] },
                { "codigo": "INF225", "nombre": "Seguridad Informática y Gestión del Riesgo", "creditos": 3, "requisitos": [] },
                { "codigo": "ADM202", "nombre": "Administración de Centros de Cómputo", "creditos": 3, "requisitos": ["ADM201"] }
            ]
        },
        {
            "bloque": "XII",
            "asignaturas":[
                { "codigo": "INF226", "nombre": "Seminario Taller de Software", "creditos": 3, "requisitos": ["INF210"] },
                { "codigo": "INF227", "nombre": "Gestión de Proyectos Informativos", "creditos": 3, "requisitos": [] },
                { "codigo": "INF228", "nombre": "Big Data", "creditos": 3, "requisitos": ["INF206"] },
                { "codigo": "INF229", "nombre": "Auditoría de Sistemas de Información", "creditos": 3, "requisitos": ["INF206"] },
                { "codigo": "ELEC103", "nombre": "Electiva III (Área Especializante)", "creditos": 3, "requisitos": [] }
            ]
        },
        {
            "bloque": "XIII",
            "asignaturas":[
                { "codigo": "INF230",
                  "nombre": "Práctica Profesional Supervisada", 
                  "creditos": 3, 
                  "requisitos": ["INF213","INF219","INF220"]
                }
            ]
        },
        {    "bloque": "XIV",
            "asignaturas": [
                { 
                "codigo": "INF231", 
                "nombre": "Investigación Tecnológica", 
                "creditos": 3, 
                "requisitos": ["INF226","INF227","INF228","INF229"] 
                }
            ]
        }
    ],
};

document.addEventListener("DOMContentLoaded", ()=>{
    const flujoGrama = new FlujoGrama("planflujo", planICC);
    flujoGrama.GenerateUX();
});

class FlujoGrama{
    constructor(rootId, plan){
        this.plan = plan;
        this.root = document.getElementById(rootId);
        this.root.classList.add("plan");
        this.pseudoDOM={};
        this.selected=null;
    }
    GenerateUX(){
        this.createHeader();
        this.createBloques();
    }
    createHeader(){
        let header= document.createElement("H2");
        header.classList.add("plan_header");
        header.innerText=`${this.plan.codigo} - ${this.plan.carrera}`;
        this.root.appendChild(header);
    }
    createBloques(){
        this.plan.bloques.forEach((blq)=>{
        let bloque = document.createElement("SECTION");
        bloque.classList.add("plan_bloque");
        let bloqueIndice = document.createElement("DIV");
        let bloqueAsignaturas = document.createElement("DIV");

        bloqueIndice.classList.add("plan_bloque_idx");
        bloqueAsignaturas.classList.add("plan_bloque_asig");
        bloqueIndice.innerText=blq.bloque;
        bloque.appendChild(bloqueIndice);
        bloque.appendChild(bloqueAsignaturas);
        this.createAsignaturas(bloqueAsignaturas, blq);
        this.root.appendChild(bloque);
        });
    }
    createAsignaturas(bloqueDOM, blqDef){
        blqDef.asignaturas.forEach((asg)=>{
            let asignaturaDOM=document.createElement("DIV");
            asignaturaDOM.classList.add("plan_asignatura");
            let codigoDOM=document.createElement("DIV");
            codigoDOM.innerText=asg.codigo;
            let descripcionDom=document.createElement("DIV");
            descripcionDom.innerText=`${asg.nombre} (${asg.creditos})`;
            asignaturaDOM.appendChild(codigoDOM);
            asignaturaDOM.appendChild(descripcionDom);
            bloqueDOM.appendChild(asignaturaDOM);
            this.pseudoDOM[asg.codigo]={};
            this.pseudoDOM[asg.codigo]["nodo"]=asignaturaDOM;
            this.pseudoDOM[asg.codigo]["requisitos"]=[];
            this.pseudoDOM[asg.codigo]["apertura"]=[];
            asg.requisitos.forEach(rq=>{
                this.pseudoDOM[asg.codigo]["requisitos"].push(
                    this.pseudoDOM[rq].nodo
                );
                this.pseudoDOM[rq].apertura.push(
                    this.pseudoDOM[asg.codigo].nodo
                );
            });
            this.pseudoDOM[asg.codigo]["nodo"].addEventListener("click",
                (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    if(this.selected){
                        this.selected.nodo.classList.remove("plan_selected");
                        this.selected.requisitos.forEach(
                            n => n.classList.remove("plan_requisitos")
                        );
                        this.selected.apertura.forEach(
                            n => n.classList.remove("plan_apertura")
                        );
                    }
                        this.selected = this.pseudoDOM[asg.codigo];
                        this.selected.nodo.classList.add("plan_selected");
                        this.selected.requisitos.forEach(
                            n => n.classList.add("plan_requisitos")
                        );
                        this.selected.apertura.forEach(
                            n => n.classList.add("plan_apertura")
                        );

                }
            )
        });
    }
}