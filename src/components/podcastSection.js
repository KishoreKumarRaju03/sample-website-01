import '../style/podcastSection.css';

const PodcastSection = () => {
    return(
        <>
            <div className="podcast-section">
                <div>
                    <p><i>"NO ONE CARES WHAT YOU (OR I) DO..."</i></p>
                    <h2>Heisenberg about <i>Clarity</i></h2>
                    <div style={{textAlign: 'left', padding: '40px 0px 0px 0px', borderRadius: '20px'}}>
                        {/* <iframe style={{borderRadius: '20px'}} width="560" height="315" src="https://www.youtube.com/embed/75TIKgMAbtw?si=khQX5f2ojdAoTUcR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <div className='iframe-container'>
                            <iframe
                                style={{ borderRadius: '20px' }}
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/75TIKgMAbtw?si=khQX5f2ojdAoTUcR"
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
    );
};

export default PodcastSection;