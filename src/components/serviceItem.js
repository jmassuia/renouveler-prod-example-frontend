import React from 'react';

class ServiceItem extends React.Component{
    render(){
       return(
            <div className="service-item">
                <img src={this.props.imagePath} alt=''/>
                <p>{this.props.context}</p>
            </div>
       )
    }
}

export default ServiceItem;