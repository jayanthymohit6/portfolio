import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/images/profile.jpg'

class App extends Component {
state ={displayBio:false};
    
toggleDisplayBio = () => {
    this.setState({displayBio:!this.state.displayBio})
    
}
    render() {

        return (
            <div>
                <img src={profile} alt='profile' style={{height:200 ,width:200,borderRadius:100}}/>
                <h2>Hello !</h2>
                <p> I am a full stack developer.</p>
                <p> Millennium trust company </p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>
                            I love java and javascript!
        </p>
        <button onClick ={this.toggleDisplayBio}> Show Less </button>
                    </div>) : (<div><button onClick = {this.toggleDisplayBio}> read more</button></div>)
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>

        )

    }

}
export default App;