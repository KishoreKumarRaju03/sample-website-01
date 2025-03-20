import '../style/matchSection.css';

const MatchSection = () => {
    return(
        <>
            <div className="match-section">
                <div>
                    <h2>Are we a match?</h2>
                    <div className='match-grid match-reverse match-card match'>
                        <div>
                            <p><i class="fa-regular fa-thumbs-up fa-3x match-thumbs-up" aria-hidden="true"></i></p>
                            <h4>Yes if...</h4>
                            <p>Your website shouldn't just look good—it should work hard for your business. No fluff, no buzzwords, just real results. Let's build something that actually works.</p>
                        </div>
                        <div>
                            <p><i class="fa-regular fa-thumbs-down fa-3x match-thumbs-down" aria-hidden="true"></i></p>
                            <h4 style={{color: 'indianred'}}>No if...</h4>
                            <p>Your website should do more than just sit there—it should work for you. No buzzwords, no fluff. Just clean, functional design that gets results. Let's build something that actually matters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default MatchSection;