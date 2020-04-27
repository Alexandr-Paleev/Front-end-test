import React from 'react'
import AddMessage from './AddMessage';

export default function ListMessage() {
    const [messages, setMessages] = React.useState([
        {id: 1, name: "Самуил", date: "13 октября 2011", message: "Привет, Верунь! ниче себе ты крутая. фотка сласс!!!"},
        {id: 2, name: "Лилия Семеновна", date: "14 октября 2011", message: "Вероника здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинитический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?"},
        {id: 3, name: "Лилия Семеновна", date: "14 октября 2011", message: "Вероника здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинитический момент?"}
    ])

    function addCommit(message) {
        setMessages(messages.concat([{
            message,
            id: Date.now(),
            name: "Автор",
            date: new Date().toLocaleDateString()
        }]))
    }

    return (
        <div className="listMessage">
            <ul>
            
                {messages.map((message, index) => {
                    return (
                    <div key={message.id}>
                        <li>
                        <h3>{message.name}<span> {message.date}</span></h3>
                        <textarea className="oldMessage">{message.message}</textarea>
                        </li>                        
                    </div>
                    )
                })}
            </ul>
            <div>
                <AddMessage onCreate={addCommit} />
            </div>
        </div>
    )
}
