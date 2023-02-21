import { useState, useEffect, type Dispatch, type SetStateAction } from "react";

interface KeyboardState {
  KeyF: boolean;
  KeyD: boolean;
  KeyS: boolean;
  KeyJ: boolean;
  KeyK: boolean;
  KeyL: boolean;
}

const defaultKeyboardValues = {
  KeyF: false,
  KeyD: false,
  KeyS: false,
  KeyJ: false,
  KeyK: false,
  KeyL: false,
};

const availableKeys = ["KeyF", "KeyD", "KeyS", "KeyJ", "KeyK", "KeyL"];
type AvailableKeys = "KeyF" | "KeyD" | "KeyS" | "KeyJ" | "KeyK" | "KeyL";

/**
 * Store the state of F,D,S,J,K,L keys
 * @returns the state of F,D,S,J,K,L keys
 */
function useKeyboardState(): KeyboardState {
  const keyboardState: KeyboardState = { ...defaultKeyboardValues };

  useEffect(() => {
    // Set state `true` when key is pressed.
    function pressed(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKeys;
        keyboardState[key] = true;
      }
    }

    // Set state `false` when key is released.
    function released(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKeys;
        keyboardState[key] = false;
      }
    }

    document.addEventListener("keydown", pressed);
    document.addEventListener("keyup", released);
    return () => {
      document.removeEventListener("keydown", pressed);
      document.removeEventListener("keyup", released);
    };
  }, []);
  return keyboardState;
}

/**
 * Store the object of typed keys
 * @returns the object of typed keys
 */
function useTypedKey(): KeyboardState {
  const keyboardState = useKeyboardState();
  const [typedKey, setTypedKey] = useState<KeyboardState>({
    ...defaultKeyboardValues,
  });
  let pressedKeys: KeyboardState = { ...defaultKeyboardValues };

  useEffect(() => {
    // Set state `true` when key is pressed.
    function pressed(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        const key = e.code as AvailableKeys;
        pressedKeys[key] = true;
      }
    }

    // Store the state to `typedKey` and reset the state.
    function released(e: KeyboardEvent): void {
      if (availableKeys.includes(e.code)) {
        // If all values of `keyboardState` are true, store the state.
        if (Object.values(keyboardState).every((value: boolean) => !value)) {
          setTypedKey({ ...pressedKeys });
          pressedKeys = { ...defaultKeyboardValues };
        }
      }
    }

    document.addEventListener("keydown", pressed);
    document.addEventListener("keyup", released);
    return () => {
      document.removeEventListener("keydown", pressed);
      document.removeEventListener("keyup", released);
    };
  }, []);
  return typedKey;
}

/**
 * Store the state of typed braille
 * @returns the state of typed braille
 */
export function useTypedBraille(): string {
  const typedKey = useTypedKey();
  const [typedBraille, setTypedBraille] = useState<string>("");

  useEffect(() => {
    // See https://www.unicode.org/charts/PDF/U2800.pdf
    let codePoint = 0x2800;
    if (typedKey.KeyF) codePoint += 2 ** 0;
    if (typedKey.KeyD) codePoint += 2 ** 1;
    if (typedKey.KeyS) codePoint += 2 ** 2;
    if (typedKey.KeyJ) codePoint += 2 ** 3;
    if (typedKey.KeyK) codePoint += 2 ** 4;
    if (typedKey.KeyL) codePoint += 2 ** 5;
    setTypedBraille(String.fromCodePoint(codePoint));
  }, [typedKey]);
  return typedBraille;
}

/**
 * Store braille strings
 * @returns braille strings
 */
export default function useTypedBrailleStrings(): [
  string,
  Dispatch<SetStateAction<string>>
] {
  const [typedBrailleStrings, setTypedBrailleStrings] = useState<string>("");
  const typedBraille = useTypedBraille();
  useEffect(() => {
    setTypedBrailleStrings(`${typedBrailleStrings}${typedBraille}`);
  }, [typedBraille]);
  return [typedBrailleStrings, setTypedBrailleStrings];
}