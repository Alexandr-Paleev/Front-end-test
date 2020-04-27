import React from 'react'

export default function Message() {
    return (
        <div className="message">
            <div className="side">
                <div className="first"><strong>Последние отзывы</strong></div>
                <div className="second"><a href="#">Все отзывы</a></div>
            </div>
            <div className="side">
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsRidJC_XT8z0t0r4nqJF2YTxJp7xP80vCky7UPRmKxAeTXvde&usqp=CAU" alt="heart" />131</div>
                <div><img src="https://getdrawings.com/free-icon/text-message-icon-png-53.png" alt="message" />14</div>
            </div>
        </div>
    )
}
