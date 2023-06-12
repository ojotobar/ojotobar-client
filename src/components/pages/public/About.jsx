import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useGetPersonalInfoQuery, useGetUserStatsQuery } from '../../../features/api/userApi';
import { useGetUserEducationQuery } from '../../../features/api/educationApi';
import { useGetUserSkillsQuery } from '../../../features/api/skillApi';
import CustomSpinner from '../../common/CustomSpinner';
import Info from './Info';
import Stats from './Stats';
import Skill from './Skill';
import Education from './Education';
import { useGetUserExperienceQuery } from '../../../features/api/experienceApi';
import Experience from './Experience';

const About = () => {
  const { userId } = useSelector((state) => state.auth);
  const { data: stats, isLoading } = useGetUserStatsQuery(userId);
  const { data: info, isLoading: isInfoLoading } = useGetPersonalInfoQuery(userId);
  const { data: educations, isLoading: isEduLoading } = useGetUserEducationQuery(userId);
  const { data: skills , isLoading: isSkillLoading} = useGetUserSkillsQuery(userId);
  const { data: experiences, isLoading: isExpLoading } = useGetUserExperienceQuery(userId);

  return (
    <Container fluid className='about py-5'>
      { /* About Section */ }
      <h1 className="heading"> about <span>me</span></h1>
      { isLoading || isInfoLoading || isEduLoading || isSkillLoading || isExpLoading ?
        <CustomSpinner /> :
        <>
          <Row className='Row'>
            <Col className='info p-5'>
              <h1>personal info</h1>
              <Info stats={stats} info={info} />
            </Col>
            <Col className="count-container p-5">
              <Stats stats={stats} />
            </Col>
          </Row>
          { /* Skills Section */ }
          <Row className='skills'>
            <h1 className="heading"><span>my </span>skills</h1>
            <Row className="box-container m-0 px-5">
              { skills && skills.map(skill => (
                <Skill skill={skill} />
              ))}
            </Row>
          </Row>
          { /* Experience Section */}
          <Row className='education'>
            <h1 className="heading"><span>work</span> Experience</h1>
            <Row className="box-container m-0 px-5">
              { experiences && experiences.map(exp => (
                <Experience exp={exp} />
              ))}
            </Row>
          </Row>
          { /* Education Section */ }
          <Row className="education">
            <h1 className="heading"><span>my</span> Education</h1>
            <Row className="box-container m-0 px-5">
              { educations && educations.map(edu => (
                <Education edu={edu} />
              ))}
            </Row>
          </Row>
        </>
      }
    </Container>
  )
}

export default About