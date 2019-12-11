// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    bitHandle = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
            })
        }

        resHandle = () => {
            this.setState({
                settings: {
                    ...this.state.settings,
                    video: {
                    ...this.state.settings.video,
                     resolution: '720p'
                    }
                }
            })
        }
    

    render() {
        return (
            <div>
            <button className="bitrate" onClick={this.bitHandle}>bitrate</button>
            <button className="resolution" onClick={this.resHandle}> {this.state.settings.video.resolution}</button>
            </div>
        )
    }

}