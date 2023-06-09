import React, { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { abbreviateNumber } from "js-abbreviation-number";
import { Context } from "../context/contextApi";
import SuggestionsVideoCard from "../components/SuggestionsVideoCard";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState();
    const { searchResults, singleVideoId } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");
        fetchVideoDetails();
    }, [singleVideoId]);

    const fetchVideoDetails = () => {
        setVideo(searchResults[singleVideoId])

    };

    // console.log(video?.submission?.mediaUrl)

    return (
        <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                        <ReactPlayer
                            url={video?.submission?.mediaUrl}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}

                        />
                            </div>
                            <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                                {video?.title}
                            </div>
                            <div className="flex justify-between flex-col md:flex-row mt-4">
                                <div className="flex">
                                    <div className="flex items-start">
                                        <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                            <img
                                                className="h-full w-full object-cover"
                                                src={video?.creator?.pic}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-3">
                                        <div className="text-white text-md font-semibold flex items-center">
                                            {video?.creator?.name}

                                        </div>
                                    </div>
                                </div>
                                <div className="flex text-white mt-4 md:mt-0">
                                    <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                        <AiOutlineLike className="text-xl text-white mr-2" />
                                        {`${abbreviateNumber(
                                            video?.reaction?.count,
                                            2
                                        )} Likes`}
                                    </div>
                                    <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                        <BiComment  className="text-xl text-white mr-2" />
                                        {`${abbreviateNumber(
                                            video?.comment?.count,
                                            2
                                        )} Comments`}
                                    </div>

                                </div>
                            </div>
                    </div>
                    <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                        {
                            searchResults.map((item, index) => {
                                return (
                                    // console.log(item)
                                    <SuggestionsVideoCard
                                        key={item.postId}
                                        video={item}
                                        index={index}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
            );
};

            export default VideoDetails;