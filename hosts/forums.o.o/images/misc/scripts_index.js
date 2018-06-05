// replace links class on index and viewforum
var rows = document.getElementsByTagName("tr"); 
var cols = false;
var imgs = false;
var num = 0;
for (var i = 0; i < rows.length; i++)
{ 
    row = rows[i];
	// find rows with class="alt1Active"
	found = false;
	cols = row.getElementsByTagName("td");
	if(cols.length > 2)
	{
		for(j = 0; j < cols.length; j++)
		{
			if(found == false && (cols[j].className == 'alt1Active' || cols[j].className == 'alt2Active'))
			{
				found = true;
				num = j;
			}
		}
		if(found)
		{
			change = false;
			imgs = row.getElementsByTagName("img");
			if(imgs.length)
			{
				if(imgs[0].src && imgs[0].src.indexOf('_new.gif') > 0)
				{
					change = true;
				}
			}
			if(change)
			{
				cols[num].className += ' row-new';
			}
		}
	}
}

// check forums
var item = document.getElementById("forum0");
if(item)
{
	rows = item.getElementsByTagName("tr");
	if(rows.length > 1)
	{
		item.style.display = '';
		item = document.getElementById("forum0_div");
		if(item)
		{
			item.style.display = '';
		}
	}
}
