import 'styles/global.css';

import Head from './head';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { personalDetails, projectDetails } from 'shared/utils/consts';
import Navbar from './components/ui/Navbar';
import SocialBar from './components/ui/SocialBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <Head />
      <body>
        <Navbar />
        <SocialBar />
        {children}
      </body>
    </html>
  );
}
