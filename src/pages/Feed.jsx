import React, { useContext, useEffect, useState } from 'react';

import { Context } from "../context/contextApi";
import LeftNav from "../components/LeftNav";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${currentPage}`);
      const { data,} = await response.json();
      setData(data.posts);
      // console.log(data);
      setTotalPages(4);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data.map((item, index) => {
              return (
                // console.log(item)
                <VideoCard key={item.postId} video={item} index={index} />
              );
            })}
        </div>
        <div className="flex justify-center my-4">
        <button
          className="px-4 py-2 mr-2 rounded bg-blue-500 text-white"
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 ml-2 rounded bg-blue-500 text-white"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  )
}

export default Feed