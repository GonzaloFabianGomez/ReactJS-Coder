const Message = (props) => {
    return (
        <div className="alert alert-info" role="alert">
            {props.text}
        </div>
    )
}
export default Message;