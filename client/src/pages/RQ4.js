import React from 'react';
import Arrows from '../components/Arrows';
import q4 from '../media/q4.png';
import Collapse from '../components/Collapse';

export default function RQ4() {
    return (
        <div>
            <div className="page-title"><span style={{color: "darkred"}}>Q4: </span>Data protection laws</div>
            <div className="page--content">
                <div className="page--subtitle">
                    Background information on Data Protection Legislation around the World
                </div>
                <div className="page--paragraph">
                    <Collapse title="Moving to stricter legislation" color="lightblue">
                        <p>In recent years, there has been a global movement towards stricter protection laws in over 120 countries including EU countries (GDPR),  Brazil (LGPD), Thailand (PDPA), China and, Russia. </p>
                        <p>Brazil’s LGPD compels companies to adopt various security, technical, and administrative measures to protect personal data from unauthorised access and fines up to $12,300,000.</p>
                        <p>Thailand’s PDPA is unique in not only integrating GDPR’s strict requirements but also appointing data protection officers. Violators face fines and the possibility of criminal prosecution and imprisonment for up to a year. </p>
                        <p>There are also emerging data protection legislation initiatives: India (PDPB), South Korea (planning to align its existing data privacy laws to the GDPR).</p>
                    </Collapse>
                </div>
                <div className="page--img" style={{width: "100%"}}>
                    <img src={q4} alt="q4" style={{maxWidth: "700px", maxHeight: 9999, width: "70vw"}}/>
                </div>
                <div className="page--img-desc">
                    <p>Degree of data regulation by country</p>
                </div>
                <div className="page--subtitle">
                    Are these legislation effective?
                </div>
                <div className="page--paragraph">
                    <Collapse title="Multinational abuses" color="lightblue">
                        <p>In the US, however, there are only two general federal privacy laws and both are considerably limited in scope. COPPA imposes requirements on individuals knowingly collecting personal information of children under 13 years and operators of websites and online services directed to children. HIPAA establishes national standards for the protection of health information. The only state with laws fully established is California (CCPA).</p>
                        <p>Most cloud services such as Microsoft, Google, and Amazon, are based in the US, where privacy shields are significantly worse than in the EU. </p>
                        <p>Therefore, concerns over these multinational companies are not fully addressed. </p>
                        <p>According to Dr Gus Hosein and Dr Edgar Whitley’s Reddit AMA, regarding citizen protection from surveillance VS data collection by the government, the UK and US governments have been adopting misguided operations in gathering information from other countries. Rather than intercepting internet components (XKeyScore), monitoring activities on social media (Squeaky Dolphin), and hacking companies, governments should shed light on communication surveillance laws, invest in measures to protect security and privacy of data (instead of just implementing SSL in web serve connections), and fundamentally establish stronger legal protections and privacy safeguards. </p>
                    </Collapse>
                    <Collapse title="Change?" color="lightblue">
                        <p>However, Dr Whitley also pointed out that “some organisations are starting to realise that, despite the claimed benefits of big data and data analytics, data are actually a toxic resource that they are better off not holding on to.”</p>
                        <p>This may suggest that such laws and regulations are somewhat starting to influence actions undertaken by organisations. </p>
                        <p>Additionally, during our group interview, Dr Whitley mentioned a specific example of an Austrian non-profit organization NOYB, chaired by data privacy activist Max Schrems, which filed complaints against Apple, Amazon, and eight other US tech firms on their failure to comply with the GDPR in regaining Europeans’ consent every time they wish to use their data in new ways, including for targeted advertising, and for transferring data of Europeans to the US for processing. </p>
                    </Collapse>
                    <p>In conclusion, “It is not simple to say. Ultimately, these laws don’t stop the government and companies from misusing personal data but legal processes can be followed and do provide a way of legally fighting against companies.”</p>
                </div>
            </div>
            <Arrows from="q3" to="/quiz" from_name={<><span style={{color: "darkred"}}>Q3: </span>Garbage In, Garbage Out</>} to_name="Take a quiz" />
        </div>
    )
}
