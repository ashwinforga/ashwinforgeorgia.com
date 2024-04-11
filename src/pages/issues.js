import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import nsb3 from "../images/nsb3.jpeg";
import readyToWork from "../images/ready-to-work.jpg";
import atlTrains from "../images/atl-trains.jpg";
import map from "../images/atlanta-ga-location-map.jpeg";
import startups from "../images/ashwin-teaching.jpeg";
import police from "../images/police.jpeg";
import hospital from "../images/hospital.jpg";
import capitol from "../images/capitol.jpeg";
import writingClub from "../images/writing-club-cropped.jpg";

// const Issue = ({ title, img, href, children }) => (
//   <li className="usa-card tablet:grid-col-4 issue">
//     <div className="usa-card__container">
//       <div className="usa-card__header">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.75 66.87" width="30" height="30"><g dataName="Layer 2"><g fill="#002C6D" dataName="Layer 7"><path d="M34.75 47.9 15.61 28.14l6.63-6.43 12 12.38L62.65 0l7.1 5.91-35 41.99z" class="icon-check_svg__checkmark"></path><path d="m63.72 24-7.64 9.21v1A23.47 23.47 0 1 1 42.8 13.06l6-7.26a32.63 32.63 0 1 0 15 18.45Z" class="icon-check_svg__circle"></path></g></g></svg>
//         <a href={href}><h2 className="usa-card__heading">{title}</h2></a>
//       </div>
//       <div className="usa-card__body">
//         <p>
//           {/* {children}<br /><a href="/issues">Read more...</a> */}
//         </p>
//       </div>
//       <div className="usa-card__footer">
//         {children}
//       </div>
//     </div>
//   </li>
// );

const Issue = ({ title, img, href, children }) => (
  <li className="tablet:grid-col-12 issue">
    <div className="">
      <div className="">
        <a href={href}><h2 className="">{title}</h2></a>
      </div>
      <div className="">
        {children}
      </div>
    </div>
  </li>
);

