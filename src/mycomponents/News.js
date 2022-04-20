import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }
  async handle() {
      this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb47cc3343994fa9a1e4725867e1a217&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    // this.setState({
    //     loading : true
    // })

    let data = await fetch(url);
    this.props.setProgress(30);
    let ParsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: ParsedData.articles,
      totalResults: ParsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount(){
      this.handle();
  }

//   handleNext = async ()=>{
//      this.setState({
//          page : this.state.page +1
//      })
//      this.handle();
//   }

//   handlePrevious = async () => {
//     this.setState({
//       page: this.state.page - 1,
//     });
//     this.handle();
//   };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb47cc3343994fa9a1e4725867e1a217&page=${this.state.page}&pageSize=${this.props.pagesize}`;

    let data = await fetch(url);
    let ParsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(ParsedData.articles),
      totalResults: ParsedData.totalResults,
    });
  };
  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px" }}>
          NewsMonkey Top - Headlines
        </h2>

        {/* {this.state.loading && <Loading />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Loading />}  
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      author={element.author}
                      source={element.source.name}
                      date={element.publishedAt}
                      title={element.title ? element.title : ""}
                      url={element.url}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.hindustantimes.com/img/2022/01/27/1600x900/delhi_covid_hospital_treatment_1643268730220_1643268730422.jpg"
                      }
                      desc={element.description ? element.description : ""}
                    />
                  </div>
                );
              })}
              <div></div>
            </div>{" "}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
