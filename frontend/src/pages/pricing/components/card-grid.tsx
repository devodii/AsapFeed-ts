import { useMemo } from "react";
import { Card } from "./card";
import { Categories } from "./meta";

export const CardGrid = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedCategories = useMemo(() => Categories, [Categories]);
  const card = useMemo(() => {
    memoizedCategories.map((categorie: Record<string, any>, index: number) => (
      <Card categorie={categorie} key={index} />
    ));
  }, [memoizedCategories])

  const cards = useMemo(
    () =>
      memoizedCategories.map((category: Record<string, any>, index: number) => (
        // Memoize each individual object in the Categories array before passing it as a prop to Card
        <Card categorie={category} key={index} />
      )),
    [memoizedCategories]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
      {cards}
    </div>
  );
};
