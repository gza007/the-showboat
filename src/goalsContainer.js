import React, { Fragment } from 'react';
import GoalCard from './goalCard';
import './styles/goalsContainer.css';
import Loader from 'react-loader-spinner';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MenuBar from './menuBar';



library.add(faArrowLeft, faArrowRight);

const apiKey = `${process.env.REACT_APP_API_KEY}`
//'AIzaSyALQKUbE2A6kTaLwuoM_izlhXWPCyd9Ni0'; 
// old API `AIzaSyBdi5Q3kByqWn-UYNznAvsZMu_Bs5YGWPs`;
const channelID = 'UCn4VbFTUFSxoQjTBHsuqkLQ';
// old Channel ID `UCXDkshUQ8OFJjz2BKGjt-KQ`;
const playlistIDsURL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=`;
const playlistItemsURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=`
const videoDetailsURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`
let thumbnailBaseURL = "https://img.youtube.com/vi/"

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMonth: "September",
      playlistInfo: {},
      novemberVideoList: {},
      novemberVideoDetails: {},
      novemberVideosHere: false,
      octoberVideoList: {},
      octoberVideoDetails: {},
      octoberVideosHere: false,
      septemberVideoList: {},
      septemberVideoDetails: {},
      septemberVideosHere: false,
      // eslint-disable-next-line react/no-unused-state
      isError: false,
    };
  }

  changeMonthLeft = () => {
    if (this.state.displayMonth = "September")  {
      this.setState({
        displayMonth: "November"
      });
    } else if (this.state.displayMonth = "November") {
      this.setState({
        displayMonth: "October"
      });
    } else
      this.setState({
        displayMonth: "September"
      });
  };

  changeMonthRight = () => {
    if (this.state.displayMonth = "November")  {
      this.setState({
        displayMonth: "September"
      })
    } else if (this.state.displayMonth = "September") {
      this.setState({
        displayMonth: "October"
      });
    } else if (this.state.displayMonth = "October") {
      this.setState({
        displayMonth: "November"
      });
    }
  };

  getData = () => {
    fetch(`${playlistIDsURL}${channelID}&key=${apiKey}&maxResults=50`)
      .then((res) => res.json())
      .then(data => {
        this.setState({ playlistInfo: data })
        fetch(`${playlistItemsURL}${data.items[0].id}&key=${apiKey}`)
      .then((res2) => res2.json())
      .then(data2 => {
        this.setState({ novemberVideoList: data2 });
        fetch(`${videoDetailsURL}${data2.items[0].snippet.resourceId.videoId}%2C${data2.items[1].snippet.resourceId.videoId}%2C${data2.items[2].snippet.resourceId.videoId}%2C${data2.items[3].snippet.resourceId.videoId}%2C${data2.items[4].snippet.resourceId.videoId}%2C${data2.items[5].snippet.resourceId.videoId}%2C${data2.items[6].snippet.resourceId.videoId}%2C${data2.items[7].snippet.resourceId.videoId}&key=${apiKey}`)
        .then((res3) => res3.json())
        .then(data3 => {
          this.setState({ novemberVideoDetails: data3})
          this.setState({ novemberVideosHere: true })          
          fetch(`${playlistItemsURL}${data.items[1].id}&key=${apiKey}`)
          .then((res4) => res4.json())
          .then(data4 => {
            this.setState({ octoberVideoList: data4 });
            fetch(`${videoDetailsURL}${data4.items[0].snippet.resourceId.videoId}%2C${data4.items[1].snippet.resourceId.videoId}%2C${data4.items[2].snippet.resourceId.videoId}%2C${data4.items[3].snippet.resourceId.videoId}%2C${data4.items[4].snippet.resourceId.videoId}%2C${data4.items[5].snippet.resourceId.videoId}%2C${data4.items[6].snippet.resourceId.videoId}%2C${data4.items[7].snippet.resourceId.videoId}&key=${apiKey}`)
        .then((res5) => res5.json())
        .then(data5 => {
          this.setState({ octoberVideoDetails: data5})
          this.setState({ octoberVideosHere: true })
          fetch(`${playlistItemsURL}${data.items[2].id}&key=${apiKey}`)
          .then((res6) => res6.json())
          .then(data6 => {
            this.setState({ septemberVideoList: data6 });
            fetch(`${videoDetailsURL}${data6.items[0].snippet.resourceId.videoId}%2C${data6.items[1].snippet.resourceId.videoId}%2C${data6.items[2].snippet.resourceId.videoId}%2C${data6.items[3].snippet.resourceId.videoId}%2C${data6.items[4].snippet.resourceId.videoId}%2C${data6.items[5].snippet.resourceId.videoId}%2C${data6.items[6].snippet.resourceId.videoId}%2C${data6.items[7].snippet.resourceId.videoId}&key=${apiKey}`)
        .then((res7) => res7.json())
        .then(data7 => {
          this.setState({ septemberVideoDetails: data7})
          this.setState({ septemberVideosHere: true })
            })
          })
        })
      })
    })
  })
})
      .catch(() => {  
        // eslint-disable-next-line react/no-unused-state
        this.setState({ isError: true });
      });
  };
  
  componentDidMount() {
    this.getData();
  }

  render() {
      if (this.state.novemberVideosHere === false || this.state.octoberVideosHere === false || this.state.septemberVideosHere === false) {
        return (
        <div className= "loading-header">
          <div className="loading-wrap">
            <Loader className="loading-icon" type="Grid" color="white" height={80} width={80} />
            <br></br>
            <span className="load-text">LOADING</span>
          </div>
        </div>

        )
      } else { 
        let goalsToDisplay = "";
        if (this.state.displayMonth === "September") {
          goalsToDisplay = this.state.septemberVideoDetails.items;
        }
        else if (this.state.displayMonth === "October") {
          goalsToDisplay = this.state.octoberVideoDetails.items;
        }
        else {
          goalsToDisplay = this.state.novemberVideoDetails.items;
        }
        
      return (
        <Fragment>
           <MenuBar />
          <div className="goals">
          <div className="header-wrapper">
            <FontAwesomeIcon icon="arrow-left" className="arrow-icon" onClick={this.changeMonthLeft}/>
            <span className="month">{this.state.displayMonth} 2019</span>
            <FontAwesomeIcon icon="arrow-right" className="arrow-icon" onClick={this.changeMonthRight}/>
          </div>
            {goalsToDisplay.sort((a, b) => (b.statistics.likeCount) - (a.statistics.likeCount)).map((goal, index) => {
              return (
                <GoalCard 
                key={goal.id}
                goal={goal}
                rank={index+1}
                thumbnail={`${thumbnailBaseURL}${goal.id}/0.jpg`}
                />  
               )
            })};
          </div>
        </Fragment>
      );
    }
  }
}
export default Goals;
