import { useState, useRef } from "react";
import {
  Container,
  ContainerDropFile,
  ContainerProfileImg,
  ContentProfile,
  ContianerProfile,
  ImageLogo,
  ProfileImg,
  Title,
} from "./styles";

import imglogo from "@/images/download.svg";

import img1 from "@/images/files/img1.png";
import img2 from "@/images/files/img2.png";
import img3 from "@/images/files/img3.png";
import img4 from "@/images/files/img4.png";

import { FcHighPriority } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { AiFillFileImage } from "react-icons/ai";

import Image from "next/image";

export function FormRegisterDropFile() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files ? e.target.files[0] : null;
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
    if (selectedImage) {
      if (selectedImage.size > MAX_FILE_SIZE) {
        alert("O arquivo é muito grande. O tamanho máximo permitido é 2 MB.");
        setImage(null);
        return;
      }
      setImage(selectedImage);
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
        <input
          ref={fileInputRef}
          id="image-upload"
          type="file"
          onChange={handleImageChange}
          style={{ display: "none" }}
          accept="image/jpg, image/jpeg, image/png"
        />
        <ImageLogo>
          <Image src={imglogo} alt={""} width={36} height={24} />
        </ImageLogo>
        <Title onClick={handleBrowseClick}>
          Drag your file(s) or <strong>browse</strong>
        </Title>
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
    </Container>
  );
}
