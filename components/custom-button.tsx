"use client"

import { CustomButtonType } from "@/interfaces"
import Image from "next/image"

function CustomButton({
  isDisabled,
  buttonType,
  containerStyles,
  textStyles,
  title,
  rightIcon
}: CustomButtonType) {
  return (
    <button
      disabled={isDisabled}
      type={buttonType || 'button'}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton