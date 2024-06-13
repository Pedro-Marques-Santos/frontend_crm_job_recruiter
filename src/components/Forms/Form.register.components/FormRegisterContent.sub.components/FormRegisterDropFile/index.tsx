import * as React from "react";
import { useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  Container,
  ContainerDropFile,
  ContainerProfileImg,
  ContentProfile,
  ContianerProfile,
  ImageLogo,
  ProfileImg,
  Title,
  Error,
} from "./styles";

import imglogo from "@/images/download.svg";

import img1 from "@/images/files/img1.png";
import img2 from "@/images/files/img2.png";
import img3 from "@/images/files/img3.png";
import img4 from "@/images/files/img4.png";

import { FcHighPriority, FcCheckmark } from "react-icons/fc";
import { AiFillFileImage } from "react-icons/ai";

import Image from "next/image";
import CheckboxesTags from "./select";

interface IFormRegisterDropFile {
  addImagemProfile: (image: File | null) => void;
  image: File | null;
  selectState: boolean;
}

export function FormRegisterDropFile({
  addImagemProfile,
  image,
  selectState = true,
}: IFormRegisterDropFile) {
  const {
    control,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (file: File | null) => {
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        addImagemProfile(null);
        setValue("image", null);
        alert("O arquivo é muito grande. O tamanho máximo permitido é 2 MB.");
        return;
      }
      if (
        file.type !== "image/jpg" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/png"
      ) {
        addImagemProfile(null);
        setValue("image", null);
        alert("Somente arquivos JPG e PNG são permitidos.");
        return;
      }
      addImagemProfile(file);
      setValue("image", file);
      clearErrors("image");
    } else {
      setValue("image", null);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (size: number) => {
    return (size / 1024).toFixed(2) + " KB";
  };

  return (
    <Container>
      <h1>Media Upload</h1>
      <h3>add your profile picture here, you can add jpg or png image.</h3>
      <ContainerDropFile>
        <Controller
          name="image"
          control={control}
          defaultValue={null}
          rules={{
            validate: {
              required: (value) => value !== null || "This field is mandatory!",
              fileSize: (value) =>
                (value && value.size <= 2 * 1024 * 1024) ||
                "Max file size is 2 MB",
              fileType: (value) =>
                (value &&
                  (value.type === "image/jpg" ||
                    value.type === "image/jpeg" ||
                    value.type === "image/png")) ||
                "Only JPG and PNG files are allowed",
            },
          }}
          render={({ field }) => (
            <>
              <input
                id="image-upload"
                type="file"
                style={{ display: "none" }}
                accept="image/jpg, image/jpeg, image/png"
                ref={(e) => {
                  fileInputRef.current = e;
                  field.ref(e);
                }}
                onChange={(e) =>
                  handleImageChange(e.target.files ? e.target.files[0] : null)
                }
              />
              <ImageLogo>
                <Image src={imglogo} alt={""} width={36} height={24} />
              </ImageLogo>
              <Title onClick={handleBrowseClick}>
                Drag your file(s) or <strong>browse</strong>
              </Title>
            </>
          )}
        />
      </ContainerDropFile>
      <h3>only support jpg and png</h3>
      <ContainerProfileImg>
        <ProfileImg>
          {image ? (
            image.type === "image/png" ? (
              <Image src={img1} alt="Uploaded" />
            ) : image.type === "image/jpg" || image.type === "image/jpeg" ? (
              <Image src={img2} alt="Uploaded" />
            ) : (
              <Image src={img4} alt="Uploaded" />
            )
          ) : (
            <Image src={img3} alt="Uploaded" />
          )}
        </ProfileImg>
        <ContianerProfile>
          <ContentProfile>
            <h5>profile img</h5>
            <h6>{image ? formatFileSize(image.size) : "0.0KB"}</h6>
          </ContentProfile>
          <ContentProfile>
            {image ? (
              image.type === "image/png" ||
              image.type === "image/jpg" ||
              image.type === "image/jpeg" ? (
                <>
                  <h3>
                    <i>
                      <FcCheckmark />
                    </i>
                    Completed
                  </h3>
                </>
              ) : (
                <>
                  <h3>
                    <i>
                      <FcHighPriority />
                    </i>
                    Error
                  </h3>
                </>
              )
            ) : (
              <>
                <h3>
                  <i>
                    <AiFillFileImage />
                  </i>
                  add an image
                </h3>
              </>
            )}
          </ContentProfile>
        </ContianerProfile>
      </ContainerProfileImg>
      <Error $stateError={errors.image ? true : false}>
        {errors.image ? <>{errors.image.message as string}</> : "ERROR"}
      </Error>
      {selectState && <CheckboxesTags />}
    </Container>
  );
}
