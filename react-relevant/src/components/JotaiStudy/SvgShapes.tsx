import { atom, useAtom } from "jotai";

import { Point, ShapeAtom } from "./types";
import { createShapeAtom, SvgShape } from "./SvgShape";
import { selectAtom } from "./selection";

const shapeAtomsAtom = atom<ShapeAtom[]>([]);

export const addShapeAtom = atom(
  null,
  (_get, set, update: readonly Point[]) => {
    if (update.length < 2) return;
    console.log(update)
    const shapeAtom = createShapeAtom(update);
    console.log(shapeAtom)
    set(shapeAtomsAtom, (prev) => [
      ...prev,
      shapeAtom
    ]);
    set(selectAtom, shapeAtom);
  }
);

export const SvgShapes = () => {
  const [shapeAtoms] = useAtom(shapeAtomsAtom);

  return (
    <g>
      {shapeAtoms.map((shapeAtom) => (
        <SvgShape
          key={`${shapeAtom}`}
          shapeAtom={shapeAtom}
        />
      ))}
    </g>
  );
};
