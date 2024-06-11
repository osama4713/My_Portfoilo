/* eslint-disable react/prop-types */

const ImageProject = ({linkImage , altImage}) => {
  return (
    <div className="group w-full h-[300px] rounded-[30px] img-home relative overflow-hidden">
      <img className="w-full h-full rounded-[30px]" src={linkImage} alt={altImage} />

      <div className="absolute z-40 inset-0 flex flex-col items-center justify-center rounded-[30px] opacity-0 group-hover:opacity-100">
        <h2 className="text-white text-3xl text-center p-1 font-bold">
          Business Startup
        </h2>
        <p className="text-white text-xl text-center font-bold">
          Design & Development
        </p>
      </div>
    </div>
  )
}

export default ImageProject
