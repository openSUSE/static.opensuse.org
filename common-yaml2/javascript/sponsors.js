/*
*
* JavaScript function for opensuse.org
*
* Slideshow for sponsor logos
*
* Author: Frank Sundermeyer <fs@opensuse.org>
* $Id: $
*/

function showSponsor () {
    var IMGLINK = new Array();
    /**
    ** Images and Links
    **/
    IMGLINK[0] = new Array("http://en.opensuse.org/Sponsors/AMD","http://files.test.opensuse.org/opensuse/en/c/cc/Amd.jpg");
    IMGLINK[1] = new Array("http://en.opensuse.org/Sponsors/IP_Exchange","http://files.test.opensuse.org/opensuse/en/0/0f/Ip-exchange.jpg");
    IMGLINK[2] = new Array("http://en.opensuse.org/Sponsors/foo","http://en.opensuse.org/skins/common/images/icons/fileicon-pdf.png");

    var INTERVAL = 3; // in seconds
    var RANDOM = Math.round(Math.random()*(IMGLINK.length-1));
    setTimeout("showSponsor()",INTERVAL*1000);

    document.getElementById("sponsorSlidehref").href=IMGLINK[RANDOM][0];
    document.getElementById("sponsorSlideimg").src=IMGLINK[RANDOM][1];
}

