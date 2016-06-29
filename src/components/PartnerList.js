import React from 'react';

class PartnerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPartnerIndex: 0 };
    this.changeIndex = this.changeIndex.bind(this)
}

changeIndex(){
  let newIndex = this.state.selectedPartnerIndex + 1
  if(this.props.partners.length -1 === this.state.selectedPartnerIndex) {
    this.setState({selectedPartnerIndex: 0})
  } else {
  this.setState({selectedPartnerIndex: newIndex})
 }
}

componentDidMount(){
  setInterval(this.changeIndex, 2000);
}

  render(){
  return(
    <div className="text-center">
    <img src={this.props.partners[this.state.selectedPartnerIndex]}/>
    </div>
  )
  }
}

export default PartnerList;
