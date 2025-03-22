import CardLayout from '../../Common/CardLayout';

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-5 p-8 card_stylings">
        <div className=" text-Snow text-[36px]">{data.title}</div>
        <div className="text-[24px] font-mono text-LightGray font-normal">
          {data.desc}
        </div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
