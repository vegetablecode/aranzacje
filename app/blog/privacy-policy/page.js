import Metadata from 'common/components/layout/Metadata';

const Page = () => {
  return (
    <div className="prose text-left">
      <Metadata />
      <h1>Privacy Policy for Decoratly</h1>
      <div>Effective Date: October 17, 2023</div>

      <div>Decoratly - Turn photos into interior designs</div>

      <p>
        Welcome to Decoratly! This Privacy Policy outlines how we collect, use,
        and protect your data when you use our website at
        https://www.decoratly.com and our services, including our Stripe
        application.
      </p>

      <p>
        Data Collection <br />
        We may collect the following user data for the purposes of order
        processing and service use:
        <br />
        Name: We collect your name to personalize your user experience and for
        order processing. <br />
        Email: Your email is collected for communication purposes and to send
        important service updates.
        <br />
        Payment Information: We collect payment information to process
        transactions and provide our services.
        <br />
        Stripe Data: Some Stripe-related data may be collected to enhance the
        functionality of our services.
        <br />
        Non-Personal Data Collection
      </p>

      <p>
        We may use web cookies to collect non-personal data for analytics and to
        optimize your experience. You can manage your cookie preferences through
        your browser settings.
      </p>

      <p>
        Data Sharing <br />
        We do not share your data with any other parties. Your privacy is
        important to us, and we ensure that your information remains
        confidential.
      </p>

      <p>
        Children's Privacy <br />
        We do not knowingly collect data from individuals under the age of 18.
        Our services are intended for adult users.
      </p>

      <p>
        Updates to Privacy Policy <br />
        We may update this Privacy Policy as needed to reflect changes in our
        services or to comply with legal requirements. Users will be informed of
        significant updates via email. Continued use of our services after
        receiving notice of these changes indicates your acceptance of the
        revised Privacy Policy.
      </p>

      <p>
        Contact Us <br />
        If you have any questions or concerns regarding this Privacy Policy or
        our data practices, please contact us at decoratlyapp@gmail.com.
      </p>

      <p>Thank you for using Decoratly - your personal AI interior designer.</p>
    </div>
  );
};

export default Page;
