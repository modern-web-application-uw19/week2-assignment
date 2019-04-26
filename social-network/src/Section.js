import React from 'react';
import CardForYou from './CardForYou';
import CardMissedIt from './CardMissedIt';
import Row from 'react-bootstrap/Row';

class Section extends React.Component {

    render() {
        let cardsData = this.props.data;
        let sectionName = this.props.sectionName;
        let sectionCards = null;
        
        if (sectionName==="For you") {
            sectionCards = cardsData
                            .map((cardData, idx) => <CardForYou data={cardData} key={sectionName + " " + idx}/>);
        } else if (sectionName==="In case you missed it") {
            sectionCards = cardsData
                            .map((cardData, idx) => <CardMissedIt data={cardData} key={sectionName + " " + idx}/>);
        }

        return (
            <Row className="section">
                <div>
                    <h3 className="sectionHeader">{sectionName}</h3>
                    <hr style={{color: " light gray",
                                height: .2}}
                    />
                    {sectionCards}
                </div>
            </Row>
        );
    }
}

export default Section;