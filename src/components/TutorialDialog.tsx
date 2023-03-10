import { useState, type Dispatch, type SetStateAction } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface TutorialDialogStep {
  title: string;
  content: JSX.Element;
}

export type TutorialDialogSteps = TutorialDialogStep[];

export function TutorialDialog(props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tutorialDialogSteps: TutorialDialogSteps;
}): JSX.Element {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  function closeDialog(): void {
    props.setOpen(false);
    setSelectedStep(0);
  }
  return (
    <>
      <Dialog
        open={props.open}
        onClose={() => {
          closeDialog();
        }}
        scroll="paper"
        fullWidth
        maxWidth={false}
        PaperProps={{
          sx: {
            height: "100%",
          },
        }}
      >
        <DialogTitle m={0} p={2}>
          {props.tutorialDialogSteps[selectedStep].title}
          <IconButton
            sx={{ position: "absolute", right: 8, top: 8 }}
            onClick={() => {
              closeDialog();
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={true}>
          {props.tutorialDialogSteps[selectedStep].content}
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            disabled={selectedStep === 0}
            onClick={() => {
              if (selectedStep > 0) {
                setSelectedStep(selectedStep - 1);
              }
            }}
          >
            前へ
          </Button>
          <Button
            variant="outlined"
            disabled={selectedStep === props.tutorialDialogSteps.length - 1}
            onClick={() => {
              if (selectedStep < props.tutorialDialogSteps.length - 1) {
                setSelectedStep(selectedStep + 1);
              }
            }}
          >
            次へ
          </Button>
          {selectedStep === props.tutorialDialogSteps.length - 1 && (
            <Button
              variant="contained"
              onClick={() => {
                closeDialog();
              }}
            >
              はじめる
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
