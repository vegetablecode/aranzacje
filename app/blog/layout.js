import Footer from 'modules/landing/components/Footer';
import Navbar from 'modules/landing/components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full text-center px-4 sm:px-8 space-y-8 py-4">
        <Navbar />
        <div>
          <article className="mx-auto max-w-2xl py-5 flex flex-col space-y-16">
            {children}
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
