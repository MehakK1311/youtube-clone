import { abbreviateNumber } from "js-abbreviation-number";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/contextApi";


const VideoCard = ({ video, index }) => {

    const { singleVideoId, setSingleVideoId } = useContext(Context);


    const getVideo = () => {
        setSingleVideoId(index);
    }
    // console.log(singleVideoId);
    
    return (

        <Link to={`/video/${video?.postId}`} onClick={getVideo}>
            <div className="flex flex-col mb-8">
                <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.submission?.thumbnail}
                    />
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.creator?.pic}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-bold line-clamp-2">
                            {video?.submission?.title}
                        </span>
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.creator?.name}
                        </span>
                        <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                            <span>{`${abbreviateNumber(
                                video?.reaction?.count,
                                2
                            )} reactions`}</span>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default VideoCard