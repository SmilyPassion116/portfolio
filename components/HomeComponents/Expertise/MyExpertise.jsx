import ExpertiseCard from './ExpertiseCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import ParagraphSkeleton from '../../Common/ParagraphSkeleton';
import { isNonEmptyArray } from '../../../utils/utils';

const MyExpertise = () => {
  const { isLoading, error, data } = useQuery('expertise', () =>
    axios
      .get('api/expertise')
      .then(({ data }) => data)
      .catch((error) => console.error('Error fetching testimonials:', error))
  );

  return (
    <>
      {isNonEmptyArray(data) && (
        <>
          <div className="grid justify items-center grid-flow-row  grid-rows-auto gap-4 ">
            {isLoading
              ? [1, 2, 3, 4, 5, 6].map(() => (
                  <ParagraphSkeleton className={'space-y-2 p-8'} />
                ))
              : data?.map((data, key) => (
                  <ExpertiseCard key={key} data={data} />
                ))}
          </div>
        </>
      )}
    </>
  );
};

export default MyExpertise;
