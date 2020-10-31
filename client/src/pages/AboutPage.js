import React from 'react';
import Arrows from '../components/Arrows';
import prof from '../media/prof.jpg';

export default function AboutPage() {
    return (
        <div>
            <div className="page-title">About Dr Whitley</div>
            <div className="page--content">
                <div className="page--img">
                    <img src={prof} alt="prof" />
                </div>
                <div className="page--paragraph">
                    <p>Dr Edgar Whitley is an Associate Professor at LSE. He gives lectures in the field of Information Systems at the postgraduate level and supervises PhD students. Dr Whitley studied Economics at LSE and did a PhD in Information Systems. At LSE he has also been involved in various projects like the <a href="https://eprints.lse.ac.uk/684/1/identityreport.pdf" target="_blank" rel="noopener noreferrer">LSE Identity Project</a> of which he was the research coordinator.</p>
                    <p>Besides his work at LSE, Dr Whitley contributes to academic journals. He was an associate editor for the European Journal and has contributed to reports for the World Bank. Dr Whitley has been involved in several conferences such as the European Conference on Informations Systems and is co-chair of the UK Cabinet Office Privacy and Consumer Advisory Group.</p>
                    <p>The focus of his research lies on Identity assurance, digital identity and data governance. Recently he analyzed various topics regarding digital identity in the context of the COVID-19 pandemic.</p>
                </div>
                <div className="page--link">
                    <div><a href="https://www.lse.ac.uk/management/people/academic-staff/ewhitley" target="_blank" rel="noopener noreferrer">Biography on the LSE homepage</a></div>
                    <div><a href="http://personal.lse.ac.uk/whitley/" target="_blank" rel="noopener noreferrer">Personal website</a></div>
                    <div><a href="https://scholar.google.co.uk/citations?user=WjXFjg0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar Page</a></div>
                    <div><a href="https://eprints.lse.ac.uk/684/1/identityreport.pdf" target="_blank" rel="noopener noreferrer">The LSE Identity Project</a></div>
                </div>
            </div>
            <Arrows to="/tasks" to_name="Researcher roles"/>
        </div>
    )
}
