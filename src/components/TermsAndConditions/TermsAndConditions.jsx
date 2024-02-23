import react, { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="section_1 flex flex-col items-center gap-3 py-8 text-white">
        <h2 className="text-4xl font-bold">Terms and Conditions</h2>
        <p>
          Please read these terms and conditions carefully before using Our
          Service.
        </p>
      </section>
      <section className="py-16 text-center">
        <article className="mx-auto max-w-3xl space-y-6 text-left">
          <h3 className="text-2xl font-semibold">1. Partnership Agreement</h3>
          <p>
            By agreeing to these terms and conditions, you enter into a
            partnership agreement with The Dubbery for the translation, editing,
            and distribution of your videos ("Content").
          </p>
          <h3 className="text-2xl font-semibold">2. Revenue Sharing</h3>
          <p>
            We agree to share 40% of the revenue generated from the monetization
            of your Content through our services. Revenue will be calculated
            based on advertising revenue, sponsorship deals, and any other forms
            of monetization generated directly from the distributed Content.
          </p>
          <h3 className="text-2xl font-semibold">
            3. Permission and Promotion
          </h3>
          <p>
            You grant The Dubbery permission to translate, edit, optimize, and
            distribute your Content across various platforms and regions. You
            also authorize us to promote our activities, including the
            distribution of your Content, on your verified page or any other
            associated platforms.
          </p>
          <h3 className="text-2xl font-semibold">4. Exclusive Partnership</h3>
          <p>
            During the term of this agreement, you agree to work exclusively
            with The Dubbery for the translation, editing, and distribution of
            your Content. You may not engage with any other service provider
            offering similar services without our prior consent.
          </p>
          <h3 className="text-2xl font-semibold">5. Content Ownership</h3>
          <p>
            You retain full ownership rights to your Content. By providing us
            with permission to translate, edit, and distribute your Content, you
            grant us a non-exclusive license to use, reproduce, and distribute
            the translated and edited versions of your Content for promotional
            and distribution purposes.
          </p>
          <h3 className="text-2xl font-semibold">6. Quality Assurance</h3>
          <p>
            We strive to provide high-quality translation, editing, and
            distribution services. However, we cannot guarantee the accuracy,
            completeness, or effectiveness of the translated or edited Content.
            You acknowledge that variations in translation and editing may occur
            and agree to work collaboratively with us to address any concerns.
          </p>
          <h3 className="text-2xl font-semibold">7. Payment Terms</h3>
          <p>
            Revenue sharing payments will be made on a monthly basis, within 5
            days following the end of each calendar month. Payments will be
            issued via your preferable method . You are responsible for
            providing accurate payment information to ensure timely and accurate
            payments.
          </p>
          <h3 className="text-2xl font-semibold">8. Termination</h3>
          <p>
            Either party may terminate this agreement with [number] days'
            written notice. Upon termination, we will cease all translation,
            editing, and distribution activities related to your Content.
            Revenue sharing payments will be calculated up to the date of
            termination and paid out accordingly.
          </p>
          <h3 className="text-2xl font-semibold">9. Governing Law</h3>
          <p>
            This agreement shall be governed by and construed in accordance with
            the laws of Your Country. Any disputes arising out of or in
            connection with this agreement shall be subject to the exclusive
            jurisdiction of the courts of Your Country.
          </p>
          <h3 className="text-2xl font-semibold">10. Acceptance of Terms</h3>
          <p>
            By accessing or using our services, you agree to be bound by these
            terms and conditions. If you do not agree with any part of these
            terms, you may not access or use our services.
          </p>
        </article>
      </section>
    </main>
  );
}
