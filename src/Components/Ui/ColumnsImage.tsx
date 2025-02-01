import {
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Image, Space } from "antd";
import { CiImageOff } from "react-icons/ci"; // Assuming you're using this icon from react-icons

const ColumnsImage = ({ src }: any) => {
  const [hasError, setHasError] = useState(false); // Track if the image has an error

  const imageUrl = src;

  if (hasError) {
    // If there is an error, display the fallback icon
    return <CiImageOff />;
  }
  if (!imageUrl) {
    return <CiImageOff />;
  }
  return (
    <Image
      // width={45}
      // height={45}
      src={imageUrl}
      //"BaseUrl/storage/grade/71Q5b1SB2qBGEu4t3KIWephzQHBGwE7tTbZ2LZwe.jpg"
      className="columnImage p-1 mb-1"
      onError={() => setHasError(true)} // Triggered when image fails to load
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: {
              onFlipY,
              onFlipX,
              onRotateLeft,
              onRotateRight,
              onZoomOut,
              onZoomIn,
            },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      }}
    />
  );
};

export default ColumnsImage;
