import React from "react";
import styles from './Portfolio.module.css';
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import { useState } from 'react'


const Portfolio = () => {

    const portfolioBtn = [
        { name: 'React Js', id: 'pills-React-tab', dataTarget: '#pills-React', ariaControls: 'pills-React', ariaSelected: 'true' },
        { name: 'jQuery', id: 'pills-jQuery-tab', dataTarget: '#pills-jQuery', ariaControls: 'pills-jQuery', ariaSelected: 'false' },
        { name: 'JavaScript', id: 'pill-JS-tab', dataTarget: '#pills-JS', ariaControls: 'pills-JS', ariaSelected: 'false' },
        { name: 'Bootstrap', id: 'pills-Bootstrap-tab', dataTarget: '#pills-Bootstrap', ariaControls: 'pills-Bootstrap', ariaSelected: 'false' },
        { name: 'HTML & CSS', id: 'pills-html-tab', dataTarget: '#pills-html', ariaControls: 'pills-html', ariaSelected: 'false' },
    ]
    const [name, setName] = useState("")
    const handleBtn = (name) => {
        setName(name)
    }
    return (
        <>
            <section className={styles.portfolio}>
                <div className={`container my-5`}>
                    <div className="row ">
                        <h4 className={styles.portfolioTitle}>Portfolio</h4>
                        <ul className="nav nav-pills d-flex flex-wrap justify-content-center align-items-center" id="pills-tab" role="tablist">
                            {portfolioBtn?.map((ele, index) =>
                                <li className="nav-item" role="presentation" key={index}>
                                    <button className={ele.ariaSelected === 'true' ? `nav-link active ${styles.navLink}` : `nav-link ${styles.navLink}`} id={ele.id} data-bs-toggle="pill" data-bs-target={ele.dataTarget} type="button" role="tab" aria-controls={ele.ariaControls} aria-selected={ele.ariaSelected} onClick={(name) => handleBtn(ele.name)}>{ele.name}</button>
                                </li>
                            )}
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            {portfolioBtn?.map((ele, index) =>
                                <div className={ele.ariaSelected === 'true' ? "tab-pane fade show active" : "tab-pane fade"} id={ele.ariaControls} role="tabpanel" aria-labelledby={ele.id} tabIndex="0" key={index}><PortfolioCard name={name} /></div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;