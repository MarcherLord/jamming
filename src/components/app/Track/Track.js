import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    const track = this.props.track;
    const onAdd = this.props.onAdd;
    return onAdd(track);
  }

  removeTrack() {
    const track = this.props.track;
    const onRemove = this.props.onRemove;
    return onRemove(track)
  }

  renderAction() {
      const action = this.props.isRemoval ? <button className = 'Track-action' onClick = {this.removeTrack}>-</button> : <button className = 'Track-action' onClick = {this.addTrack}>+</button>;
      return action;
  }

  render() {
    return(
    <div className = 'Track'>
      <div className = 'Track-information'>
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      {this.renderAction()}
    </div>
    )
  }
}
