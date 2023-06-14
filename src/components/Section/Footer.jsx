
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content grid md:grid-cols-3">
                <div className="mx-auto text-center">
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Daily Video</a>
                    <a className="link link-hover">Class Test</a>
                    <a className="link link-hover">Assignment</a>
                    <a className="link link-hover">Support Session</a>
                </div>
                <div className="mx-auto">
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Address</a>
                    <a className="link link-hover">Support</a>
                </div>
                <div className="mx-auto">
                    <span className="footer-title">Email</span>
                    <a className="link link-hover">Social Media</a>
                    <a className="link link-hover">Information</a>
                    <a className="link link-hover">Feedback</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;