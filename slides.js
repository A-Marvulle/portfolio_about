let educationSlideIndex = 1;
let workSlideIndex = 1;

showEducationSlides(educationSlideIndex);
showWorkSlides(workSlideIndex);

function plusEducationSlides(n) {
    showEducationSlides(educationSlideIndex += n);
}

function currentEducationSlide(n) {
    showEducationSlides(educationSlideIndex = n);
}

function plusWorkSlides(n) {
    showWorkSlides(workSlideIndex += n);
}

function currentWorkSlide(n) {
    showWorkSlides(workSlideIndex = n);
}

function showEducationSlides(n) {
    let i;
    let educationSlides = document.getElementsByClassName("education-slides");
    let educationDots = document.getElementsByClassName("education-dot");
    if (n > educationSlides.length) {
        educationSlideIndex = 1;
    }
    if (n < 1) {
        educationSlideIndex = educationSlides.length;
    }
    for (i = 0; i < educationSlides.length; i++) {
        educationSlides[i].style.display = "none";
    }
    for (i = 0; i < educationDots.length; i++) {
        educationDots[i].className = educationDots[i].className.replace(" active", "");
    }
    educationSlides[educationSlideIndex - 1].style.display = "block";
    educationDots[educationSlideIndex - 1].className += " active";
}

function showWorkSlides(n) {
    let i;
    let workSlides = document.getElementsByClassName("work-slides");
    let workDots = document.getElementsByClassName("work-dot");
    if (n > workSlides.length) {
        workSlideIndex = 1;
    }
    if (n < 1) {
        workSlideIndex = workSlides.length;
    }
    for (i = 0; i < workSlides.length; i++) {
        workSlides[i].style.display = "none";
    }
    for (i = 0; i < workDots.length; i++) {
        workDots[i].className = workDots[i].className.replace(" active", "");
    }
    workSlides[workSlideIndex - 1].style.display = "block";
    workDots[workSlideIndex - 1].className += " active";
}

class HighSchool extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentes: [
                { id: 1, name: 'Etec Raposo Tavares', course: 'ETIM Informática', year: '2018 - 2020', kind: 'Ensino Médio Técnico', img: './img/cps.png' }
            ]
        }
    }

    renderData() {
        return this.state.componentes.map((componente, index) => {
            const { id, name, course, kind, year, img } = componente;
            return (
                <div className="card" key={id}>
                    <span className="logo">
                        <img src={img} />
                    </span>
                    <ul>
                        <li className="name"><h3>{name}</h3></li>
                        <li className="course">{course}</li>
                        <li className="kind">{kind}</li>
                        <li className="year">{year}</li>
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
}

class College extends HighSchool {
    constructor(props) {
        super(props);
        this.state = {
            componentes: [
                { id: 1, name: 'IFSP - Pirituba', course: 'Tecnologia em Análise e Desenvolvimento de Sistema', year: '2021 - 2023', kind: 'Ensino Superior', img: './img/if.png' }
            ]
        };
    }
}

class PostGraduation extends HighSchool {
    constructor(props) {
        super(props);
        this.state = {
            componentes: [
                { id: 1, name: 'SENAC', course: 'Engenharia da Qualidade de Software', year: '2024 - 2025', kind: 'Pós-Graduação', img: './img/senac.png' }
            ]
        };
    }
}

class Intern extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentes: [
                { id: 1, name: 'Moreno Advogados', position: 'Estagiário em Informática', year: '2022 - 2023', img: './img/moreno.png' }
            ]
        };
    }

    renderData() {
        return this.state.componentes.map((componente, index) => {
            const { id, name, position, kind, year, img } = componente;
            return (
                <div className="card" key={id}>
                    <span className="logo">
                        <img src={img} />
                    </span>
                    <ul>
                        <li className="name"><h3>{name}</h3></li>
                        <li className="position">{position}</li>
                        <li className="kind">{kind}</li>
                        <li className="year">{year}</li>
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
}

class Tech extends Intern {
    constructor(props) {
        super(props);
        this.state = {
            componentes: [
                { id: 1, name: 'Instituto Morgan', position: 'Técnico de Suporte Jr', year: '2023', img: './img/im.png' }
            ]
        };
    }
}

class Volunt extends Intern {
    constructor(props) {
        super(props);
        this.state = {
            componentes: [
                { id: 1, name: 'ACEDA', position: 'Voluntário de Design', year: '2024 (atualmente)', img: './img/aceda.png' }
            ]
        };
    }
}

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentes: [
                [
                    { id: 1, name: 'Mirago', course: 'SEO para Iniciantes', img: './img/mirago.png' },
                    { id: 2, name: 'FIAP', course: 'User Experience', img: './img/fiap.png' },
                    { id: 3, name: 'freeCodeCamp', course: 'Data Structures', img: './img/fcc.png' },
                    { id: 4, name: 'freeCodeCamp', course: 'Responsive Web Design', img: './img/fcc.png' },
                    { id: 5, name: 'Alura', course: 'Bootstrap', img: './img/alura.png' },
                    { id: 6, name: 'Alura', course: 'CSS Grid', img: './img/alura.png' },
                    { id: 7, name: 'Alura', course: 'FlexboxA', img: './img/alura.png' },
                    { id: 8, name: 'Alura', course: 'Responsividade', img: './img/alura.png' },
                    { id: 9, name: 'Alura', course: 'JavaScript', img: './img/alura.png' }
                ]
            ]
        };
    }

    renderData() {
        return this.state.componentes.map((componentesInnerArray, index) => {
            return (
                <div className="courses" key={index}>
                    {componentesInnerArray.map((componente, innerIndex) => {
                        const { id, name, course, img } = componente;
                        return (
                            <div className="certificates" key={id}>
                                <span className="logo-course">
                                    <img src={img} alt={name} />
                                </span>
                                <div className="text">
                                    <h3>{name}</h3>
                                    <p>{course}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderData()}
            </div>
        );
    }
}

ReactDOM.render(<HighSchool />, document.getElementById('hs'));
ReactDOM.render(<College />, document.getElementById('clg'));
ReactDOM.render(<PostGraduation />, document.getElementById('pstg'));
ReactDOM.render(<Intern />, document.getElementById('ma'));
ReactDOM.render(<Tech />, document.getElementById('im'));
ReactDOM.render(<Volunt />, document.getElementById('ac'));
ReactDOM.render(<Courses />, document.getElementById('course'));
