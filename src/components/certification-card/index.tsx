import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
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
          <div className="font-medium">
            <a target="_blank" rel="noreferrer">
              {skeleton({
                widthCls: 'w-6/12',
                heightCls: 'h-4',
                className: 'my-1.5',
              })}
            </a>
          </div>
          <h3 className="mb-4 font-normal">
            {skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          </h3>
          <div className="divider"></div>
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
              <span className="text-base-content opacity-70">
                Certification
              </span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l-2 border-base-300 border-opacity-50 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {certifications.map((certification, index) => (
                  <li className="mb-5 ml-4" key={index}>
                    <div
                      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
                      style={{ left: '-4.5px' }}
                    ></div>
                    <div className="my-0.5 text-xs">{certification.year}</div>
                    {certification.logo && (
                      <LazyImage
                        src="../../src/assets/monash_university_logo1.png"
                        alt={'thumbnail'}
                        placeholder={skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                        style={{
                          maxWidth: '10%',
                          float: 'left',
                          marginRight: '5%',
                          backgroundColor: 'white',
                        }}
                      />
                    )}
                    <div className="font-medium">
                      <a
                        href={certification.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {certification.name}
                      </a>
                    </div>

                    <h3 className="mb-4 font-normal">{certification.body}</h3>
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

export default CertificationCard;
