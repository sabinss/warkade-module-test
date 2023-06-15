import React from 'react';
import { CustomModal } from './CustomModal';
import { AiOutlineClose } from 'react-icons/ai';

interface IFaqModal {
  showModal: boolean;
  handleClose: () => void;
}

export const TermsConditionModal = ({ showModal, handleClose }: IFaqModal) => {
  return (
    <CustomModal show={showModal} handleClose={() => {}}>
      <div
        className='mint-modal faq-modal privacy-modal'
        style={{
          marginTop: 20,
          height: 700,
          overflow: 'hidden',
          overflowY: 'scroll',
        }}
      >
        <div className='mint-modal-header'>
          <div className='col-lg-11'>
            <h3 className='min-modal-header-title'>Terms Of Service</h3>
          </div>
          <div
            className='col-lg-1 mint-modal-header-icon close'
            onClick={handleClose}
          >
            <AiOutlineClose
              style={{ color: '#E7D08C', fontWeight: 'bold', fontSize: 20 }}
            />
          </div>
        </div>
        <div className='mint-modal-body my-3'>
          <div className='mint-modal-body-card-wrapper'>
            <div>
              <p>
                Mokshya Protocol Association, (“Mokshya Protocol,” “we,” “us,”
                or “our”) provides its services (described below) and related
                content and functionality to you (“you” or “User”) through its
                websites, platform, and Smart Contracts (defined below) for
                Aptos Warcade located at aptoswarcade.com (collectively, the
                “Site”), subject to these Terms of Use (as amended from time to
                time, the “Terms”). The Privacy Policy and all such additional
                terms, guidelines, and rules as set forth on the Site are hereby
                incorporated by reference into these Terms and expressly agreed
                to and acknowledged by you. These terms govern your access to
                and use of this Site, as well as all content, functionality, and
                services offered on or through the Site, including Rewards (as
                defined below) (all of the foregoing, collectively, the
                “Services”), and Aptos Warcade NFTs (defined below). By
                connecting your cryptocurrency wallet (e.g., Petra, Martian etc)
                to the site, or otherwise using or accessing the Rewards or any
                Aptos Warcade NFTs, You acknowledge that you have read and agree
                to these Terms.
              </p>
              <p>
                THE "PLATFORM" IS AVAILABLE ON AN “AS IS” BASIS WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
                BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, TITLE,
                FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. YOU
                ASSUME ALL RISKS ASSOCIATED WITH USING THE "PLATFORM", AND
                DIGITAL ASSETS AND DECENTRALIZED SYSTEMS GENERALLY, INCLUDING
                BUT NOT LIMITED TO, THAT: (A) DIGITAL ASSETS ARE HIGHLY
                VOLATILE; (B) STAKING OR DELEGATING DIGITAL ASSETS IS INHERENTLY
                RISKY DUE TO BOTH FEATURES OF SUCH ASSETS AND SYSTEMS AND THE
                POTENTIAL UNAUTHORIZED ACTS OF THIRD PARTIES; (C) YOU MAY NOT
                HAVE READY ACCESS TO ASSETS; AND (D) YOU MAY LOSE SOME OR ALL OF
                YOUR TOKENS OR OTHER ASSETS. YOU AGREE THAT YOU WILL HAVE NO
                RECOURSE AGAINST ANYONE ELSE FOR ANY LOSSES DUE TO THE USE OF
                THE "PLATFORM". FOR EXAMPLE, THESE LOSSES MAY ARISE FROM OR
                RELATE TO: (I) LOST FUNDS; (II) SERVER FAILURE OR DATA LOSS;
                (III) CORRUPTED CRYPTOCURRENCY WALLET FILES; (IV) UNAUTHORIZED
                ACCESS; (V) ERRORS, MISTAKES, OR INACCURACIES; OR (VI)
                THIRD-PARTY ACTIVITIES. THE "PLATFORM" DOES NOT COLLECT ANY
                PERSONAL DATA, AND YOUR INTERACTION WITH THE "PLATFORM" WILL
                SOLELY BE THROUGH YOUR PUBLIC DIGITAL WALLET ADDRESS. ANY
                PERSONAL OR OTHER DATA THAT YOU MAY MAKE AVAILABLE IN CONNECTION
                WITH THE "PLATFORM" MAY NOT BE PRIVATE OR SECURE.{' '}
              </p>
              <p>
                PLEASE READ THESE TERMS CAREFULLY, AS THEY CONTAIN AN AGREEMENT
                TO ARBITRATE AND OTHER IMPORTANT INFORMATION REGARDING YOUR
                LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. THE AGREEMENT TO
                ARBITRATE REQUIRES (WITH LIMITED EXCEPTION) THAT YOU SUBMIT
                CLAIMS YOU HAVE AGAINST US TO BINDING AND FINAL ARBITRATION, AND
                FURTHER (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST
                MOKSHYA PROTOCOL ASSOCIATION ON AN INDIVIDUAL BASIS, NOT AS A
                PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION
                OR PROCEEDING, (2) YOU WILL ONLY BE PERMITTED TO SEEK RELIEF
                (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN
                INDIVIDUAL BASIS, AND (3) YOU MAY NOT BE ABLE TO HAVE ANY CLAIMS
                YOU HAVE AGAINST US RESOLVED BY A JURY OR IN A COURT OF LAW.
              </p>
            </div>
            <div className='faq-card text-start'>
              <ol>
                <li>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Agreement to Terms
                  </h3>
                  1.1. By accessing or using the Platform (even just browsing
                  <a href='https://aptoswarcade.com/'>aptoswarcade.com</a>), you
                  agree that you have read and understood, and, as a condition
                  to your use of the “platform”, you agree to be bound by the
                  following terms and conditions, including our privacy policy .
                  If you don’t agree with these terms, you may not use the
                  “platform” including browsing our website. 1.2. Certain
                  features of the Platform, including transactions and
                  authentication, are facilitated by Third-Party Wallet
                  Extensions. By using the Platform, you agree that you are
                  bound by the terms of service and Privacy Policy for the
                  applicable extensions when using the applicable extension.
                </li>
                <li style={{ color: '#A48837' }}>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Aptos Warcade Game
                  </h3>
                  2.1 The Aptos Warcade game is a NFT minting game built on the
                  Aptos Blockchain. The objective of the game is to defeat the
                  Dark Lord and win Mystery Boxes. The Dark Lord has threatened
                  the Aptos Kingdom, and as a loyal civilian, a user's goal is
                  to mint Aptos Warcade NFTs to destroy the Dark Lord and help
                  protect the kingdom. 2.2. A user can mint Aptos Warcade NFTs
                  by connecting the wallet to the Platform, depositing APT
                  (Aptos Token), and minting Warcades. Minting more Warcades
                  increases the chances of killing the Dark Lord. 2.3. If you
                  successfully mint the Dark Lord, you will receive a Mystery
                  Box. At the end of Season 1, 50 Popular Aptos NFTs will be
                  raffled among the wallet addresses that minted the Dark Lord.
                  The more Dark Lord NFTs you mint, the higher your chances of
                  winning Blue Chip Aptos NFTs.
                </li>
                <li>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    How to Play the Game
                  </h3>
                  <ul>
                    <li style={{ marginBottom: -14 }}>7. 1. Connect Wallet</li>
                    <li style={{ marginBottom: -14 }}>
                      7.2. Deposit APT Tokens
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.3. Mint Aptos Warcade NFTs
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.4. If you mint Warcades, mint more so that you can kill
                      the Dark Lord.
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.5. If you mint the dark lord, you get a mystery box as a
                      reward. 50 Popular Aptos NFTs will be raffled among the
                      wallet addresses that mint Dark Lord at the end of Season
                      1. The more Dark Lord you mint, the more chances of
                      winning Blue Chip Aptos NFTs at the end of Season 1.
                    </li>
                  </ul>
                </li>
                <li style={{ color: '#A48837' }}>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Eligibility
                  </h3>
                  5.1. You must be of legal age in your jurisdiction to
                  participate in the Aptos Warcade game. By using the Platform,
                  you represent and warrant that you meet the eligibility
                  criteria. 5.2. If you are accessing the Platform on behalf of
                  an entity, you represent and warrant that you have the
                  authority to bind that entity to this Agreement. 5.3. You must
                  have a minimum deposit at the site to Mint Aptos Warcade NFTs.
                  5.4. You must have a minimum balance in your wallet to Pay all
                  other applicable fees, including but not limited to Aptos
                  Network fees, wallet fees, transaction fees or gas fees during
                  mint.
                </li>
                <li>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Electronic Wallet Terms
                  </h3>
                  To access certain features of the Platform, including,
                  you will need to register an account with us and connect a
                  third-party supported electronic wallet (e.g., Martian, Petra)
                  (“Wallet”) (“Your Account”). Please review our Privacy Policy
                  for the terms and conditions which govern your access to and
                  control of Your Account.  You are responsible for creating and
                  maintaining the confidentiality of Your Account and you are
                  also responsible for any activity concerning Your Account. By
                  using your Wallet in connection with the Platform, You agree
                  that you are using that Wallet under the terms and conditions
                  of the provider of the Wallet. Wallets are not operated by,
                  maintained by, or affiliated with Aptos Warcade “the site” and
                  we do not have custody or control over the contents of your
                  Wallet and have no ability to retrieve or transfer its
                  contents. We accept no responsibility for, or liability to
                  you, in connection with your use of a Wallet and make no
                  representations or warranties regarding how the Platform will
                  operate with any specific wallet. You are solely responsible
                  for keeping your Wallet secure and you should never share your
                  Wallet credentials with anyone. If you discover an issue
                  related to your Wallet, please contact your Wallet provid.
                  Likewise, you are solely responsible for Your Account and any
                  associated Wallet and we are not liable for any acts or
                  omissions by you in connection with Your Account or as a
                  result of Your Account or Wallet being compromised. You agree
                  to immediately notify us if you discover or otherwise suspect
                  any security issues related to the Platform or Your Account.
                  When you use your Wallet with the Platform, you represent to
                  us that Your Account and Wallet are owned or controlled
                  exclusively and directly by you and no other person.
                </li>
                <li style={{ color: '#A48837' }}>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Ownership; Proprietary Rights; Marks
                  </h3>
                  <ul>
                    <li>
                      <span
                        style={{
                          marginRight: 10,
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}
                      >
                        6.1.Ownership;
                      </span>
                      Proprietary Rights The Platform is owned and operated by
                      Mokshya Protocol Association. The visual interfaces,
                      graphics, design, compilation, information, data, computer
                      code (including source code or object code), products,
                      software, services, and all other elements of the Platform
                      (collectively, “Materials”) are protected by intellectual
                      property and other laws. It’s important to note that all
                      Materials included on the Platform are our property or the
                      property of other third-party licensors of the Service.
                      Except as expressly authorized by us, you may not make use
                      of the Materials. We reserve all rights to Materials not
                      granted expressly in these Terms.
                    </li>
                    <li style={{ color: '#A48837' }}>
                      <span
                        style={{
                          marginRight: 10,
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}
                      >
                        6.2. Marks Our trademarks
                      </span>
                      , platform or service marks, and logos (collectively, the
                      “Mokshya Trademarks”) used and displayed on the Platform
                      are our registered and/or unregistered trademarks or
                      platform or service marks. Any other product and service
                      names located on the Platform may be trademarks or service
                      marks owned by third parties (collectively with the
                      Mokshya Trademarks, the “Trademarks”). Except as otherwise
                      permitted by law, you may not use the Trademarks to
                      disparage us or the applicable third party, our or a third
                      party’s products or services, or in any manner (using
                      commercially reasonable judgment) that may damage any
                      goodwill in the Trademarks.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Prohibited Conduct. BY USING THE PLATFORM, YOU AGREE NOT TO
                  </h3>
                  <ul>
                    <li style={{ marginBottom: -14 }}>7. 1. Connect Wallet</li>
                    <li style={{ marginBottom: -14 }}>
                      7.1 Use the Platform for any illegal purpose or in
                      violation of any local, state, national, or international
                      law;
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.3. Mint Aptos Warcade NFTs
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.2. Harass, threaten, demean, embarrass, bully or
                      otherwise harm any other User of the Platform;
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.3. Violate, or encourage others to violate, or provide
                      instructions on how to violate any right of a third party,
                      including by infringing or misappropriating any
                      third-party intellectual property right;
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.4. Interfere with security-related features of the
                      Platform, including disabling or circumventing features
                      that prevent or limit use or copying of any content.;
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.5. Make unauthorized recordings or screen captures of
                      any content, including User Content, transmitted on or
                      through the Platform;
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.6. Interfere with the operation of the Platform or any
                      User’s enjoyment of the the Platform, including by: (a)
                      uploading or otherwise disseminating any virus, adware,
                      spyware, worm, or other malicious code; (b) making any
                      unsolicited offer or advertisement to another User of the
                      Service; (c) collecting personal information about another
                      User or third party without consent; or (d) interfering
                      with or disrupting any network, equipment, or server
                      connected to or used to provide the Service
                    </li>
                    <li style={{ marginBottom: -14 }}>
                      7.7. Attempt to access or search the the Platform or
                      content available on the the Platform or download content
                      from the the Platform through the use of any engine,
                      software, tool, agent, device or mechanism (including
                      spiders, robots, crawlers, data mining, gathering, or
                      extraction tools) other than the software and/or search
                      agents provided by us or other generally available
                      third-party web browsers;
                    </li>
                  </ul>
                </li>
                <li style={{ color: '#A48837' }}>
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    Disclaimer of Warranty
                  </h3>
                  The Platform is provided on an "as is" and "as available"
                  basis without any representation or warranty of any kind,
                  whether express, implied or statutory. The Platform does not
                  guarantee the accuracy, timeliness, completeness, reliability,
                  suitability, or availability of the service. You use the
                  Platform at your own risk.
                </li>
                <li>
                  Limitation of Liability
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    To the maximum extent permitted by law, the Platform and its
                    affiliates, officers, employees, agents and partners shall
                    not be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without
                    limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from (i) your access to or use
                    of or inability to access or use the service, (ii) any
                    conduct or content of any third party on the service, or
                    (iii) unauthorized access, use or alteration of your
                    transmissions or content.
                  </h3>
                </li>

                <li>
                  Indemnification
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    To the fullest extent permitted by law, you are responsible
                    for your use of the Platform, and you will defend and
                    indemnify us, our affiliates and their respective
                    shareholders, directors, managers, members, officers,
                    employees, consultants, and agents (together, the “Mokshya
                    Protocol Association Entities”) from and against every claim
                    brought by a third party, and any related liability, damage,
                    loss, and expense, including reasonable attorneys’ fees and
                    costs, arising out of or connected with: (i) your
                    unauthorized use of, or misuse of, the Platform; (ii) your
                    violation of any portion of these Terms, any representation,
                    warranty, or agreement referenced in these Terms, or any
                    applicable law or regulation; (iii) your violation of any
                    third-party right, including any intellectual property right
                    or publicity, confidentiality, other property, or privacy
                    right; or (iv) any dispute or issue between you and any
                    third party. We reserve the right, at our own expense, to
                    assume the exclusive defense and control of any matter
                    otherwise subject to indemnification by you (without
                    limiting your indemnification obligations with respect to
                    that matter), and in that case, you agree to cooperate with
                    our defense of those claims.
                  </h3>
                </li>

                <li>
                  Modification of Terms
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    The Platform reserves the right to modify these Terms at any
                    time. You should periodically review these Terms for any
                    changes. Your continued use of the Platform after any
                    modifications to these Terms shall constitute your
                    acceptance of such modifications.
                  </h3>
                </li>

                <li>
                  Miscellaneous
                  <h3 style={{ fontSize: 14, marginBottom: 15 }}>
                    <ul>
                      <li>
                        12.1. Governing Law The Platform is owned and operated
                        by Mokshya Protocol Association, Buechackerweg 2, 8234
                        Stetten, Switzerland. You agree that these Terms and
                        your use of the Platform are governed under Swiss Legal
                        System and any dispute related to the Platform must be
                        brought in a tribunal of competent jurisdiction located
                        in or near Stetten. We operate the Platform from our
                        offices, and we make no representation that Materials
                        included in the Platform are appropriate or available
                        for use in other locations.
                      </li>
                      <li>
                        12.2 Privacy Policy Please read the Privacy Policy
                        carefully for information relating to our collection,
                        use, storage, and disclosure of your personal
                        information. The Mokshya Protocol Association Privacy
                        Policy is incorporated by this reference into, and made
                        a part of, these Terms.
                      </li>
                      <li>
                        12.3. Additional Terms Your use of the Platform is
                        subject to all additional terms, policies, rules, or
                        guidelines applicable to the Platform or certain
                        features of the Platform that we may post on or link to
                        from the Platform (the “Additional Terms”). All
                        Additional Terms are incorporated by this reference
                        into, and made a part of, these Terms.
                      </li>
                      <li>
                        12.4. Contact Information You may contact us by emailing
                        us at{' '}
                        <a href='info@aptoswarcade.com.'>
                          info@aptoswarcade.com
                        </a>
                      </li>
                      <li>
                        12.5. No Support We are under no obligation to provide
                        support for the Platform. In instances where we may
                        offer support, the support will be subject to published
                        policies.{' '}
                      </li>
                      <li>
                        12.6 International Use We make no representation that
                        the Platform is appropriate or available for use outside
                        of Switzerland. Access to the Platform from countries or
                        territories or by individuals where such access is
                        illegal is prohibited.
                      </li>
                    </ul>
                  </h3>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};
