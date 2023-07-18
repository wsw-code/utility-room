import { atom } from "jotai";
import { ShapeAtom } from "./types";

const selectedShapeAtomAtom = atom<ShapeAtom | null>(
  null
);

export const selectAtom = atom(
  null,
  (_get, set, shapeAtom: ShapeAtom) => {
    set(selectedShapeAtomAtom, shapeAtom);
  }
);

export const selectedAtomCreator = (
  shapeAtom: ShapeAtom
) => {
  const selectedAtom = atom(
    (get) => shapeAtom === get(selectedShapeAtomAtom)
  );
  return selectedAtom;
};
