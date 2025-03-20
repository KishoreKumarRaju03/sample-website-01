import '../style/writerSection.css';
import 'font-awesome/css/font-awesome.min.css';




const WriterSection = () => {
    return(
        <>
            <div className='writer-section'>
                <div>
                    <h2>You don't want a developer</h2>
                    <p><b>You Want a Creator</b>  Someone who studies psychology more than linguistics. Because what you really want is...</p>
                    <div className='writer-grid'>
                        <div>
                            <i className="fa fa-glasses" aria-hidden="true"></i>
                            <p>
                                <strong>More people reading</strong>  your entire pages, posts & emails
                            </p>
                        </div>
                        <div>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <p>
                                <strong>More people contacting</strong>  you when thinking of your services
                            </p>
                        </div>
                        <div>
                            <i class="fa fa-heart-pulse" aria-hidden="true"></i>
                            <p>
                                <strong>More life to your web</strong>   so it will stand out vs. fit in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WriterSection;