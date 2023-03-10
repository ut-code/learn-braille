export type BrailleChar =
  | "⠀"
  | "⠁"
  | "⠂"
  | "⠃"
  | "⠄"
  | "⠅"
  | "⠆"
  | "⠇"
  | "⠈"
  | "⠉"
  | "⠊"
  | "⠋"
  | "⠌"
  | "⠍"
  | "⠎"
  | "⠏"
  | "⠐"
  | "⠑"
  | "⠒"
  | "⠓"
  | "⠔"
  | "⠕"
  | "⠖"
  | "⠗"
  | "⠘"
  | "⠙"
  | "⠚"
  | "⠛"
  | "⠜"
  | "⠝"
  | "⠞"
  | "⠟"
  | "⠠"
  | "⠡"
  | "⠢"
  | "⠣"
  | "⠤"
  | "⠥"
  | "⠦"
  | "⠧"
  | "⠨"
  | "⠩"
  | "⠪"
  | "⠫"
  | "⠬"
  | "⠭"
  | "⠮"
  | "⠯"
  | "⠰"
  | "⠱"
  | "⠲"
  | "⠳"
  | "⠴"
  | "⠵"
  | "⠶"
  | "⠷"
  | "⠸"
  | "⠹"
  | "⠺"
  | "⠻"
  | "⠼"
  | "⠽"
  | "⠾"
  | "⠿";

export interface BrailleState {
  Dot1: boolean;
  Dot2: boolean;
  Dot3: boolean;
  Dot4: boolean;
  Dot5: boolean;
  Dot6: boolean;
}

export const defaultBrailleStateValue = {
  Dot1: false,
  Dot2: false,
  Dot3: false,
  Dot4: false,
  Dot5: false,
  Dot6: false,
};

export type AvailableDot = "Dot1" | "Dot2" | "Dot3" | "Dot4" | "Dot5" | "Dot6";
export const availableDots: AvailableDot[] = [
  "Dot1",
  "Dot2",
  "Dot3",
  "Dot4",
  "Dot5",
  "Dot6",
];
