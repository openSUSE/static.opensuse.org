/*
* JavaScript function for opensuse.org
* Slideshow for sponsor logos
* Author: Frank Sundermeyer <fs@opensuse.org>
*/
function showSponsor() {
    var IMGLINK = new Array();
    IMGLINK[0] = new Array("https://en.opensuse.org/Sponsors#Platinum_sponsors_of_openSUSE","https://en.opensuse.org/images/9/97/53863A_AMD_E_Blk_RGB.png");
    IMGLINK[1] = new Array("https://en.opensuse.org/Sponsors#Fastly,_Inc","https://en.opensuse.org/images/1/1c/Fastly-Inc-Logo.png");
    IMGLINK[2] = new Array("https://en.opensuse.org/Sponsors#SUSE","https://en.opensuse.org/images/c/cb/Suselogo.png");
    IMGLINK[3] = new Array("https://en.opensuse.org/Sponsors#Silver_Sponsors_of_openSUSE","https://en.opensuse.org/images/2/2b/B1.png");
    IMGLINK[4] = new Array("https://en.opensuse.org/Sponsors#NorthC","https://en.opensuse.org/images/2/21/NorthC.png");
    IMGLINK[5] = new Array("https://en.opensuse.org/Sponsors#rsync.net","https://en.opensuse.org/images/2/2f/Rsync.png");
    IMGLINK[6] = new Array("https://en.opensuse.org/Sponsors#Core_Backbone","https://en.opensuse.org/images/4/4c/Corebackbone.png");
    IMGLINK[7] = new Array("https://en.opensuse.org/Sponsors#Heinlein_Support","https://en.opensuse.org/images/1/1d/Heinlein-support.png");
    IMGLINK[8] = new Array("https://en.opensuse.org/Sponsors#MARVELL","https://en.opensuse.org/images/b/b4/Marvell.png");

    var INTERVAL = 3; // in seconds
    var RANDOM = Math.floor(Math.random() * IMGLINK.length);

    document.getElementById("sponsorSlidehref").href = IMGLINK[RANDOM][0];
    document.getElementById("sponsorSlideimg").src   = IMGLINK[RANDOM][1];

    setTimeout(showSponsor, INTERVAL * 1000);
}
}

