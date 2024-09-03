import { create } from "zustand";
import { UserProfileData } from "../types/userDataTypes";

export type ModalType = "EditProfile";

interface ModalData {
  profile?: UserProfileData;
  cookie?: string;
}
interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  data: ModalData;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ type, isOpen: true, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
