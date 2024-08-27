import React, { useEffect, useState } from "react";

// Image
import logoLight from "assets/images/logo-light.png";
import logoDark from "assets/images/logo-dark.png";
import AuthIcon from "../AuthIcon";
import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { BLUE10, GREY100, GREY150 } from "Common/constants/colors";
import { apiClientWithAuth } from "services";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { getTwoStepStatus as onGetTwoStepStatus } from "slices/thunk";

export const TwoStepsComponent = () => {
  const [twoStepStatus, SetTwoStepStatus] = useState<Boolean>(false);
  const dispatch = useDispatch<any>();
  const selectDataTwoStep = createSelector(
    (state: any) => state.TwoStep,
    (twoStep) => ({
      twoStepStatusData: twoStep.twoStep,
    })
  );

  const { twoStepStatusData } = useSelector(selectDataTwoStep);
  useEffect(() => {}, []);

  // Get Data
  useEffect(() => {
    dispatch(onGetTwoStepStatus());
  }, [dispatch]);

  useEffect(() => {
    SetTwoStepStatus(twoStepStatusData?.success);
  }, [twoStepStatusData]);

  const handleSubmitEmail = async () => {
    console.log("se envio el email al correo ====");
    // const { data } = await apiClientWithAuth.patch(`/v1/user/${ID}/`, {
    //   email,
    //   first_name,
    //   phone,
    //   country,
    //   job_position,
    // });
  };
  return (
    <React.Fragment>
      {!twoStepStatus ? (
        <>
          <div className="flex gap-4 ">
            <div className="flex items-center rounded-md size-50 justify-center bg-white">
              <LockKeyhole color={BLUE10} height={10} width={20} />
            </div>
            <Title size={"big"} color={GREY150} text={"Seguridad"} />
          </div>

          <Text
            className="pt-5"
            size={"medium"}
            color={GREY150}
            bold={"semi-bold"}
            text={"Verificación en dos pasos"}
          />
          <Text
            color={GREY100}
            className="pt-1"
            text={"Protege tu cuenta con la verificación en dos pasos"}
          />
          <div className="flex gap-4 pt-6">
            <div className="bg-[#CDDC01] h-9 w-9 rounded-full flex items-center justify-center">
              <Text size={"big"} color="white" text="1"></Text>
            </div>
            <div className="">
              <Text
                color={GREY100}
                text={
                  "La verificación en dos pasos es un nivel añadido de seguridad, "
                }
              />
              <Text
                color={GREY100}
                text={
                  "ya que solicita un código cada vez que inicias sesión en un dispositivo nuevo."
                }
              />
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <div className="bg-[#CDDC01] h-9 w-9 rounded-full flex items-center justify-center">
              <Text size={"big"} color="white" text="2"></Text>
            </div>
            <div className="">
              <Text
                color={GREY100}
                text={
                  "Tu aplicación de autenticación nos permite añadir un nivel de verificación "
                }
              />
              <Text color={GREY100} text={"extra para proteger tu cuenta."} />
            </div>
          </div>

          <div className="flex pt-10 w-full sm:w-auto">
            <button
              onClick={handleSubmitEmail}
              type="button"
              className=" text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 mb-5"
            >
              <span className="align-middle">Configurar</span>
            </button>
          </div>
        </>
      ) : (
        <>si tiene</>
      )}
    </React.Fragment>
  );
};
