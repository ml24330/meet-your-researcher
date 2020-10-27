import React from 'react';
import Arrows from '../components/Arrows';
import q3_1 from '../media/q3_1.jpeg';
import q3_2 from '../media/q3_2.jpeg';
import Collapse from '../components/Collapse';

export default function RQ3() {
    return (
        <div>
            <div className="page-title"><span style={{color: "darkred"}}>Q3: </span>Garbage In, Garbage Out</div>
            <div className="page--content">
                <div className="page--paragraph">
                    <p>Organizations are progressively becoming more reliant on algorithms, for their ability to analyse large amounts of data, and transform that data into valuable information. However, the quality of the information that the algorithms generate depends mainly on the quality of the data that they analyse, which means that if the inputs are incorrect, the outputs will be faulty.</p>
                </div>
                <div className="page--img">
                    <img src={q3_1} alt="q3_1" />
                </div>
                <div className="page--img-desc">
                    <p>Garbage In, Garbage Out</p>
                </div>
                <div className="page--paragraph">
                    <p>Therefore, the challenge for companies is to avoid the “Garbage In - Garbage Out” failure. But this is not always as easy as it may seem.</p>
                    <Collapse title="Algorithm problems" color="lightgreen">
                        <p>A recent example is The Apple credit card. In 2019, Apple was accused of sex discrimination when a married couple with similar incomes noticed that the husband was entitled to twenty times more credit than the wife. Apple claimed that its algorithm was programmed not to discriminate on genders, by not using gender as an input. But just because an algorithm is based on certain data does not automatically make it neutral. In fact, the algorithm was biased against women because it used other inputs that correlate with genders, such as shopping patterns and so on. Worse yet, being “blind” to gender made it even harder for Apple to find the variable and reverse the bias on that variable.</p>
                        <p>Other big-tech companies like Google, IBM, Microsoft, or even Amazon experienced similar issues, with for instance racist autocomplete algorithms or facial recognition programmes that recognized better men than women and white people than people from other races.</p>
                    </Collapse> 
                    <Collapse title="Garbage data" color="lightgreen">
                        <p>Furthermore, as people are always more connected, companies try to capture data directly from the people. But this information does not necessarily reflect the truth as people have much leeway to fake their user-entered data. This raises another issue for data analytics, as most of this data is likely to be “garbage”. For example, many e-commerce sites recommend personalized items depending on user-entered data. If a consumer claims to be 45 years old on the website, while he is actually 18, it is impossible for the companies to detect that, and they would then recommend him what 45-year-old people are most likely to like.</p>
                    </Collapse>
                    <p>Dr Whitley believes that understanding the capacity of AI and its possible mistakes is crucial to get the most out of it. “That means appreciating its limitations as much as its potential”. </p>
                </div>
                <div className="page--img">
                    <img src={q3_2} alt="q3_2" />
                </div>
                <div className="page--bib">
                    <p>AI and Business: what you put in shapes what you get out – March. 12th, 2020 – by Edgar Whitley</p>
                    <p>Apple Card Investigated After Gender Discrimination Complaints – The New York Times – Nov. 10th, 2019 by Neil Vigdor</p>
                </div>
            </div>
            <Arrows from="/q2" to="/q4" from_name={<><span style={{color: "darkred"}}>Q2: </span>Anonymization and metadata</>} to_name={<><span style={{color: "darkred"}}>Q4: </span>Data protection laws</>} />
        </div>
    )
}
