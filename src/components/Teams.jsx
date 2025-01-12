import TeamsCard from "./cards/TeamsCard";

const Teams = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-8">
      <h1 className="font-bold text-2xl">Teams</h1>
      <br />
      <p className="text-gray-500 pb-4">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-4">
      <TeamsCard msg="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu" name="John Smith" image="/assets/team1.png"/>
      <TeamsCard msg="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu" name="Elina Williams" image="/assets/team1.png"/>
      <TeamsCard msg="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu" name="John Smith" image="/assets/team1.png"/>
    
      </div>
      </div>
  );
};

export default Teams;
