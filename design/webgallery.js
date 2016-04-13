// JavaScript Document

var title = new Array;
var url = new Array;
var year = new Array;
var thumburl = new Array;
var imgwidth = new Array;

title [1] = "English Department Reunion 2007";
url[1] = "http://event.uksw.edu/edreunion2007";
year[1] = "&copy; 2007"
thumburl[1] ="webthumb1.jpg";


title [2] = "TEFLIN International Conference 2006";
url[2] = "http://event.uksw.edu/teflin2006";
year[2] = "&copy; 2006"
thumburl[2] ="webthumb2.jpg";


title [3] = "Satya Wacana Christian University Mailing Service";
url[3] = "http://mail.uksw.edu";
year[3] = "&copy; 2005"
thumburl[3] ="webthumb3.jpg";


var current = 1;
var last = 3;
var prev = 1;
var next = 2;

function drawtheweb(number)
{
	var description  = '<h3>'+title[number]+'</h3><br /><a href="'+url[number]+'" target="_blank">'+url[number]+'</a><br />'+ year[number]+'<br /><br />';
	document.getElementById('webdescription').innerHTML = description;
	var object=document.getElementById("webscreenshot");
	object.src='http://danielkristiyanto.googlepages.com/'+thumburl[number];
	//object.width=imgwidth[number];
}
function shownext(){
	if (current != last)
	{
	current = current +1;
	drawtheweb(current);
	navigation();
	}
}
function showprev(){
	if (current != 1)
	{
	current = current -1;
	drawtheweb(current);
	navigation();
	}
}

function navigation()
{
	if (current == 1)
		{
			document.getElementById('webnavigation').innerHTML = '<a href="javascript:shownext();">next</a>';
			
		}
		else if (current == last)
		{
			document.getElementById('webnavigation').innerHTML = '<a href="javascript:showprev();">previous</a>';
		}
		else
		{
			document.getElementById('webnavigation').innerHTML = '<a href="javascript:showprev();">previous</a> <a href="javascript:shownext();">next</a>';
		}



}

	