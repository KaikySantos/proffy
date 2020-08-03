import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">

					<header>
						<img src="https://avatars3.githubusercontent.com/u/56506919?s=460&u=6b162e9fec99aa6e4991bc62feb0cf9f88d3e3e5&v=4" alt="Kaiky Santos" />
						<div>
							<strong>Kaiky Santos</strong>
							<span>Hacker</span>
						</div>
					</header>

					<p>
						Quer aprender Hacker empresas como a Nasa, Google ou Facebook ? Então cuida!
					</p>

					<footer>
						<p>
							Preço/Hora
							<strong>R$ 29.889,90</strong>
						</p>
						<button type="button">
							<img src={whatsappIcon} alt="Whatsapp"/>
							Entrar em contato
						</button>
					</footer>

				</article>
    )
}

export default TeacherItem;