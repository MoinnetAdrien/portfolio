import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Pricing from '../components/Prices/Pricing';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Services from '../components/Services/Services';

const Home = () => {
  return (
    <Layout id="home">
      <Section grid row>
        <Hero />
        <BgAnimation />
      </Section>
      <Services/>
      <Projects />
      <Pricing/>
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
