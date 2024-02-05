function FoodListItem({ item }) {
  const { imgUrl, title, calorie, content } = item;

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
    </div>
  );
}

const Reviewlist = ({ items }) => {
  console.log(items);
  return <ul>{items.map((item) => (<li><FoodListItem item = {item}/></li>))}</ul>;
};

export default Reviewlist;
