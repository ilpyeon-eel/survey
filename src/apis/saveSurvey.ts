import client from './clients';

type saveSurveyProps = {
  country: string;
  ageGroup: string;
  numberOfPeopleGroup: string;
  referralPaths: string[];
};

export const saveSurveyAPI = async ({
  country,
  ageGroup,
  numberOfPeopleGroup,
  referralPaths,
}: saveSurveyProps) => {
  try {
    const res = await client.post('/surveys', {
      country,
      ageGroup,
      numberOfPeopleGroup,
      referralPaths,
    });
    return res.data;
  } catch (err) {
    console.log('err: ', err);
  }
};
