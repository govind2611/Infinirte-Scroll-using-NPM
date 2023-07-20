import React, { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 3000);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div className="app">
      <h3>Infinite Scroll</h3>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div class="loader"></div>}
        endMessage={<p className="wrapper"> You are all set, Data has been ended</p>}
        height={550}
      >
        {dataSource.map((item, index) => {
          return (
            <div className="wrapper">
              This is a div #{index + 1} inside infinite scroll
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default App;
