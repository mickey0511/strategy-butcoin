"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface NotesItem {
  title: string;
  content: string;
}

const NotesItems: NotesItem[] = [
  {
    title: "Important Information About This Dashboard Generally",
    content: `Nothing contained herein constitutes tax, legal, insurance, or investment advice, or the recommendation of or an offer to sell, or the solicitation of an offer to buy or invest in any security.
    
Historic market trends are not reliable indicators of actual future market behavior or future performance of any particular investment, which may differ materially and should not be relied upon as such. All investments carry a certain degree of risk, and there is no assurance that any investment will provide positive performance over any time period.

Different time periods and market conditions may result in significantly different outcomes. The instruments included in this Dashboard are not FDIC-insured, may lose value, and are not bank guaranteed.

Information contained in this Dashboard from third parties has been obtained from sources believed to be reliable, but not guaranteed.`,
  },
  {
    title: "Important Information About BTC Yield, BTC Gain and BTC $ Gain KPIs",
    content: `BTC Yield is a key performance indicator (“KPI”) that represents the percentage change, during a period, of the ratio between the Company’s bitcoin holdings and its Assumed Diluted Shares Outstanding, where:   

Assumed Diluted Shares Outstanding” refers to the aggregate of our Basic Shares Outstanding as of the dates presented plus all additional shares that would result from the assumed conversion of all outstanding convertible notes and convertible preferred stock, exercise of all outstanding stock option awards, and settlement of all outstanding restricted stock units and performance stock units as of such dates. Assumed Diluted Shares Outstanding is not calculated using the treasury method and does not take into account any vesting conditions (in the case of equity awards), the exercise price of any stock option awards or any contractual conditions limiting convertibility of convertible debt instruments.  

“Basic Shares Outstanding” reflects the actual class A common stock and class B common stock outstanding as of the dates presented. For purposes of this calculation, outstanding shares of such stock are deemed to include shares, if any, that were sold under at-the-market equity offering programs, that were to be issued pursuant to options that had been exercised or restricted stock units that have vested or that were to be issued with respect to conversion requests received with respect to convertible securities, but which in each case were pending issuance as of the dates presented.  

BTC Gain is a KPI that represents the number of bitcoins held by the Company at the beginning of a period multiplied by the BTC Yield for such period.  

BTC $ Gain is a KPI that represents the dollar value of the BTC Gain calculated by multiplying the BTC Gain by the market price of bitcoin. For determining BTC $ Gain QTD and YTD, unless otherwise specified, the Company uses the current market price of bitcoin. For determining BTC $ Gain for a past fiscal year or other past period, the Company uses the market price of bitcoin as of 4:00pm ET as reported on the Coinbase exchange on the last day of the applicable period. The Company uses these market prices of bitcoin for this calculation solely for the purpose of facilitating this illustrative calculation.  

The Company uses BTC Yield, BTC Gain and BTC $ Gain as KPIs to help assess the performance of its strategy of acquiring bitcoin in a manner the Company believes is accretive to shareholders. The Company believes these KPIs can be used to supplement an investor’s understanding of the Company’s decision of the manner in which it funds the purchase of bitcoin and the value created in a period by:  

in the case of BTC Yield, comparing the rate of change in the Company’s bitcoin holdings as compared to the rate of change in the number of shares of its common stock and instruments convertible to common stock;  

in the case of BTC Gain, hypothetically expressing the change reflected in the BTC Yield metric as if it reflected an increase in the amount of bitcoin held at the end the applicable period as compared to the beginning of such period; and  

in the case of BTC $ Gain, further expressing that gain as a dollar value by multiplying that bitcoin-denominated gain by the market price of bitcoin at the end of the applicable period as described above.  

When the Company uses these KPIs, management takes into account the various limitations of these metrics, including that they:  

do not take into account debt, preferred stock and other liabilities and claims on company assets that would be senior to common equity; and 

assume that all indebtedness will be refinanced or, in the case of the Company’s senior convertible debt instruments and convertible preferred stock, converted into shares of common stock in accordance with their respective terms.  

BTC Yield, BTC Gain and BTC $ Gain are not, and should not be understood as, operating performance measures or financial or liquidity measures. Specifically: 

BTC Yield is not equivalent to “yield” in the traditional financial context. It is not a measure of the return on investment the Company’s shareholders may have achieved historically or can achieve in the future by purchasing stock of the Company, or a measure of income generated by the Company’s operations or its bitcoin holdings, return on investment on its bitcoin holdings, or any other similar financial measure of the performance of its business or assets.  

BTC Gain and BTC $ Gain are not equivalent to “gain” in the traditional financial context. They also are not measures of the return on investment the Company’s shareholders may have achieved historically or can achieve in the future by purchasing stock of the Company, or measures of income generated by the Company’s operations or its bitcoin holdings, return on investment on its bitcoin holdings, or any other similar financial measure of the performance of its business or assets. It should also be understood that BTC $ Gain does not represent a fair value gain of the Company’s bitcoin holdings, and BTC $ Gain may be positive during periods when the Company has incurred fair value losses on its bitcoin holdings.  

The trading price of the Company’s class A common stock is informed by numerous factors in addition to the amount of bitcoins the Company holds and number of actual or potential shares of its class A common stock outstanding, and as a result, the market value of the Company’s securities may trade at a discount or a premium relative to the market value of the bitcoin the Company holds, and neither BTC Yield, BTC Gain nor BTC $ Gain are indicative or predictive of the trading price of the Company’s securities.  

As noted above, these KPIs are narrow in their purpose and are used by management to assist it in assessing whether the Company is raising and deploying capital in a manner accretive to shareholders solely as it pertains to its bitcoin holdings.  

In calculating these KPIs, the Company does not consider the source of capital used for the acquisition of its bitcoin. Specifically, the Company notes it has acquired bitcoin using proceeds from the offerings of:  

non-convertible instruments, such as its 6.125% Senior Secured Notes due 2028 (which the Company has since redeemed) and 10.00% Series A Perpetual Strife Preferred Stock; and   

convertible senior notes and convertible preferred stock, which, at the time of issuance had, and may from time-to-time have, conversion prices above the current trading prices of the Company’s common stock, or, in the case of convertible senior notes, conversion rights that are not then exercisable.  

The use of the proceeds from such offerings to purchase bitcoin has the effect of increasing the BTC Yield, BTC Gain and BTC $ Gain, while also increasing the Company’s indebtedness and senior claims of holders of instruments other than class A common stock with respect to dividends and to the Company’s assets, including its bitcoin, in a manner that is not reflected in these metrics.  

If any of the Company’s convertible notes mature or are redeemed without being converted into common stock, or if the Company elects to redeem or repurchase its non-convertible instruments, the Company may be required to sell shares of its class A common stock or bitcoin to generate sufficient cash proceeds to satisfy those obligations, either of which would have the effect of decreasing BTC Yield, BTC Gain and BTC $ Gain, and adjustments for such decreases are not contemplated by the assumptions made in calculating these metrics. Accordingly, these metrics might overstate or understate the accretive nature of the Company’s use of capital to buy bitcoin because not all bitcoin is purchased using proceeds of issuances of class A common stock, and not all proceeds from issuances of class A common stock are used to purchase bitcoin.     

In addition, we are required to pay dividends with respect to our perpetual strike preferred stock and perpetual strife preferred stock in perpetuity. We could pay these dividends with cash or, in the case of perpetual strike preferred stock, by issuing shares of class A common stock. If we issue shares of class A common stock in lieu of paying dividends in cash, or if we issue shares of class A common stock for cash to fund the payment of cash dividends, then we would experience an increase in our Assumed Diluted Shares Outstanding without a corresponding increase in our bitcoin holdings, resulting in a decrease in BTC Yield, BTC Gain and BTC $ Gain for the period in which such sales of bitcoin or issuance of shares of class A common stock occurred.  

The Company has historically not paid any dividends on its shares of class A common stock, and by presenting these KPIs the Company makes no suggestion that it intends to do so in the future. Ownership of the Company’s securities, including its class A common stock and preferred stock, does not represent an ownership interest in the bitcoin the Company holds.  

The Company determines its KPI targets based on its history and future goals.  The Company’s ability to achieve positive BTC Yield, BTC Gain, or BTC $ Gain may depend on a variety of factors, including its ability to generate cash from operations in excess of its fixed charges and other expenses, as well as factors outside of its control, such as the price of bitcoin, and the availability of debt and equity financing on favorable terms. Past performance is not indicative of future results.   

Investors should rely on the financial statements and other disclosures contained in the Company’s SEC filings. These KPIs are merely supplements, not a substitute. They should be used only by sophisticated investors who understand their limited purpose and many limitations.`,
  },
  {
    title: "Important Information about Bitcoin NAV and mNAV",
    content: `Bitcoin NAV represents the total number of bitcoin the Company holds as of a specified date multiplied by the current market price of one bitcoin. It does not take into account or include the Company’s indebtedness or the liquidation value of its perpetual preferred stock.  As such, it is not equivalent to “net asset value” or “NAV” or any similar metric in the traditional financial context. Although it incorporates the label “NAV,” it is not a measure of either the asset value of the Company or the value of the bitcoin held by the company net of indebtedness, perpetual preferred stock liquidation preference and other obligations.  Moreover, this Bitcoin NAV metric is not comparable to either net asset value or NAV metrics that may be reported by other companies, including ETFs, ETPs and mutual funds.   Investors should rely on the financial statements and other disclosures contained in the Company’s SEC filings. This metric is merely a supplement, not a substitute. It should be used only by sophisticated investors who understand its limited purpose and many limitations. 

mNAV represents a multiple of Bitcoin NAV, as of the specified date, calculated as the Company’s enterprise value divided by Bitcoin NAV.  The Company’s enterprise value is calculated as  the sum of (A) the total market value of all outstanding MSTR common stock, including class A common stock and class B common stock calculated by multiplying the number of outstanding shares of class A common stock and class B common stock by the closing price of the class A common stock on the Nasdaq Global Select Market on the applicable date, (B) the aggregate principal amount of the Company’s indebtedness and (C) the aggregate notional value of the Company’s outstanding perpetual preferred stock, less (D) the Company’s most recently reported cash balance value.  As with Bitcoin NAV, although mNAV incorporates the label “NAV,” it is not equivalent to “net asset value” or “NAV” or any similar metric in the traditional financial context.  Additionally, it is not a measure of the amount by which the enterprise value exceeds net asset value in the traditional financial sense of that term.  Investors should rely on the financial statements and other disclosures contained in the Company’s SEC filings. This metric is merely a supplement, not a substitute. It should be used only by sophisticated investors who understand their limited purpose and many limitations. `,
  },
  {
    title: "Important Information About the Market Price of Class A Common Stock and Metrics Derived from the Market Price of our Class A Common Stock",
    content: "Recent trading prices of our class A common stock may reflect market dynamics that are not connected to traditional software and business intelligence industry fundamentals, or to valuation methods commonly associated with operating companies in these industries or with companies engaged predominantly in passive investments in bitcoin or other commodities, such as exchange-traded funds. Our equity market capitalization is currently well in excess of our stockholders’ equity calculated in accordance with U.S. GAAP and in excess of valuations that might traditionally be expected based on our operating performance, cash flows and net assets. Investors may therefore be unable to assess the value our class A common stock or evaluate the risks of an investment in us using traditional or commonly used enterprise valuation methods. We cannot predict how these dynamics may evolve over time, or whether or how long they may last. These market and industry factors may seriously harm the market price of our class A common stock, regardless of our actual operating performance, resulting in substantial losses for investors in our class A common stock, including holders of any shares of class A common stock issued upon the conversion of our perpetual preferred stock.",
  },
  {
    title: "We are not an ETF or ETP",
    content: "We are not an exchange traded product (“ETP”) or an exchange-traded fund (“ETF”) registered under the Investment Company Act of 1940, as amended, are not subject to the same rules and regulations as an ETP or an ETF, and do not operate as an ETP or ETF.  In particular, unlike spot bitcoin ETPs, we (i) do not seek for our shares of Class A common stock to track the value of the underlying bitcoin we hold before payment of expenses and liabilities, (ii) do not benefit from various exemptions and relief under the Securities Exchange Act of 1934, as amended, including Regulation M, and other securities laws, which enable spot bitcoin ETPs to continuously align the value of their shares to the price of the underlying bitcoin they hold through share creation and redemption, (iii) are a Delaware corporation rather than a statutory trust, and do not operate pursuant to a trust agreement that would require us to pursue one or more stated investment objectives, (iv) are subject to federal income tax at the entity level and the other risk factors applicable to an operating business, such as ours, and (v) are not required to provide daily transparency as to our bitcoin holdings or our daily NAV.",
  },
];

const Notes: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleNotes = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      {NotesItems.map((item, index) => (
        <div key={index} className="border-b border-gray-700">
          <button
            onClick={() => toggleNotes(index)}
            className="w-full text-left py-3 flex justify-between items-center text-white font-semibold"
          >
            {item.title}
            {openIndex === index ? <IoIosArrowUp className="text-[#fa660f]" /> : <IoIosArrowDown className="text-[#fa660f]"/>
        }
          </button>
          {openIndex === index && (
            <div className="p-3 text-white text-sm">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notes;
