import { NextSeo } from 'next-seo';
import { tw, css } from 'twind/css';
import Page from '@/components/page';
import Footer from '@/components/footer';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />

      <main>
        <div className={tw(headerStyle)}>
          <h1>Heelo detail</h1>
        </div>
      </main>
      <Footer />
    </Page>
  );
}
