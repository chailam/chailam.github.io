import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <li className="mb-5 ml-4" key={index}>
          <div
            className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
            style={{ left: '-4.5px' }}
          ></div>
          <div className="my-0.5 text-xs">
            {skeleton({
              widthCls: 'w-5/12',
              heightCls: 'h-4',
            })}
          </div>
          {skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          <h3 className="font-semibold">
            {skeleton({
              widthCls: 'w-6/12',
              heightCls: 'h-4',
              className: 'my-1.5',
            })}
          </h3>
          <div className="mb-4 font-normal">
            {skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}{' '}
          </div>
          <div className="mb-4 font-normal">
            {skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          </div>
          <br />
        </li>,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Education</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l-2 border-base-300 border-opacity-50 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {educations.map((item, index) => (
                  <li className="mb-5 ml-4" key={index}>
                    <div
                      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                      style={{ left: '-4.5px' }}
                    ></div>
                    <div className="my-0.5 text-xs">{`${item.from} - ${item.to}`}</div>
                    {item.logo && (
                      <LazyImage
                        src={item.logo}
                        alt={'thumbnail'}
                        placeholder={skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                        style={{
                          maxWidth: '22%',
                          float: 'right',
                          marginRight: '30%',
                          backgroundColor: 'white',
                        }}
                      />
                    )}
                    <h3 className="font-semibold">{item.degree}</h3>
                    <div className="mb-4 font-normal">{item.institution} </div>
                    {item.body && (
                      <div
                        className="mb-4 font-normal"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      ></div>
                    )}
                    <div className="divider"></div>
                  </li>
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
