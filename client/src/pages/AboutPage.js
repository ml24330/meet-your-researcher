import React from 'react';
import Arrows from '../components/Arrows';
import prof from '../media/prof.jpg';
import Collapse from '../components/Collapse';

export default function AboutPage() {
    return (
        <div>
            <div className="page-title">Meet Your Researcher Group 21</div>
            <div className="page-content">
                <img className="page-img" src={prof} alt="Dr Edgar Whitley" width={200} />
                <div className="page-img-desc">Dr Edgar Whitley</div>
                <div className="page-text">Dr Edgar Whitley...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget quam sed nisl tincidunt blandit. Sed ut lacinia erat, eget commodo lorem. Sed interdum massa vitae libero mollis dignissim sed in dui. Suspendisse tempor interdum nisi eu porta. Morbi dignissim nisl augue, ac accumsan erat efficitur et. Etiam vitae malesuada turpis. Sed cursus eu ligula sit amet euismod. Aliquam fermentum, mi in congue interdum, massa elit porttitor mi, non pharetra neque leo ut nisi. Maecenas purus ipsum, porttitor quis gravida quis, scelerisque nec tellus. Aliquam commodo mauris a gravida maximus. Sed urna leo, consequat sed aliquet condimentum, ultricies at felis.
                </div>
            </div>
            <Arrows to="/tasks" to_name="Daily tasks"/>
        </div>
    )
}
