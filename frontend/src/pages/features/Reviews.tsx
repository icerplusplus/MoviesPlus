import React from "react"
import { format as timeFormat } from 'timeago.js';
import { CommentType } from "../../utils/type";

interface ReviewsProps {
    comments: CommentType[];
}

export const Reviews: React.FC<ReviewsProps> = ({ comments }) => {
    if (comments.length === 0) return;
    return (
        <div className="anime__details__review">
            <div className="section-title">
                <h5>Reviews</h5>
            </div>
            {comments.map(comment => (
                <div key={comment.id} className="anime__review__item">
                    <div className="anime__review__item__pic">
                        <img src={comment.user.avatar} alt="" />
                    </div>
                    <div className="anime__review__item__text">
                        <h6>{comment.user.fullname} - <span>{timeFormat(comment.createdAt)}</span></h6>
                        <p>
                            {comment.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Reviews