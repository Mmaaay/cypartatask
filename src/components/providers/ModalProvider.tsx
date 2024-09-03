"use client";

import { FC, useEffect, useState } from "react";
import EditProfileModal from "../modals/editProfile";
{
  /*This provider allow the opening of the modal, adding addiotional models is then easy to handle */
}
const ModalProvider = () => {
  const [IsMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) return null;
  return (
    <>
      <EditProfileModal />
    </>
  );
};

export default ModalProvider;
