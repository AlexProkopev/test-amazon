export const section = 'max-w-full mx-auto py-[46px] px-4 sm:px-6 lg:px-8'
export const btnLeftPositionStyles = 'absolute left-[20px] lg:left-[-50px] top-1/2 -translate-y-1/2 hidden sm:block'
export const listAnimation = (animating) => {
    return `flex gap-[18px] justify-center flex-wrap transition-opacity duration-300 ${
            animating ? "opacity-0" : "opacity-100"
          }`
}
export const btnRightPositionStyles = 'absolute right-[20px] lg:right-[-50px] top-1/2 -translate-y-1/2 hidden sm:block'