	/*
	This Script is Copyright by Tub (spam@authmann.de).

	see index.html for full copyright information.
	*/
	function getFormElement(a)
	{
		var c, b = document.getElementById("mainform");
		if (!b)
		{
			window.status = "mainform not found";
			return false
		}
		c = b.elements[a];
		if (!c)
		{
			window.status = "form element " + a + " not found";
			return false
		}
		return c
	}

	function get(a)
	{
		var b = getFormElement(a);
		if (b.type == "checkbox" && b.checked == false)
		{
			return 0
		}
		return parseInt(b.value)
	}

	function uncheck(a)
	{
		check(a, false)
	}

	function check(b, a)
	{
		var c;
		if (a == null)
		{
			a = true
		}
		c = getFormElement(b);
		if (c && c.type == "checkbox")
		{
			c.checked = a
		}
	}

	function parse(c, b, a)
	{
		var d, e = getFormElement(c);
		d = parseInt(e.value);
		if (b != null && d < b)
		{
			d = b
		}
		if (a != null && d > a)
		{
			d = a
		}
		e.value = d;
		return d
	}

	function getElement(a)
	{
		var b = document.getElementById(a);
		if (!b)
		{
			window.status = "element " + a + " not found";
			return false
		}
		return b
	}

	function show(a)
	{
		var b = getElement(a);
		b.style.display = ""
	}

	function hide(a)
	{
		var b = getElement(a);
		b.style.display = "none"
	}

	function set(b, e, d)
	{
		var a, c = getElement(b);
		while (c.hasChildNodes())
		{
			c.removeChild(c.firstChild)
		}
		a = document.createTextNode(e);
		c.appendChild(a);
		if (d == true)
		{
			c.style.backgroundColor = "#ff0000";
			c.style.border = "1px solid #000000";
			c.style.padding = "1px 2px"
		}
		else
		{
			if (d == false)
			{
				c.style.backgroundColor = "";
				c.style.border = "";
				c.style.padding = ""
			}
		}
	}

	function clearChildNodes(a)
	{
		while (a.hasChildNodes())
		{
			a.removeChild(a.firstChild)
		}
	}
	
	function uswitch(el) //doesn't allow sorc to wear both body armor rws at the same time
	{
		if (el.checked == true)
		{
			if (el.name == "q9")
			{
				document.getElementsByName("q12")[0].checked = "";
			}
			if (el.name == "q12")
			{
				document.getElementsByName("q9")[0].checked = "";
			}
		}
	}
	
	var classnames = new Array("", "amazon", "assassin", "barbarian", "druid", "necromancer", "paladin", "sorceress");
	var classnames_readable = new Array("", "Amazon", "Assassin", "Barbarian", "Druid", "Necromancer", "Paladin", "Sorceress");
	var skillnames;
	var func_constraints;
	var SKILLICONS_VERSION = "uxiii";
	var CURRENT_PATCH = "uxiii";
	var CURRENT_PATCH_READABLE;
	var IS_1E9_OR_NEWER = true;
	var IS_OMEGA = true;
	var cname = "";
	var slvl = new Array();
	var max = new Array();
	var classnr;
	var clvl;
	var slvlmax;
	var slvlskillbonus;
	var slvlitembonus;
	var ennead;
	var blackroad;
	var energy;

	function changeVersion()
	{
		var a = getFormElement("version");
		CURRENT_PATCH = a.value;
		CURRENT_PATCH_READABLE = a.options[a.selectedIndex].text;
		IS_1E9_OR_NEWER = (CURRENT_PATCH != "199d" && CURRENT_PATCH != "1A9" && CURRENT_PATCH != "1D9");
		IS_OMEGA = (CURRENT_PATCH.substr(0, 1) == "O") || (CURRENT_PATCH.substr(0, 4) == "2012") || (CURRENT_PATCH.substr(0, 1) == "u");
		switch (CURRENT_PATCH)
		{
		case "199d":
			show("ac500_row");
			hide("minigamerow");
			hide("signetofskillrow");
			hide("enneadplusone");
			set("toraja_bonus", "5");
			getFormElement("q7").value = 5;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_199d;
			func_constraints = check_constraints_199d;
			break;
		case "1A9":
			hide("ac500_row");
			uncheck("ac500");
			hide("minigamerow");
			hide("signetofskillrow");
			hide("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_1A9;
			func_constraints = check_constraints_1A9;
			break;
		case "1D9":
			hide("ac500_row");
			uncheck("ac500");
			hide("minigamerow");
			hide("signetofskillrow");
			hide("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_1D9;
			func_constraints = check_constraints_1D9;
			break;
		case "1E9":
			hide("ac500_row");
			uncheck("ac500");
			show("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			hide("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_1E9;
			func_constraints = check_constraints_1E9;
			break;
		case "1F9":
			hide("ac500_row");
			uncheck("ac500");
			show("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_1F9;
			func_constraints = check_constraints_1F9;
			break;
		case "1G9":
			hide("ac500_row");
			uncheck("ac500");
			show("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_1G9;
			func_constraints = check_constraints_1G9;
			break;
		case "1Z9":
			hide("ac500_row");
			uncheck("ac500");
			show("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_1Z9;
			func_constraints = check_constraints_1Z9;
			break;
		case "O001":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_O001;
			func_constraints = check_constraints_O001;
			break;
		case "O002":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_O001;
			func_constraints = check_constraints_O002;
			break;
		case "O003":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("xvc_skills"); //reset to 0?
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_O003;
			func_constraints = check_constraints_O002;
			break;
		case "2012":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_2012;
			func_constraints = check_constraints_O002;
			break;
		case "2012004":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_2012004;
			func_constraints = check_constraints_O002;
			break;
		case "2012005":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			hide("khanduran");
			hide("laz_upg");
			hide("feels");
			uncheck("khanduran");
			uncheck("laz_upg");
			uncheck("feels");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_2012005;
			func_constraints = check_constraints_O002;
			break
		case "uxi":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			show("laz_upg");
			show("khanduran");
			show("feels");
			check("q10");
			uncheck("q11");
			uncheck("q12");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_uxi;
			func_constraints = check_constraints_O002;
			break
		case "uxiii":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			show("laz_upg");
			show("khanduran");
			show("feels");
			check("q10");
			uncheck("q11");
			uncheck("q12");
			
			hide("xvc_skills"); //reset to 0?
			
			skillnames = skillnames_uxiii;
			func_constraints = check_constraints_O002;
			break
		case "uxvc":
			hide("ac500_row");
			uncheck("ac500");
			hide("windowsinhell");
			show("minigamerow");
			show("signetofskillrow");
			show("enneadplusone");
			set("toraja_bonus", "1");
			getFormElement("q7").value = 1;
			
			show("laz_upg");
			show("khanduran");
			show("feels");
			check("q10");
			uncheck("q11");
			uncheck("q12");
			
			show("xvc_skills");
			
			skillnames = skillnames_uxvc;
			func_constraints = check_constraints_uxvc;
			break
		}
		changeClass()
	}

	function hasSlvlByItem()
	{
		if (classnr == 7)
		{
			return true
		}
		if (classnr == 1 && IS_1E9_OR_NEWER && CURRENT_PATCH != "1E9" && !IS_OMEGA)
		{
			return true
		}
		return false
	}

	function changeClass()
	{
		var d, c, b, a, g, e, f, current_name, b_counter;
		classnr = get("class");
		if (classnr == 1 && (CURRENT_PATCH == "199d" || CURRENT_PATCH == "1A9"))
		{
			show("energy_row")
		}
		else
		{
			hide("energy_row")
		}
		if (CURRENT_PATCH == "uxvc")
		{
			skill_number = 35;
		}
		else
		{
			skill_number = 30;
		}
		if (classnr == 1)
		{
			show("hornedhunter");
			hide("venefica")
		}
		else
		{
			if (classnr == 7)
			{
				hide("hornedhunter");
				show("venefica")
			}
		} if (hasSlvlByItem())
		{
			show("slvl_by_item_row")
		}
		else
		{
			hide("slvl_by_item_row")
		}
		for (d = 1; d <= skill_number; d++)
		{
			b_counter = 0
			current_name = skillnames[classnr][d];
			if (Object.prototype.toString.call(current_name) === '[object Array]') //this one is used when there's 2 different pictures with the same name, and vice versa
			{
				//current_name[0] = name, current_name[2] = true - says that current_name[1] is the current_name[1]-th occurrence of current_name[0] or if false - the current_name[1]-th picture in the array, current_name[1] = number of occurrence of current_name[0] or number of the picture
				if (current_name.length == 3) 
				{
					if (current_name[2]) //this one finds the current_name[1]-th occurance of current_name[0], or if not found, uses the first one found (or if not, sets it to red)
					{
						set("skill" + d + "_name", current_name[0]);
						f = document.getElementById("skill" + d + "_img");
						if (f)
						{
							e = current_name[0].replace(/ /g, "").replace(/[0-9]$/, ""); //name in skillicons
							b = -1;
							for (c = 0; c < skillicons[classnr].length; c++) //find the number of the skillicon if you provide the name and the number of occurance
							{
								if (skillicons[classnr][c] == e)
								{
									if (b_counter != current_name[1])
									{
										b = c;
										b_counter++;
										continue;
									}
									else
									{
										b = c;
										break;
									}
								}
							}
							if (b < 0) //not found
							{
								f.style.backgroundColor = "red";
								f.style.backgroundImage = "none";
								continue
							}
							a = (b % 10) * -50;
							g = Math.floor(b / 10) * -50;
							f.style.backgroundColor = "transparent";
							f.style.backgroundImage = "url(skillicons/" + classnames[classnr] + "_all.png?" + SKILLICONS_VERSION + ")";
							f.style.backgroundPosition = a + "px " + g + "px"
						}
					}
					else //this one uses the current_name[0] name and current_name[1]-th picture
					{
						set("skill" + d + "_name", current_name[0]);
						f = document.getElementById("skill" + d + "_img");
						b = current_name[1];
						if (f)
						{
							if ((b < 0) || (b >skill_number))
							{
								f.style.backgroundColor = "red";
								f.style.backgroundImage = "none";
								continue
							}
							a = (b % 10) * -50;
							g = Math.floor(b / 10) * -50;
							f.style.backgroundColor = "transparent";
							f.style.backgroundImage = "url(skillicons/" + classnames[classnr] + "_all.png?" + SKILLICONS_VERSION + ")";
							f.style.backgroundPosition = a + "px " + g + "px"
						}
					}
				}
				else //this one is a fail, not formatted correctly, the array should have 3 elements
				{
					current_name = "";
					set("skill" + d + "_name", current_name);
					f = document.getElementById("skill" + d + "_img");
					if (f)
					{
						f.style.backgroundColor = "red";
						f.style.backgroundImage = "none";
						continue
					}
				}
			}
			else //this one is used when there's just the one unique picture for one unique skill name, and the name is indicated just by a string
			{
				set("skill" + d + "_name", current_name);
				f = document.getElementById("skill" + d + "_img");
				if (f)
				{
					e = current_name.replace(/ /g, "").replace(/[0-9]$/, ""); //name to compare vs names in skillicons
					b = -1;
					for (c = 0; c < skillicons[classnr].length; c++) //find the number of the skillicon if you provide the name
					{
						if (skillicons[classnr][c] == e)
						{
							b = c;
							break
						}
					}
					if (b < 0) //not found
					{
						f.style.backgroundColor = "red";
						f.style.backgroundImage = "none";
						continue
					}
					a = (b % 10) * -50;
					g = Math.floor(b / 10) * -50;
					f.style.backgroundColor = "transparent";
					f.style.backgroundImage = "url(skillicons/" + classnames[classnr] + "_all.png?" + SKILLICONS_VERSION + ")";
					f.style.backgroundPosition = a + "px " + g + "px"
				}
			}
		}
		recalculate()
	}

	function recalculate()
	{
		var a, e, g, c, h, f;
		classnr = get("class");
		clvl = parse("clvl", 1, 120);
		if (clvl < 40)
		{
			for (e = 1; e <= 3; e++) //den of evil, radament, tyrael
			{
				uncheck("q" + e + "_2")
			}
			uncheck("m3");
			for (e = 0; e < 3; e++)
			{
				uncheck("sos" + e) //signets of skill
			}
		}
		if (clvl < 20)
		{
			for (e = 1; e <= 3; e++)
			{
				uncheck("q" + e + "_1")
			}
			for (e = 0; e < 3; e++)
			{
				uncheck("m" + e)
			}
		}
		if (clvl < 100)
		{
			for (e = 4; e <= 12; e++)
			{
				uncheck("q" + e)
			}
		}
		if (clvl < 120)
		{
			uncheck("q7")
		}
		if (clvl < 90)
		{
			uncheck("ennead");
			uncheck("blackroad")
		}
		if (clvl < 100)
		{
			uncheck("ac500")
		}
		var b = (clvl - 1); //b = skill points
		for (e = 1; e <= 3; e++)
		{
			for (g = 0; g < 3; g++)
			{
				b += get("q" + e + "_" + g) //get den of evil, radament, tyrael skill points
			}
		}
		if (IS_1E9_OR_NEWER)
		{
			for (e = 0; e < 3; e++)
			{
				b += get("sos" + e) //get signets of skill
			}
		}
		set("pavail", b);
		energy = 0;
		if (classnr == 1 && (CURRENT_PATCH == "199d" || CURRENT_PATCH == "1A9"))
		{
			energy = parse("energy", 15, 1125)
		}
		getFormElement("q12").value = 1;
		if ((classnr == 3) && (CURRENT_PATCH.substr(0, 1) == "u"))
		{
			var slvl_ab = get("skill22_points");
			if (slvl_ab > 0)
			{
				getFormElement("q12").value = 0;
			}
		}
		slvlmax = Math.floor(clvl / 6) + 2;
		slvlitembonus = 0;
		for (e = 4; e <= 8; e++)
		{
			slvlitembonus += get("q" + e) //get max skill levels from Jitan, Bartuc, Bremmtown, Toraja, Drekavac
		}
		if (hasSlvlByItem())
		{
			slvlitembonus += get("q9")
		}
		if (CURRENT_PATCH == "199d")
		{
			slvlitembonus += get("ac500")
		}
		if (IS_1E9_OR_NEWER)
		{
			for (e = 0; e < 4; e++)
			{
				if (e != 2 || !IS_OMEGA)
				{
					slvlitembonus += get("m" + e)
				}
			}
		}
		slvlskillbonus = 0;
		ennead = get("ennead");
		blackroad = get("blackroad");
		if (IS_OMEGA && ennead)
		{
			slvlitembonus++
		}
		if (CURRENT_PATCH.substr(0, 1) == "u")
		{
			for (e = 10; e <= 12; e++)
			{
				slvlitembonus += get("q" + e)
			}
		}
		if (CURRENT_PATCH == "uxvc")
		{
			skill_number = 35;
		}
		else
		{
			skill_number = 30;
		}
		for (a = 1; a <= skill_number; a++)
		{
			slvl[a] = get("skill" + a + "_points");
			if (slvl[a] < 0)
			{
				slvl[a] = 0
			}
		}
		c = false;
		while (!c)
		{
			c = checkConstraints()
		}
		set("slvlbonus", slvlskillbonus + slvlitembonus);
		for (a = 1; a <= skill_number; a++)
		{
			set("skill" + a + "_max", max[a]);
			h = getFormElement("skill" + a + "_points");
			h.disabled = (max[a] == 0);
			if (slvl[a] > 0 && max[a] == slvl[a])
			{
				h.style.backgroundColor = "#C97F7F"
			}
			else
			{
				h.style.backgroundColor = ""
			}
			h = getFormElement("skill" + a + "_plus");
			h.style.visibility = (slvl[a] < max[a]) ? "visible" : "hidden";
			h = getFormElement("skill" + a + "_minus");
			h.style.visibility = (slvl[a] > 0) ? "visible" : "hidden"
		}
		f = 0;
		for (a = 1; a <= skill_number; a++)
		{
			set("skill" + a + "_max", max[a] > 0 ? ("max: " + max[a]) : "");
			h = getFormElement("skill" + a + "_points");
			h.value = slvl[a];
			f += slvl[a]
		}
		set("pspent", f, f > b)
	}

	function raiseMax(b, a)
	{
		if (max[b] > 0)
		{
			max[b] += a
		}
	}

	function lockout(c, b)
	{
		var a;
		if (b == null)
		{
			b = c
		}
		for (a = c; a <= b; a++)
		{
			max[a] = 0
		}
	}

	function checkConstraints() //fix constrains, ubers are no longer 26-30, but 31-35, if the patch is uxcv
	{
		var a, d, b, c;
		slvlskillbonus = 0;
		if (CURRENT_PATCH == "uxvc")
		{
			skill_number = 35;
		}
		else
		{
			skill_number = 30;
		}
		for (a = 1; a <= skill_number; a++)
		{
			d = (a - 1) % 5;
			if (a > 25)
			{
				d = 15
			}
			max[a] = slvlmax + slvlitembonus - d;
			if (max[a] < 0)
			{
				max[a] = 0
			}
			if (slvl[a] < 0)
			{
				slvl[a] = 0
			}
			if (clvl < d * 6)
			{
				slvl[a] = max[a] = 0
			}
		}
		if (slvl[26] > 0)
		{
			max[27] = max[28] = 0
		}
		if (slvl[27] > 0)
		{
			max[26] = max[28] = 0
		}
		if (slvl[28] > 0)
		{
			max[26] = max[27] = 0
		}
		if (!ennead)
		{
			lockout(29)
		}
		if (!blackroad)
		{
			lockout(30)
		}
		func_constraints();
		for (a = 0; a < 5; a++)
		{
			d = a * 5 + 1;
			for (b = d; b < d + 4; b++)
			{
				if (max[b] == 0 || slvl[b] == 0)
				{
					max[b + 1] = 0
				}
			}
		}
		for (a = 1; a <= skill_number; a++)
		{
			raiseMax(a, slvlskillbonus)
		}
		c = true;
		for (a = 1; a <= skill_number; a++)
		{
			if (slvl[a] > max[a])
			{
				c = false;
				slvl[a] = max[a]
			}
		}
		return c
	}

	function checkAll(c)
	{
		var b, e, a;
		for (b = 1; b <= 3; b++)
		{
			for (e = 0; e < 3; e++)
			{
				check("q" + b + "_" + e, c)
			}
		}
		a = 8;
		if (hasSlvlByItem())
		{
			a = 9
		}
		if (CURRENT_PATCH.substr(0, 1) == "u")
		{
			a = 12
		}
		for (b = 4; b <= a; b++)
		{
			check("q" + b, c)
		}
		if (CURRENT_PATCH.substr(0, 1) == "u")
		{
			uncheck("q9")
		}
		check("ennead", c);
		check("blackroad", c);
		check("ac500", c && (CURRENT_PATCH == "199d"));
		for (b = 0; b < 4; b++)
		{
			check("m" + b, c && IS_1E9_OR_NEWER)
		}
		for (b = 0; b < 3; b++)
		{
			check("sos" + b, c && IS_1E9_OR_NEWER)
		}
		recalculate()
	}

	function changeSkill(c, b)
	{
		var f = getFormElement("skill" + c + "_points"),
			e = parseInt(f.value),
			d = 0,
			a = e + b;
		if (a < 0)
		{
			a = 0
		}
		do {
			f.value = a;
			recalculate();
			d = parseInt(f.value)
		} while (d < a && d < max[c])
	}

	function clickRaise(b, a)
	{
		if (b.shiftKey)
		{
			changeSkill(a, 50)
		}
		else
		{
			changeSkill(a, 1)
		}
	}

	function clickLower(b, a)
	{
		if (b.shiftKey)
		{
			changeSkill(a, -100)
		}
		else
		{
			changeSkill(a, -1)
		}
	}

	function resetSkills()
	{
		var a;
		if (CURRENT_PATCH == "uxvc")
		{
			skill_number = 35;
		}
		else
		{
			skill_number = 30;
		}
		for (a = 1; a <= skill_number; a++)
		{
			getFormElement("skill" + a + "_points").value = "0"
		}
		recalculate()
	}

	function changeName()
	{
		var a = "Skillpoint-Planner for MedianXL",
			b = getFormElement("cname");
		cname = b.value;
		if (cname == "")
		{
			document.title = a
		}
		else
		{
			document.title = cname + " (" + classnames_readable[classnr] + ") - " + a
		}
	}

	function do_load(link) //load skills from url OR link
	{
		var k, b, r, c, s, t, o, h, m, f, n, l, p, g, e, j, a;
		if (link)
		{
			c=link;
		}
		else
		{
			c=window.location.href.split("?")[1];
		}
		if (!c)
		{
			return
		}
		s = c.match(/class=[1-7]/)[0];
		if (!s)
		{
			return
		}
		classnr = parseInt(s.slice(6));
		t = getFormElement("class");
		t.options.selectedIndex = classnr - 1;
		o = c.match(/lvl=[0-9]+/);
		clvl = 120;
		if (o)
		{
			clvl = parseInt(o[0].slice(4))
		}
		getFormElement("clvl").value = clvl;
		h = c.match(/v=[0-9A-FOduxi]+/);
		if (!h)
		{
			h = "199d"
		}
		else
		{
			h = h[0].slice(2)
		}
		CURRENT_PATCH = h;
		IS_1E9_OR_NEWER = (CURRENT_PATCH != "199d" && CURRENT_PATCH != "1A9" && CURRENT_PATCH != "1D9");
		IS_OMEGA = (CURRENT_PATCH.substr(0, 1) == "O") || (CURRENT_PATCH.substr(0, 4) == "2012") || (CURRENT_PATCH.substr(0, 1) == "u");
		m = getFormElement("version");
		for (k = 0; k < m.options.length; k++)
		{
			if (m.options[k].value == CURRENT_PATCH)
			{
				m.options.selectedIndex = k;
				break
			}
		}
		f = c.match(/bonus=[01]+/)[0];
		if (!f || f.length < 23)
		{
			return
		}
		if (CURRENT_PATCH == "199d")
		{
			check("ac500", f.charAt(17) == "1");
			f = f.substr(0, 17) + f.substr(18)
		}
		for (b = 1; b <= 3; b++)
		{
			for (r = 0; r < 3; r++)
			{
				check("q" + b + "_" + r, (f.charAt(3 + 3 * b + r) == "1"))
			}
		}
		check("ennead", (f.charAt(15) == "1"));
		check("blackroad", (f.charAt(16) == "1"));
		for (b = 4; b <= 12; b++)
		{
			check("q" + b, (f.charAt(b + 13) == "1"))
		}
		energy = 15;
		if (classnr == 1 && (CURRENT_PATCH == "199d" || CURRENT_PATCH == "1A9"))
		{
			n = c.match(/energy=[0-9]+/)[0];
			if (n)
			{
				energy = parseInt(n.slice(7))
			}
		}
		getFormElement("energy").value = energy;
		l = c.match(/skills=[0-9_]+/)[0];
		if (!l || l.length < 67)
		{
			return
		}
		p = l.slice(7).split("_");
		if (CURRENT_PATCH == "uxvc")
		{
			skill_number = 35;
		}
		else
		{
			skill_number = 30;
		}
		for (k = 1; k <= skill_number; k++)
		{
			slvl[k] = parseInt(p[k - 1]);
			getFormElement("skill" + k + "_points").value = slvl[k]
		}
		if (IS_1E9_OR_NEWER)
		{
			g = c.match(/mg=[01]+/)[0];
			if (!g || g.length < 7)
			{
				return
			}
			for (b = 0; b < 4; b++)
			{
				check("m" + b, (g.charAt(b + 3) == "1"))
			}
			e = c.match(/sos=[0123]/)[0];
			if (!e || e.length != 5)
			{
				return
			}
			j = parseInt(e.charAt(4));
			for (b = 0; b < j; b++)
			{
				check("sos" + b, true)
			}
			for (b = j; b < 3; b++)
			{
				check("sos" + b, false)
			}
		}
		a = c.match(/name=.*/)[0];
		if (!a)
		{
			return
		}
		cname = decodeURIComponent(a.slice(5));
		getFormElement("cname").value = cname;
		changeName()
	}

	function load(link)
	{
		if (link)
		{
			do_load(link);
		}
		else
		{
			do_load();
		}
		changeVersion()
	}

	function save()
	{
		var CURRENT_PATCH=getFormElement("version").value;
		var CURRENT_PATCH_READABLE=getFormElement("version").options[getFormElement("version").selectedIndex].text;
		var e, a, g, b, k, j, f, h;
		b = "v=" + CURRENT_PATCH;
		b += "&class=" + classnr + "&lvl=" + clvl + "&bonus=";
		for (a = 1; a <= 3; a++)
		{
			for (g = 0; g < 3; g++)
			{
				b += get("q" + a + "_" + g) > 0 ? "1" : "0"
			}
		}
		b += get("ennead") > 0 ? "1" : "0";
		b += get("blackroad") > 0 ? "1" : "0";
		if (CURRENT_PATCH == "199d")
		{
			b += get("ac500") > 0 ? "1" : "0"
		}
		for (a = 4; a <= 12; a++)
		{
			b += get("q" + a) > 0 ? "1" : "0"
		}
		if (classnr == 1 && (CURRENT_PATCH == "199d" || CURRENT_PATCH == "1A9"))
		{
			b += "&energy=" + energy
		}
		b += "&skills=";
		if (CURRENT_PATCH == "uxvc")
		{
			skill_number = 35;
		}
		else
		{
			skill_number = 30;
		}
		for (e = 1; e <= skill_number; e++)
		{
			b += slvl[e] + "_"
		}
		if (IS_1E9_OR_NEWER)
		{
			b += "&mg=";
			for (a = 0; a < 4; a++)
			{
				b += get("m" + a) > 0 ? "1" : "0"
			}
			var c = 0;
			for (a = 0; a < 3; a++)
			{
				c += get("sos" + a)
			}
			b += "&sos=" + c
		}
		b += "&name=" + encodeURIComponent(cname);
		k="http://www.authmann.de/d2/mxl/skillpointplanner/";
		j = k + "?" + b;
		f = "Skillplan " + cname + " (" + classnames_readable[classnr] + ", " + CURRENT_PATCH_READABLE + ")";
		set("save_url", f);
		document.getElementById("save_url").href = j;
		h = document.getElementById("save_bbcode");
		h.value = "[url=" + j + "]" + f + "[/url]";
		if (!(window.location.href.match(/authmann.de/)))
		{
			show("save_locally");
			k=window.location.href.split("?")[0];
			j = k + "?" + b;
			f = "Offline skillplan " + cname + " (" + classnames_readable[classnr] + ", " + CURRENT_PATCH_READABLE + ")";
			set("save_url_locally", f);
			document.getElementById("save_url_locally").href = j;
		}
		else
		{
			hide("save_locally");
			set("save_url_locally", "");
			document.getElementById("save_url_locally").href = "";
		}
		hideSave(false);
		h.focus();
		h.select()
	}

	function hideSave(a)
	{
		if (a == false)
		{
			show("blackout");
			show("overlay_save");
			show("overlay")
		}
		else
		{
			hide("blackout");
			hide("overlay_save");
			hide("overlay")
		}
	}

	function showFaq(a)
	{
		if (a == false)
		{
			hide("blackout");
			hide("overlay_faq");
			hide("overlay")
		}
		else
		{
			show("blackout");
			show("overlay_faq");
			show("overlay")
		}
	};