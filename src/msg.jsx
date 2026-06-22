function Message({ userName, textColor }) {
  //   let styles = { color: textColor };

  return (
    <>
      <h2 style={{ color: textColor }}>hello, {userName}</h2>
    </>
  );
}

export default Message;
