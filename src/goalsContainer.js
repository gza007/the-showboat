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
const channelID = 'UCn4VbFTUFSxoQjTBHsuqkLQ';
const playlistIDsURL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=`;
const playlistItemsURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=`
const videoDetailsURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`
let thumbnailBaseURL = "https://img.youtube.com/vi/"

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTitles: [],
      displayMonth: "PL Nov 19",
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
  console.log("one", this.state.displayMonth)

  if (this.state.displayMonth === "PL Nov 19") {
    this.setState({
      displayMonth: "PL Oct 19"
    })
  } else if (this.state.displayMonth === "PL Sep 19") {
      this.setState({
        displayMonth: "PL Nov 19"
      })
    }
    else if (this.state.displayMonth === "PL Oct 19"){
      this.setState({
        displayMonth: "PL Sep 19"
      })
    }
  console.log("two", this.state.displayMonth)
  }


changeMonthRight = () => {
  if (this.state.displayMonth === "PL Nov 19") {
    this.setState({
      displayMonth: "PL Oct 19"
    })
  } else if (this.state.displayMonth === "PL Oct 19") {
      this.setState({
        displayMonth: "PL Nov 19"
      })
    }
  }

  getData = () => {
    fetch(`${playlistIDsURL}${channelID}&key=${apiKey}&maxResults=50`)
      .then((res) => res.json())
      .then(data => {
        this.setState({ 
          playlistInfo: data,
          playlistTitles: data.items.map(x => x.snippet.title)
         })
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
            fetch(`${videoDetailsURL}${data4.items[0].snippet.resourceId.videoId}%2C${data4.items[1].snippet.resourceId.videoId}%2C${data4.items[2].snippet.resourceId.videoId}%2C${data4.items[3].snippet.resourceId.videoId}%2C${data4.items[4].snippet.resourceId.videoId}%2C${data4.items[5].snippet.resourceId.videoId}&key=${apiKey}`)
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
      } 
      
      else { 
        let goalsToDisplay = "";
        if (this.state.displayMonth === "PL Nov 19") {
            goalsToDisplay = this.state.novemberVideoDetails.items;
          }
        else if (this.state.displayMonth === "PL Oct 19") {
          goalsToDisplay = this.state.octoberVideoDetails.items;
        }
        else {
          goalsToDisplay = this.state.septemberVideoDetails.items;
        }
        // else if (this.state.displayMonth === "PL Aug 19") {
        //   goalsToDisplay = this.state.augustVideoDetails.items;
        // }
        // else if (this.state.displayMonth === "PL Apr 19") {
        //   goalsToDisplay = this.state.aprilVideoDetails.items;
        // }
        // else if (this.state.displayMonth === "PL Mar 19") {
        //   goalsToDisplay = this.state.marVideoDetails.items;
        // }
        
      return (
        <Fragment>
           <MenuBar />
          <div className="goals">
          <div className="header-wrapper">
            <FontAwesomeIcon icon="arrow-left" className="arrow-icon" onClick={this.changeMonthLeft}/>
            <span className="month">{this.state.displayMonth.substring(3)}</span>
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
