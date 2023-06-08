import Lottie from "lottie-react";
import render from '../../../assets/Lottie/101892-artist (1).json'

const BannerInfo = () => {
    return (
        <div className="bg-base-200">
            <div className="grid md:grid-cols-2 gap-5 p-3">
                <div className="flex justify-center items-center mx-auto space-y-10">
                    <div className="text-center">
                        <h1 className="text-center text-3xl text-green-500">You Can Easily Development Your Skill</h1>
                        <p className="py-5 text-xl">Art is often seen as a form of self-expression, allowing individuals to.communicate their thoughts, emotions..</p>
                        <p className=" font-serif pb-2">Courses focusing on composition and design principles can help you create visually pleasing and balanced artwork. You will learn about elements like line, shape, form, balance, contrast, and more.</p>
                        <button className="btn btn-outline btn-success">Enroll Course</button>
                    </div>
                </div>
                <div className="flex justify-center items-center mx-auto">
                    <Lottie animationData={render} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default BannerInfo;