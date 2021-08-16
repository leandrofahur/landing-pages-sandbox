import { FirstAndSecond } from '../components/FirstAndSecond';
import { Main, Section, Sticky } from './styles';

export default function Home() {
  return (
    <>
      <Main>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}
