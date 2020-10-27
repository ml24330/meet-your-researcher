import React, { useState } from 'react';
import Arrows from '../components/Arrows';
import Q2Act from '../components/Q2Act';
import q2 from '../media/q2.jpeg';

export default function RQ2() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="page-title"><span style={{color: "darkred"}}>Q2: </span>Anonymization and metadata</div>
            <div className="page--content">
                <div className="page--link" onClick={() => setOpen(true)}><p>Try this activity before you start (click me!)</p></div>
                <div className="page--img">
                    <img src={q2} alt="q2" />
                </div>
                <div className="page--paragraph">
                    <p>Anonymization of personal data has become an increasingly pressing issue, especially in times of a global pandemic and newly developed contact tracing applications and methods. Although one might not have thought about data security and privacy all that often in the past, the COVID-19 related tracking methods may have been thought provoking for many.</p>
                    <p>Clicking on “Accept All Cookies” after being mildly infuriated by one of these well-known banners for the ten thousandth time, we give the website owner permission to log all kinds of metadata. They might promise to anonymize our data “beyond recognition” and “never sell them to third parties” but do we really care anyways? Why would we mind if advertisers know through how many brands of hand-sanitizer we browsed on Amazon before deciding on the “Amazon’s Choice” anyways? Reflecting on the daily online activity we engage in, it becomes clear that with every metaphorical step we take and every click of the mouse, we leave behind a trail of metadata. </p>
                    <p>It turns out this information that is captured alongside purposely exchanged data like email addresses or usernames leaves great potential to link back to the specific user that left it. <a href="https://arxiv.org/pdf/1803.10133.pdf" target="_blank">Perez, Musolesi and Stringhini (2018)</a> for example were able to train a machine learning algorithm to identify any one out of a group of 10’000 Twitter users by using metadata of previous Tweets with an accuracy of 96.7%. They were also able to show that data obfuscation, a method to make data more difficult to use and therefore more anonymous, was largely ineffective, achieving an accuracy of more than 95% even after 60% of the training data was perturbed.</p>
                    <p>With this in mind, our group was interested, how well data anonymization is even achievable, knowing the reconstruction that could be performed using metadata. We therefore asked Professor Whitley, an expert in this field, “Can ‘anonymized’ systems truly be anonymized with the amount of metadata that is also recorded and might lead back to the underlying data?”</p>
                    <p>Prof. Whitley pointed out, that:</p>
                    <p> -  In general, it can be worked out who is doing what by detecting patterns</p>
                    <p> -  In terms of Contact Tracing it can be determined who was in contact even if the information is anonymized […]</p>
                    <p> -  Anonymization is not really doing much since you can do much identification with metadata</p>
                    <p>He however assured us, that “with COVID tracking, anonymization is not the thing I worry about and it works largely to specification. Attacks would have to be very targeted and there are probably easier ways to find tracking data on someone if anyone really wanted to do so.”</p>
                </div>
                <div className="page--bib">Perez, B., Musolesi, M., & Stringhini, G. (2014). You Are Your Metadata: Identification and Obfuscation of Social Media Users using Metadata Information. ArXiv [Cs.CR], 1–11. https://arxiv.org/pdf/1803.10133.pdf</div>
            </div>
            <Q2Act isOpen={open} close={setOpen}/>
            <Arrows from="/q1" to="/q3" from_name={<><span style={{color: "darkred"}}>Q1: </span>Trusting surveillance</>} to_name={<><span style={{color: "darkred"}}>Q3: </span>Garbage In, Garbage Out</>} />
        </>
    )
}
