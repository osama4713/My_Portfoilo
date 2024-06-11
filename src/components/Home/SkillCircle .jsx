/* eslint-disable react/prop-types */
const SkillCircle = ({ percentage , skillName }) => {
    const rotationAngle = (percentage / 100) * 360;

    return (
        <div className="skill mt-5 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <div className="calc w-32 h-32 rounded-full bg-[#111] dark:bg-[#f0f0f0] mx-auto mb-7 relative duration-500">
                <div
                    className="circle-half"
                    style={{
                        transform: `rotate(${rotationAngle > 180 ? 180 : rotationAngle}deg)`,
                    }}
                ></div>
                {rotationAngle > 180 && (
                    <div
                        className="half-one circle-half rounded-full"
                        style={{
                            transform: `rotate(${rotationAngle - 180}deg)`,
                        }}
                    ></div>
                )}

                <div className="circle duration-500 absolute bg-black dark:bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-white dark:text-black flex justify-center items-center text-2xl sm:text-3xl font-bold">
                    {percentage}%
                </div>
            </div>
            <p className="duration-500 text-white dark:text-black text-center text-xl font-semibold uppercase">
                {skillName}
            </p>
        </div>
    );
};


export default SkillCircle 