const DetailedIssue = ({ title, summary, children }) => (
  <div className="tablet:grid-col-12">
    <h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.75 66.87" width="30" height="30"><g dataName="Layer 2"><g fill="#002C6D" dataName="Layer 7"><path d="M34.75 47.9 15.61 28.14l6.63-6.43 12 12.38L62.65 0l7.1 5.91-35 41.99z" class="icon-check_svg__checkmark"></path><path d="m63.72 24-7.64 9.21v1A23.47 23.47 0 1 1 42.8 13.06l6-7.26a32.63 32.63 0 1 0 15 18.45Z" class="icon-check_svg__circle"></path></g></g></svg>
      {title}</h3>
    <div>{summary}

      <details>
        <summary></summary>
        {children}
      </details>
    </div>

  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Issues" />
    <section className="grid-container usa-section issues usa-prose" style={{ backgroundImage: `url(${writingClub})` }}>
      <div className="grid-row grid-gap">
        <div className="tablet:grid-col-12">
          <ul className="issue-group">
            <img className="ready-to-work" src={readyToWork} />
            <Issue title="Building an Economy of the Future">
              I will work to make Georgia a sustainable tech hub that attracts the jobs of the future, while supporting small businesses and entrepreneurship. Every student in Georgia deserves a world-class education.</Issue>
            <Issue title="Protecting and Defending Democracy">
              In 2020, I worked day and night to protect our schools, hospitals, and elections as a nonpartisan civil servant at America’s cyber defense agency. I will protect your right to vote from election deniers and partisan extremists.</Issue>
            <Issue title="Keeping our Communities Safe">
              I know how important it is to pass common-sense gun laws to protect our families and neighborhoods. I am committed to expanding resources to support mental health and combat the opioid epidemic.</Issue>
            <Issue title="Making Healthcare Affordable to All">
              I know we can lower costs and improve care for those who need it most by expanding Medicaid, lowering drug costs, expanding affordable childcare, and supporting people with disabilities.</Issue>
            <Issue title="Protecting Reproductive Healthcare">
              In the Georgia Senate, I will fight to ensure every family has the freedom to make their reproductive healthcare decisions without government interference, from abortion care to IVF treatments.</Issue>
          </ul>
        </div>
      </div>
    </section>
    <section className="grid-container usa-section issues-2 usa-prose">
      <div>
        <h1>More Issues</h1>
        <em>Have a question on any of these issues or a topic that is not listed?</em> Send us an email at <a href="mailto:contact@ashwinforgeorgia.com">contact@ashwinforgeorgia.com</a> or open an issue on <a href="https://github.com/ashwinforga/ashwinforgeorgia.com/issues">GitHub</a>.
        <div className="grid-row grid-gap">

          <DetailedIssue title="Medicaid Expansion" summary={<>My top priority upon winning this election is expanding Medicaid. I want to start with common sense reforms that cut red tape and save taxpayers money, and Medicaid expansion achieves these goals.</>}>
            <p>Because we have not expanded Medicaid, Georgia taxpayers’ federal taxes are left on the table and are instead used to subsidize Medicaid programs in states such as California and New York. We need to make sure this money is not left on the table and is instead used to benefit Georgians. We should replace Pathways to Coverage, which is spending Georgian taxpayer money on expensive red tape that insures less Georgians, with full Medicaid expansion.</p>

            <p>Not expanding Medicaid has resulted in hospital closures across Georgia, undermined our healthcare system, and left over 400,000 Georgians uninsured. Medicaid expansion is a solution that both red and blue states have already enacted. Expansion would efficiently use the state’s resources in combination with available federal dollars to cover hundreds of thousands of Georgians and shore up our hospital system.</p>

          </DetailedIssue>

          <DetailedIssue title="Affordable Housing" summary={<>The government must combat the housing shortage. We need to expand access to workforce housing so that all members of our community can afford to live here, from nurses, teachers, retail workers, to police officers.</>}>
            <p>These reforms are important for young people so that they can have access to affordable housing, and to ensure that economic growth in one sector doesn’t mean that other parts of society are left behind. This is especially important in my district, where rising housing prices in the suburbs are making it unaffordable for many young people to live or stay here.</p>

            <p>I will work towards common-sense zoning reforms that allow more diverse types of housing, including mixed-use developments, to be built in commercial and office zones. I will also advocate for a transit-oriented development strategy around MARTA and other public transit in Metro Atlanta.</p>

            <p>I believe that we need to expand programs such as the Low-Income Housing Tax Credit (LIHTC) and amend state law to increase tenant protections, such as preventing landlords from discriminating against tenants who pay using Housing Choice Vouchers, a housing assistance program.</p>

          </DetailedIssue>

          <DetailedIssue title="Election Security" summary={<>I worked in the federal government to secure our elections in 2020 and 2022 under both Democratic and Republican presidential administrations. While Georgians should be confident in the security of their elections, I will advocate for election security reforms in the long term that are based on science and not politics.</>}>
            <p>As Trump’s own election officials <a href="https://www.vox.com/2020/11/13/21563825/2020-elections-most-secure-dhs-cisa-krebs">stated</a>, the 2020 election was the most secure in American history. Recount processes and paper trails for ballots have helped to build additional confidence in the voting systems used in 2020.</p>

            <p>In Georgia, I would support additional resources for the Secretary of State’s office and for every county that administers elections so they can have access to vulnerability scanning and cybersecurity protection staff resources, and elections audit technology. We should encourage elections to be conducted using human-readable paper ballots, as recommended by a 2018 <a href="https://www.nationalacademies.org/news/2018/09/securing-the-vote-new-report">report</a> from election security experts at the National Academies. Every step of the election process should provide access to meaningful public observation so the public can verify and understand every step of how elections work; but ballot secrecy should never be compromised. Elections offices should also continue to be able to share data about misinformation on social media unhindered, so they can inform citizens with accurate information.</p>

            <p>Ultimately, though, while we need to continue to invest in election security, the biggest threat to our elections isn’t just the threat of hackers: it’s politicians who dishonestly undermine election results. Donald Trump’s phone call to Secretary of State Brad Raffensperger to “find 11,780 votes” and my opponent Shawn Still signing false documents stating that Trump won Georgia are outrageous attempts to undermine the will of the voters and the integrity of Georgia’s election process. I am committed to accepting the election results and supporting the democratic process.</p>
          </DetailedIssue>


          <DetailedIssue title="Tech Policy and Artificial Intelligence" summary={<>As the first state senator with a computer science and law background, I want Georgians to lead the country in new developments in technology, ranging from artificial intelligence, cybersecurity, and crypto. We should build an economy of the future, encourage startup innovation, and train our workforce to deal with new technology.</>}>
            <p>Georgia should make it easier for startup innovation to happen, which may include more programs to support research and commercialization of new technologies. We need to provide every county and small business with basic essentials to help them address cybersecurity and deal with ransomware attacks. We also need to address the harms of technology by passing a data privacy law and dealing with deepfakes and misinformation caused by AI.</p>

            <p>We need to attract and create more high-paying jobs to the area, which goes hand in hand with education. The nation has a cybersecurity jobs shortage. There are tons of jobs available, but not enough people to fill them because they don’t have the right credentials or the right training. I will make sure every university in Georgia provides these skills so people can get high-paying jobs in these new industries.</p>

          </DetailedIssue>

          <DetailedIssue title="Public Education" summary={<>I want to ensure all Georgians have access to a world-class education by ensuring we pay teachers more and provide more resources for students to make education more affordable.</>}>
            <p>I’m a product of our district’s fantastic public education system, but I know we aren’t investing enough to keep it growing. Class sizes are increasing, but we’re not paying our teachers enough. We’ve cut down the HOPE Scholarship and reduced Dual Enrollment and other opportunities, even though the State of Georgia has $11 billion in surplus funds. That really means we’re not investing in the kinds of areas we need to to keep our state growing. We need to invest far more in our public education system so we can support all students who need it: not divert these funds elsewhere.</p>

            <p>I will also work to invest in our local community colleges such as Perimeter College at Georgia State University. This can prepare our students for success, regardless of which university they go to. I will ensure all high school students take required courses in civics and personal finance so that they can be prepared for being in the workforce. We also need to invest in more mental health resources for students and access to treatments to deal with the opioid epidemic.</p>

          </DetailedIssue>

          <DetailedIssue title="Reproductive Healthcare" summary={<>I firmly believe that it’s important to support a woman’s right to choose and access to abortion care and IVF treatments.</>}>
            <p>Reproductive rights is an access to healthcare issue. We not only need to protect access to abortion and IVF, but we need to provide more resources to address GA’s high maternal mortality rates.</p>
            <p>Instead of restricting access to reproductive healthcare, the government should provide support to working families. We should focus on initiatives such as tax credits with people with children, improved access to childcare and family leave, to give families the economic support and opportunities they need to succeed. Let’s focus on incentives to have families instead of heavy-handed legislation restricting abortion.</p>

          </DetailedIssue>

          <DetailedIssue title="Gun Safety" summary={<>I support commonsense gun safety legislation such as safe storage legislation and additional background checks, which respects the Second Amendment and protects communities.</>}>
            <p>I’m all for law-abiding gun owners to have and use guns, but we must protect our communities to ensure that guns don’t fall in the wrong hands. It’s easier to get a gun than it is to get a driver’s license in Georgia. We need to add basic protections such as effective background checks and red flag laws, and prioritize campus safety by reducing gun violence in schools.</p>

            <p>Guns are also often accidentally used by small children or used by others to commit suicide. We should enact safe storage legislation to create incentives for gun owners to safely store their guns, so that they are not accidentally used and cause harm.</p>

          </DetailedIssue>

          <DetailedIssue title="Government Transparency and Accountability" summary={<>We need campaign finance reform to get big money out of politics, and to prevent gerrymandering by creating independent redistricting commissions.</>}>
            <p>I do not take corporate PAC money, and I will work to ensure that only individuals, not large corporate PACs, can directly contribute to campaigns in state politics. I will work to close loopholes that allow for unlimited contributions to campaigns, such as leadership committee PACs, and reduce individual campaign contribution limits.</p>

            <p>I will work to create an independent redistricting commission for the state legislature so that incumbents cannot gerrymander their way into staying into office. We need to provide more resources and a pipeline for more technologists to join the state government, so that they can make government processes more streamlined and intuitive for the public to use. Finally, I will work to boost investments into increased ethics oversight, both for elected officials and agencies of government.</p>

            <p>We must also revise the Georgia Open Meetings Act and Open Records Act to close loopholes that allow officials to circumvent the public records requirements. For example, the Open Records Act does not apply to the General Assembly, and I will work to ensure it does apply to the General Assembly. As Justice Brandeis wrote, “Sunlight is said to be the best of disinfectants.”</p>

          </DetailedIssue>

          <DetailedIssue title="Addressing the Climate Crisis" summary={<>I plan to ensure Georgia is a leader in green energy, and that we protect the natural environment and invest in multi-model transportation and public transit.</>}>
            <p>I plan to invest in reducing regulatory and bureaucratic barriers to green energy, such as by encouraging grid sharing, and to create regulatory incentives to promote green energy such as higher fuel emission standards. I plan to encourage entrepreneurship and the venture capital ecosystem to incentivize the creation and commercialization of more green energy technologies in the United States. I am committed to using key investments in our communities to address climate change such as making our public transit system safer.</p>

            <p>It’s difficult to live in my district without a car. This disconnects and isolates our communities and makes it less accessible for those who may not have access to cars, such as children or those with disabilities, to navigate our community. I’m committed to expanding options for multi-modal transportation throughout our district, whether that includes public transit or more walkable trails and routes across our district.</p>

          </DetailedIssue>

          <DetailedIssue title="Civil Rights" summary={<>I am committed to passing a comprehensive state civil rights bill. I will advocate to include and respect everyone in the community: minorities, LGBTQ+ people, and people with disabilities.</>}>
            <p>Georgia has some of the <a target="_blank" href="https://www.acluga.org/en/press-releases/aclu-georgia-executive-director-andrea-young-applauds-report-calling-comprehensive">weakest nondiscrimination protections</a> in the nation. All Georgians deserve equal protection under the law, and I am committed to passing a comprehensive civil rights bill to ensure this is the case.</p>

            <p>I am committed to ensuring the LGBTQ+ community has full and equal rights. I will ensure we have safe schools and learning environments for LGBTQ+ youth, parental rights for LGBTQ+ couples, and adequate state funding for addressing the HIV epidemic.</p>

            <p>I will advocate for the disability community. I will work to <a target="_blank" href="https://www.motherjones.com/politics/2024/04/georgia-republicans-bipartisan-disability-workers-sub-minimum-wage/">end the subminimum wage</a>, so that workers with disabilities cannot be paid as little as $2.50 / hr for work they perform. We should expand <a target="_blank" href="https://gcdd.org/images/Blogs/2016/dd_waivers_conversion_rev_020516.pdf">funding for COMP and NOW waivers</a> to support for individuals with intellectual or developmental disabilities.</p>

          </DetailedIssue>

        </div>
      </div>
    </section>

    <section className="grid-container usa-section issues usa-prose" style={{ display: "none" }}>
      <div>
        <h1>More Details</h1>
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              <img src={map} />
              {/* https://www.mapsofworld.com/location-maps/usa/maps/atlanta-ga-location-map.jpg */}
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="economy">Economy: Let's make Metro Atlanta a sustainable tech hub for the South.</h3>
            <p>
              <ul>
                <li><strong>Establish a Metro Atlanta entrepreneurship studio</strong>, a public-private partnership to help create jobs right here and businesses in the public interest.</li>
                <li><strong>Collaborate with the federal government, investors, and philanthropy</strong> to create sustainable technology companies and organizations that work towards the social good.</li>
                <li><strong>Create high-paying jobs</strong> in the technology and public interest sector and attracting the next wave of innovation to GA: AI and digital infrastructure companies.</li>
                <li><strong>Bring high-speed Internet</strong> throughout Metro Atlanta and Georgia so that all Georgians have the right access they need.</li>
              </ul>
            </p>
          </div>
        </div>

        <hr />

        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              <img src={startups} />
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="education">Education: Let's give all Georgians access to a world-class education.</h3>
            <p>
              <ul>
                <li><strong>Require courses in civics and financial literacy</strong> for all students who graduate from high school.</li>
                {/* TODO: pay teachers more? */}
                <li><strong>Provide healthy and free meals</strong> in state schools to students who cannot afford it themselves.</li>
                <li><strong>Ensure every high school gives students a voice</strong> in governance, so that they can share what policies work best and worst for them.</li>
                <li><strong>Expand Dual Enrollment programs</strong> such as Move on When Ready and the availability of the HOPE Scholarship and Zell Miller Scholarships, so more Georgian students can get a quality education in-state.</li>
                <li><strong>Invest in community colleges</strong> such as Georgia Perimeter College so that they can equip our children with the skills they need to succeed.</li>
              </ul>
            </p>
          </div>
        </div>

        <hr />

        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              <img src={atlTrains} />
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="climate">Climate: Let's take care of the environment and keep our towns beautiful.</h3>
            <p>
              <ul>
                <li><strong>Address climate change</strong> by investing in green energy; encouraging people to reuse and recycle; and working with federal programs to get funding and jobs in clean energy sectors.</li>
                <li><strong>Invest in more parks and green space</strong> to keep our homes and streets beautiful.</li>
                <li><strong>Invest in better roads, more sidewalks, and more bike lanes</strong> in order to improve our transportation infrastructure. Let's make our suburbs more walkable!</li>
                <li><strong>Advocate for <a href="https://atlanta.urbanize.city/post/introducing-atl-trains-revolutionary-approach-metro-commuter-transit">ATL Trains</a></strong> — a public transit system to connect Metro Atlantans, drastically reduce congestion on I-85 / I-75 / I-285, and provide more accessibility to those who cannot drive a car.</li>
              </ul>
            </p>
          </div>
        </div>

        <hr />

        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              {/* https://www.flickr.com/photos/mr_t_in_dc/1021262724 */}
              <img src={police} />
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="safety">Public Safety: Let's make our communities safer.</h3>
            <p>
              <ul>
                <li><strong>Protect the right to bear arms</strong> while increasing background checks to make it harder for dangerous people to get guns.</li>
                <li><strong>Support our police in keeping us safe</strong> by investing in body cameras and training, and invest in other services such as mental health and counseling for non-violent offenses.</li>
                <li><strong>Pass state consumer protection, online safety, and antitrust laws</strong> to keep big tech companies accountable for online harms and children safe on social media.</li>
              </ul>
            </p>
          </div>
        </div>
        <hr />

        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              <img src={hospital} />
              {/* https://www.google.com/local/place/fid/0x88f5991858566f7b:0x4874bf6c636a43c3/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3D5vpqtAEF_0a6JEY145ZDPA%26cb_client%3Dlu.gallery.gps%26w%3D160%26h%3D106%26yaw%3D251.87053%26pitch%3D0%26thumbfov%3D100&ik=CAISFjV2cHF0QUVGXzBhNkpFWTE0NVpEUEE%3D */}
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="healthcare">Healthcare: Let's lower costs and improve care.</h3>
            <p>
              <ul>
                <li><strong>Expand Medicaid</strong> so that low-income Georgians can receive the essential healthcare they need.</li>
                <li><strong>Lower prescription drug costs</strong> by passing a state-level drug pricing transparency law. This will require healthcare companies operating in GA to be more transparent and accountable with drug pricing.</li>
                <li><strong>Provide a tax credit for doctors, nurses, and healthcare professionals</strong>, to thank them for their work during the COVID-19 pandemic and encourage more to join the profession.</li>
                <li><strong>Enact a GA child tax credit</strong>, to help reduce child poverty and incentivize people to have families.</li>
                <li><strong>Protect reproductive rights</strong>. The right to choose shouldn't be dictated by the government.</li>
              </ul>
            </p>
          </div>
        </div>
        <hr />

        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
              <img src={capitol} />
              {/* https://commons.wikimedia.org/wiki/File:Georgia_State_Capitol,_Atlanta,_GA_%2846751457534%29.jpg */}
            </h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <h3 id="government">Government: Let's build state and local government capacity.</h3>
            <p>
              <ul>
                <li><strong>Provide hand-marked paper ballots in all elections</strong>, the best way to ensure our elections are secure, and give agencies more resources for cybersecurity.</li>
                <li><strong>Pay our civil servants more</strong> so that we can hire and retain more talented people.</li>
                <li><strong>Place more technologists</strong> into our court systems and other state and local agencies to improve citizens' experience with government websites and technology.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
