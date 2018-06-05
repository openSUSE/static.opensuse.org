// CA Simplicity JavaScript. 

// replace images for vbmenu_control, fix double tcat
var rows = document.getElementsByTagName("tr"); 
var j = 0;
var row = false;
var item = false;
var imglist = false;
var attr = "";
var change = false;
var found = false;
var tcat = false;
for (var i = 0; i < rows.length; i++)
{ 
    row = rows[i];
	if(!row.className || row.className == '')
	{
		// find all class="thead"
		change = false;
		tcat = false;
		for(j = 0; j < row.childNodes.length; j++)
		{
			item = row.childNodes[j];
			if(item.className && item.className == 'thead')
			{
				change = true;
			}
			if(item.className && item.className == 'tcat')
			{
				if(tcat)
				{
					item.className = 'tcat tcat2';
				}
				tcat = true;
			}
		}
		if(change)
		{
			row.className = 'thead-row';
			imglist = row.getElementsByTagName("img");
			for(j = 0; j < imglist.length; j++)
			{
				attr = imglist.item(j).src;
				if(attr.indexOf('menu_open.gif') > 0)
				{
					attr = attr.replace(/menu_open.gif/, 'menu_open2.gif');
					imglist.item(j).src = attr;
				}
			}
		}
	}
	if(row.className && row.className == 'vbmenu_dark')
	{
		imglist = row.getElementsByTagName("img");
		for(j = 0; j < imglist.length; j++)
		{
			attr = imglist.item(j).src;
			if(attr.indexOf('menu_open.gif') > 0)
			{
				attr = attr.replace(/menu_open.gif/, 'menu_open2.gif');
				imglist.item(j).src = attr;
			}
		}
	}
}

// fix thread display
item = document.getElementById('posts');
if(item)
{
	rows = item.getElementsByTagName('table');
	if(rows && rows.length > 1 && rows[1].className && rows[1].className === 'tborder')
	{
		rows[1].style.borderTopWidth = '0';
	}
}
item = document.getElementById('post');
if(item && item.className && item.className === 'tborder')
{
	item.style.borderTopWidth = '0';
}

// fix bbcode
ca_parse_bbcode_block(document);

function ca_parse_bbcode_block(parent)
{
/*	rows = parent.getElementsByTagName("pre"); 
	j = rows.length;
	if(j == 0)
	{
		rows = parent.getElementsByTagName("code");
		j = rows.length;
	}
	if(j > 0)
	{ */
		// find all bbcode divs
		rows = parent.getElementsByTagName("table");
		for(i = 0; i < rows.length; i++)
		{ 
			ca_parse_bbcode_table(rows[i]);
		}
/*	} */
}

function ca_parse_bbcode_table(row)
{
	if(row.className && row.className == 'bbcode-rounded bbcode-rounded-code')
	{
		item = row.parentNode;
		if(item.offsetWidth == row.offsetWidth && item.offsetWidth > 0)
		{
			// lolzilla bug
			change = row.offsetWidth - 40;
			if(item.className && item.className == 'bbcode-rounded-content')
			{
				change = change - 10;
			}
			row.style.width = change + 'px';
			imglist = row.getElementsByTagName('pre');
			if(imglist.length)
			{
				imglist[0].style.width = (change - 8) + 'px';
			}
		}
		else
		{
			change = item.offsetWidth - 40 - row.offsetWidth;
			if(change > 10)
			{
				if(item.className && item.className == 'bbcode-rounded-content')
				{
					change = change - 10;
				}
				row.style.width = (row.offsetWidth + change) + 'px';
				imglist = row.getElementsByTagName('pre');
				if(imglist.length)
				{
					imglist[0].style.width = (imglist[0].offsetWidth + change - 8) + 'px';
				}
			}
		}
//		item.innerHTML = item.innerHTML + 'offsetwidth = ' + item.offsetWidth + ', ' + row.offsetWidth + ', clientwidth = ' + item.clientWidth + ', ' + row.clientWidth + ', item = ' + item + '<br />';
	}
	if(row.className && row.className == 'bbcode-rounded bbcode-rounded-quote')
	{
		item = row.parentNode;
		if(item.offsetWidth == row.offsetWidth && item.offsetWidth > 0)
		{
			// lolzilla bug
			change = row.offsetWidth - 40;
			if(item.className && item.className == 'bbcode-rounded-content')
			{
				change = change - 10;
			}
			row.style.width = change + 'px';
		}
		else
		{
			change = item.offsetWidth - 40 - row.offsetWidth;
			if(change > 10)
			{
				if(item.className && item.className == 'bbcode-rounded-content')
				{
					change = change - 10;
				}
				row.style.width = (row.offsetWidth + change) + 'px';
			}
		}
	}
}

var ca_bbcode_parsed = true;
