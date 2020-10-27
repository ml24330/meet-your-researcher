import React, { useState, useEffect } from 'react';
import biden1 from '../media/hvq.jpg';
import biden2 from '../media/hvw.jpg';
import biden3 from '../media/hve.jpg';
import trump1 from '../media/srq.jpg';
import trump2 from '../media/srw.jpg';
import trump3 from '../media/sre.jpg';
import bernie1 from '../media/vaq.jpg';
import bernie2 from '../media/vaw.jpg';
import bernie3 from '../media/vae.jpg';
import tick from '../media/tick.png';
import cross from '../media/cross.png';
import trump_acc from '../media/dt_acc.jpg';
import biden_acc from '../media/jb_acc.jpg';
import bernie_acc from '../media/bs_acc.jpg';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const profiles = {
    "TRUMP": trump_acc,
    "BIDEN": biden_acc,
    "BERNIE": bernie_acc
}

export default function Q2Act({ isOpen, close }) {

    const [open, setOpen] = useState();
    const [images, setImages] = useState([]);
    const [alertMessage, setAlertMessage] = useState();
    const [currentPerson, setCurrentPerson] = useState();

    useEffect(() => {
        let _images = [
            {src: biden1, selected: false, crossed: false, from: "BIDEN"}, 
            {src: biden2, selected: false, crossed: false, from: "BIDEN"},
            {src: biden3, selected: false, crossed: false, from: "BIDEN"},
            {src: trump1, selected: false, crossed: false, from: "TRUMP"},
            {src: trump2, selected: false, crossed: false, from: "TRUMP"},
            {src: trump3, selected: false, crossed: false, from: "TRUMP"},
            {src: bernie1, selected: false, crossed: false, from: "BERNIE"},
            {src: bernie2, selected: false, crossed: false, from: "BERNIE"},
            {src: bernie3, selected: false, crossed: false, from: "BERNIE"}
        ];
        shuffleArray(_images);
        setImages(_images);
        images.map(image => {
            let img = new Image();
            img.src = image.src;
            return;
        });
        [tick, cross].map(link => {
            let img = new Image();
            img.src = link;
            return;
        });
    }, []);

    useEffect(() => {
        setOpen(isOpen);
        setCurrentPerson("TRUMP");
    }, [isOpen]);

    function selectImg(idx) {
        setImages(prevImages => {
            const newImages = prevImages.map((img, _idx) => {
                const newImg = {...img};
                if(_idx === idx){
                    newImg.selected = !newImg.selected;
                }
                return newImg;
            });
            return newImages;
        });
    }

    function handleSubmit() {
        setImages(prevImages => {
            const newImages = prevImages.map(img => {
                if(img.from === currentPerson){
                    img.selected = true;
                }else{
                    img.crossed = true;
                }
                return img;
            });
            return newImages;
        });
        if(currentPerson !== "BIDEN"){
            setAlertMessage(<div><span>These were the right and wrong choices! How many did you figure out? </span><button onClick={() => handleNextPerson(currentPerson)}>Next person</button></div>);
        }else{
            setAlertMessage(<div><span>These were the right and wrong choices! How many did you figure out? </span><button onClick={() => handleNextPerson(currentPerson)}>Close modal</button></div>)
        }
    }

    function handleNextPerson(current) {
        let _images = [
            {src: biden1, selected: false, crossed: false, from: "BIDEN"}, 
            {src: biden2, selected: false, crossed: false, from: "BIDEN"},
            {src: biden3, selected: false, crossed: false, from: "BIDEN"},
            {src: trump1, selected: false, crossed: false, from: "TRUMP"},
            {src: trump2, selected: false, crossed: false, from: "TRUMP"},
            {src: trump3, selected: false, crossed: false, from: "TRUMP"},
            {src: bernie1, selected: false, crossed: false, from: "BERNIE"},
            {src: bernie2, selected: false, crossed: false, from: "BERNIE"},
            {src: bernie3, selected: false, crossed: false, from: "BERNIE"}
        ];
        shuffleArray(_images);
        setImages(_images);
        switch(current){
            case "TRUMP":
                setCurrentPerson("BERNIE");
                break;
            case "BERNIE":
                setCurrentPerson("BIDEN");
                break;
            case "BIDEN":
                close(false);
                break;
            default:
                break;
        }
        setAlertMessage("");
    }

    return (
        <>
           {open && (
               <div className="modal">
                   <div className="modal-close">
                        <button onClick={() => {setOpen(false); close(false)}}>close</button>
                   </div>
                   <div className="modal-content">
                        <div className="modal-flex">
                            <div className="modal-question">
                                <img src={profiles[currentPerson]} />
                                <div className="modal-question-desc">
                                    Above are some metadata and search history for this person. Can you correctly select the tweets coming from him?
                                </div>
                            </div>
                            <div className="tweets">
                                    {images.map((img, idx) => (
                                        <div onClick={() => selectImg(idx)} className="tweet-img" key={img.src} style={{display: "inline-block", position: "relative"}}>
                                            <img src={img.src} alt={img.src} />
                                            {img.selected && <div className="img-label"><img className="tick-cross" src={tick} /></div>}
                                            {img.crossed && <div className="img-label"><img className="tick-cross" src={cross} /></div>}
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="modal-foot">
                            {!alertMessage && (<div className="modal-submit">
                                <button onClick={handleSubmit}>Submit</button>
                            </div>)}
                            {alertMessage && (<div className="modal-alert">
                                {alertMessage}
                            </div>)}
                        </div>
                   </div>
               </div>
           )} 
        </>
    )
}
