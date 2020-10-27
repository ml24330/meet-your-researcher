import React from 'react';
import Arrows from '../components/Arrows';
import Collapse from '../components/Collapse';
import q1 from '../media/q1.jpg';

export default function RQ1() {
    return (
        <div>
            <div className="page-title"><span style={{color: "darkred"}}>Q1: </span>Trusting surveillance</div>
            <div className="page--content">
                <div className="page--paragraph">
                    Surveillance technologies are always in the spotlight since the early stages of development. Indeed, with authoritarian regimes worldwide using surveillance to spy and violate personal freedom of their citizens, it is difficult for western nations, including the UK, to welcome this technology. Nonetheless, seemingly necessary contact tracing softwares, brought about by the pandemic, are raising a clear question: <strong>Are surveillance technologies practically unable to protect their users’ privacy? </strong>The answer is NO.
                </div>
                <div className="page--img">
                    <img src={q1} alt="q1" />
                </div>
                <div className="page--img-desc">
                    <p>An illustration of End-to-End Encryption, which allows information interchange free from eavesdropping</p>
                </div>
                <Collapse title="It's all about trust" color="orange">
                    <p>“When you go to a car garage, their staff determines whether or not your car is working and how to repair it. Why?” Prof. Whitley asked rhetorically during our interview. “Because you trust them!”</p>
                    <p>Two premises hold here: you understand that there are experts on car repairments, and you trust that workers at a car garage carry such expertise. In contrast, the UK public is not trusting the government to develop secure contact tracing softwares, despite it being technologically feasible.</p>
                    <p>You read that right: using advanced hashing algorithms and end-to-end encryption, secure contact tracing technologies can in fact be practically developed. Implemented correctly, everyone using the service will remain anonymous with the developers and maintainers themselves unable to access user information, while accurate and flexible contact tracing takes place.</p>
                    <p>The main problem is, Prof. Whitley explains, that the UK government has demonstrated incompetence in many areas when dealing with this pandemic. The public is concerned with the government’s ability to develop this technology, rather than the technology itself.</p>
                </Collapse>
                <Collapse title="Autonomy and transparency" color="orange">
                    <p>How can the government regain trust from the public? Prof. Whitley had two suggestions: transparency and independence. Most people do not understand how technologies work, so if relevant softwares are independently developed by firms specialising in technology rather than the NHS or other government bodies, it is likely that there will be more trust from the public.</p>
                    <p>Transparency is also important. In a <a target="_blank" href="http://eprints.lse.ac.uk/105927/1/businessreview_2020_07_14_using_apps_for_contact_tracing_in_response.pdf">blog post</a> published by Prof. Whitley on the LSE Business Review, he argued that “the full disclosure of the data protection and security impact assessments” and “a clear statement about what data will be stored, who it will be shared with and what will happen to the data once the worst of the pandemic ends” will be a useful first step to effective contact tracing apps.</p>
                    <p>These data protection proposals, on the other hand, are based on the UK government’s aim to construct a central database for user information. Is this the “right” thing to do?</p>
                </Collapse>
                <Collapse title="Stay decentralised" color="orange">
                    <p>In the same <a target="_blank" href="http://eprints.lse.ac.uk/105927/1/businessreview_2020_07_14_using_apps_for_contact_tracing_in_response.pdf">blog post</a>, Prof. Whitley also pointed out the dilemma of the choice between centralised and decentralised softwares. The partnership between Google and Apple, he referenced, is acknowledging concerns about privacy and making their services decentralised and anonymous. The UK government, however, wanted persistent identifiers for users to ease operations by the NHS.</p>
                    <p>These differences in the apps’ architecture will not affect their ability to track and trace, but their perception in the eyes of the public will surely differ. The key to effective contact tracing software is a high coverage rate, and if citizens are reluctant to use softwares on the grounds of privacy concerns, it is unlikely any track and trace will be successful.</p>
                </Collapse>
                <div className="page--paragraph">
                    <strong>Surveillance and contact tracing technologies are not problematic; the adopters who use the technology for unintended purposes are.</strong>
                </div>
                <div className="page--bib">
                    Whitley, Edgar A. “Using Apps for Contact Tracing in Response to COVID- 19: the Controversies.” LSE Business Review, 14 July 2020, eprints.lse.ac.uk/105927/1/businessreview_2020_07_14_using_apps_for_contact_tracing_in_response.pdf. 
                </div>
            </div>
            <Arrows from="/process" to="/q2" from_name="Research and review processes" to_name={<><span style={{color: "darkred"}}>Q2: </span>Anonymization and metadata</>} />
        </div>
    )
}
