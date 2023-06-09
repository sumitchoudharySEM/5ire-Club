
import '../app/assets/css/plugins/bootstrap.min.css';
import '../app/assets/css/plugins/lightgallery.min.css';
import '../app/assets/css/plugins/slick.css';
import '../app/assets/css/plugins/lightgallery.min.css';
import '../app/assets/css/plugins/animate.css';
import '../app/assets/css/style.css';
import '../styles/index.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GenProvider } from '../app/components/extras/contexts/genContext'
import Web3Provider from "ethers";
import AuthProvider from '../app/components/extras/contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <GenProvider>
            <Component {...pageProps} />
        </GenProvider>
      </AuthProvider>
  );
}

export default MyApp;
