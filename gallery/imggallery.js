// JavaScript Document

//var imagefilename = new Array;
var iwidth = new Array;
var imagedomain = "";
// main gallery
iwidth[1] = 538;
iwidth[2] = 450;
iwidth[3] = 340;
iwidth[4] = 284;
iwidth[5] = 338;
iwidth[6] = 338;
iwidth[7] = 338;
iwidth[8] = 280;

// st louis
iwidth[40]=450;
iwidth[41]=600;
iwidth[42]=450;
iwidth[43]=600;
iwidth[44]=338;
iwidth[45]=600;
iwidth[46]=338;
iwidth[47]=600;
iwidth[48]=337;
iwidth[49]=450;
iwidth[50]=338;
iwidth[51]=600;
iwidth[52]=601;
iwidth[53]=450;
iwidth[54]=600;
iwidth[55]=450;
iwidth[56]=600;
iwidth[57]=450;
iwidth[58]=600;
iwidth[59]=600;
iwidth[60]=337;
iwidth[61]=450;
iwidth[62]=450;

//halloween party
iwidth[80]=600;
iwidth[81]=450;
iwidth[82]=338;
iwidth[83]=338;
iwidth[84]=600;
iwidth[85]=450;
iwidth[86]=600;
iwidth[87]=338;
iwidth[88]=404;
iwidth[89]=450;
iwidth[90]=450;
iwidth[91]=469;
iwidth[92]=450;
iwidth[93]=450;
iwidth[94]=600;
iwidth[95]=338;
iwidth[96]=450;
iwidth[97]=450;
iwidth[98]=450;
iwidth[99]=600;

//everywhere
iwidth[100]=886;
iwidth[101]=900;
iwidth[102]=645;
iwidth[103]=842;
iwidth[104]=870;
iwidth[105]=640;
iwidth[106]=500;
iwidth[107]=960;


//the windows
iwidth[110]=636;
iwidth[111]=703;
iwidth[112]=1124;
iwidth[113]=271;
iwidth[114]=684;
iwidth[115]=338;
iwidth[116]=355;
iwidth[117]=266;
iwidth[118]=657;



function drawtheimage(startnumber, stopnumber)
{
	document.getElementById('galleryrail').innerHTML="";
	var startrail = startnumber;
	for (startnumber; startnumber < stopnumber; startnumber++)
	{
	imageurl = startnumber +".jpg";
	content = '<td width="'+iwidth[startnumber]+'px">'+'<img src="http://danielkristiyanto.googlepages.com/'+imageurl+'" alt="dk : gallery" height="450px" width="'+iwidth[startnumber]+'px" />'+'</td>';
	if (startrail == startnumber)
	var rail = content;
	else
	rail = rail + content;
	}
	
	rail = '<table cellspacing="0" cellpadding="0"><tr>'+rail+'</tr></table>';
	
	document.getElementById('galleryrail').innerHTML=rail;

}
	