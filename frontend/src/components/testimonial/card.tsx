import { memo } from "react";
import { ITestifier, Props } from "./types";
import Image from "next/image";

const Card = ({
  name,
  companyName,
  testimony,
  testifier,
}: Props<ITestifier>) => (
  <div className="border max-w-xs rounded-2xl bg-mid-gray">
    <div>{companyName}</div>
    <article> {testimony}</article>

    <div>
      {testifier ? (
        <Image
          alt={`${testifier.name} at AsapFeed`}
          src={testifier.image}
          className="w-6 h-6 rounded-full "
        />
      ) : (
        <span className="w-6 h-6 rounded-full bg-red-300"></span>
      )}
    </div>
  </div>
);

export default memo(Card);
