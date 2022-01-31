import React from "react";
import "./Static.css";
import Text from "../../components/Text/Text";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const Static = () => {
  return (
    <div className="static">
      <div className="staticOne">
        <Text
          heading="Heading 1"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, cupiditate ullam dolore harum iste non exercitationem molestias veniam sapiente amet in consectetur illo maiores provident fugiat voluptatem a, sint et. Ut ipsam totam porro architecto corrupti optio laboriosam cumque, magni rem facilis, dolores unde harum culpa obcaecati est animi consequuntur nesciunt non ea quae blanditiis earum distinctio nostrum dolorem. Quos sint dolorum dolor dignissimos officiis beatae, ratione voluptas nulla eveniet soluta laboriosam natus cum possimus? Est, laboriosam optio doloribus quidem hic fuga minus molestiae? Facere facilis obcaecati eius sunt expedita voluptate vero numquam delectus, accusantium reprehenderit assumenda nam vel officiis omnis atque fuga eos qui totam maxime, ut reiciendis. Sunt ducimus neque assumenda repellat quae ratione cumque ullam quis?"
        />
      </div>
      <div className="staticTwo">
        <HomeCarousel />
      </div>
      <div className="staticThree">
        <Text
          heading="Heading 2"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates, cupiditate ullam dolore harum iste non exercitationem molestias veniam sapiente amet in consectetur illo maiores provident fugiat voluptatem a, sint et. Ut ipsam totam porro architecto corrupti optio laboriosam cumque, magni rem facilis, dolores unde harum culpa obcaecati est animi consequuntur nesciunt non ea quae blanditiis earum distinctio nostrum dolorem. Quos sint dolorum dolor dignissimos officiis beatae, ratione voluptas nulla eveniet soluta laboriosam natus cum possimus? Est, laboriosam optio doloribus quidem hic fuga minus molestiae? Facere facilis obcaecati eius sunt expedita voluptate vero numquam delectus, accusantium reprehenderit assumenda nam vel officiis omnis atque fuga eos qui totam maxime, ut reiciendis. Sunt ducimus neque assumenda repellat quae ratione cumque ullam quis?"
        />
      </div>
    </div>
  );
};

export default Static;
