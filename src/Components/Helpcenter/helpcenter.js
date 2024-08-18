import { Component } from "react";
import "./helpcenter.css";
import axios from "axios";
import Card from "../CardItem/cards";

class HelpCenter extends Component {
  state = { searchValue: "", listData: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5000/cards")
      .then((res) => this.setState({ listData: res.data }))
      .catch((e) => console.log(e));
  }
  render() {
    const { listData, searchValue } = this.state;
    const filterData = listData.filter((val) =>
      val.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="app-container">
        <div className="search-container">
          <p>How can we help?</p>
          <input
            type="search"
            placeholder="Search...."
            onChange={(e) => this.setState({ searchValue: e.target.value })}
          />
        </div>
        <div className="cards-container">
          <ul className="card-list-container">
            {filterData.length > 0 ? (
              filterData.map((item) => <Card key={item._id} data={item} />)
            ) : (
              <p className="Error-msg">No Data available</p>
            )}
          </ul>
          <div className="footer-card">
            <div className="footer-container">
              <h1>Abstract</h1>
              <div className="footer-description">
                <p>Branches</p>
              </div>
            </div>
            <div className="footer-container">
              <h1>Resources</h1>
              <div className="footer-description">
                <p>Blog</p>
                <p>Help Center</p>
                <p>Release Notes</p>
                <p>Status</p>
              </div>
            </div>
            <div className="footer-container">
              <h1>Community</h1>
              <div className="footer-description">
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Dribble</p>
                <p>Podcast</p>
              </div>
            </div>
            <div className="footer-container">
              <h1>Company</h1>
              <div className="footer-description">
                <p>About Us</p>
                <p>Carrers</p>
                <p>Legal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpCenter;
