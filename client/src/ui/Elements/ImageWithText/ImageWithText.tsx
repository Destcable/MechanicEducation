interface IImageWithTextProps { 
    imageUrl?: string | null;
    text?: string | null;
}

const ImageWithText: React.FC<IImageWithTextProps> = ({ imageUrl, text }) => {
    return (
        <div className="container align-content-center">
            <div className="d-block row justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    {imageUrl && <img src={imageUrl} alt="Image" className="img-fluid" />}
                </div>
                <div className="col-md-6">
                    {text && <p>{text}</p>}
                </div>
            </div>
        </div>
    );
};

export default ImageWithText;