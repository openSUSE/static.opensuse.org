/*
*
* JavaScript function for opensuse.org
*
* Slideshow for sponsor logos
*
* Author: Frank Sundermeyer <fs@opensuse.org>
* $Id: $
*/

var SPONSOR_IDX = 0;
function showSponsors() {
    var INTERVAL = 3;
    document.getElementById("sponsorSlidehref").href = SPONSORS[SPONSOR_IDX][0];
    document.getElementById("sponsorSlideimg").src   = SPONSORS[SPONSOR_IDX][1];
    SPONSOR_IDX = (SPONSOR_IDX + 1) % SPONSORS.length;
    setTimeout(showSponsors, INTERVAL * 1000);
}

