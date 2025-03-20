import '../style/heisenSection.css';

const HeisenSection = () => {
    return(
        <>
            <div className="heisen-section">
                <div>
                    <h2>I'm Heisenberg</h2>
                    <p> <strong>A Developer Who Blah Blah Blah</strong> to help your readers 'get it' sooner, faster, better.</p>
                    <h3>Why?</h3>
                    <p><strong>Because people develop trust and buy your services</strong> when they understand you immediately, clearly, and simply.</p>
                    <h3>How?</h3>
                    <p><strong>I'll Write Web Pages</strong> to clearly explain your business’s services. In plain English, no jargon, no brain translation. Even your kid will understand what expensive problems you solve for people.</p>
                    <div className='centered' style={{marginTop: '4em'}}>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/lrBqX_8tIdc?si=YSwx-a62WuWR69Bv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <div className='iframe-container'>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/lrBqX_8tIdc?si=YSwx-a62WuWR69Bv"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HeisenSection;