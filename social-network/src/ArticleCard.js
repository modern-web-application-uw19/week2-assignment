import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default class ArticleCard extends React.Component {
    render() {
        return (
            <div id="ArticleCard">
                <Card style={{ width: 35 + 'rem', height: 20 + 'rem',  marginTop:'2rem', marginLeft:'2rem', marginBottom:'2rem', display: 'flex', flexDirection: 'row', flex: 1}}>
                    <Card.Img style={{ width : 15 + 'rem', objectFit: 'cover'}}src="https://cdn-images-1.medium.com/max/800/1*PIC-U670COEqmGwt4cvXAA.jpeg" />
                    <Card.Body style= {{ width: 15 + 'rem' }}>
                        
                        <Card.Title>The 7 Habits of Highly Creative People</Card.Title>                       
                        <Card.Text>
                            "What a good artist understands is that nothing comes from nowhere. Nothing is completely original."
                        </Card.Text>
                        <br />
                        <br />            
                        <div>
                            <p style={{float: "left"}}>
                                <Image src="https://cdn-images-1.medium.com/fit/c/80/80/1*NGHEMBPNbIQmmAkvCjaspA.jpeg" fluid thumbnail roundedCircle />
                            </p>
                            <p>
                                <Card.Text>
                                    Louis Chew
                                </Card.Text>
                                <Card.Text>
                                    Apr 4 . 8 min read
                                </Card.Text>
                            </p>
                        </div>
                       
                    </Card.Body>
                </Card>
            </div>
        );
    }
}