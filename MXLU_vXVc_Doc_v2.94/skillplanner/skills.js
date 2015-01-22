	/*
	This Script is Copyright by Tub (spam@authmann.de).

	see index.html for full copyright information.
	*/
	var skillicons = [];
	skillicons[1] = ["Bacchanalia", "Balance", "Balefire", "Barrage", "BloodElementals", "Bloodlust", "Bloodstorm", "Curare", "DeathRay", "DefensiveHarmony", "DragonForce", "Dragonlore", "EcstaticFrenzy", "Enfilade", "FairyRing", "GhostArrow", "GreatHunt", "HyenaStrike", "LavaPit", "Leadership", "Lightswarm", "Lioness", "MagicMissiles", "Moonbeam", "MoonQueen", "MoonWarrior", "PactofBlood", "Paragon", "Phalanx", "Pounce", "Prowl", "Ricochet", "Spellbind", "SpiritofVengeance", "Starstreak", "SummonFireElementals", "Takedown", "Trinity", "TriumphantStrike", "WarSpirit", "WildandFree", "WingsofWrath", "WraithArrow", "Wyrmshot", "EcstaticFrenzy", "GreatHunt", "WarSpirit", "SunStrike", "SunStrike", "Thundercrack", "Stormcall", "HammerofZerae", "Asterism", "MagneticField", ""]; //4+6 new
	skillicons[2] = ["BarrierStrike", "Batstrike", "Beacon", "BioneticBlast", "BlackLotusStrike", "Blink", "Broadside", "ClusterMine", "Crucify", "CryoBeam", "DeathBlossom", "Doom", "ElectrofieldSentry", "FireballSentry", "HadesGate", "ImmolationBomb", "Laserblade", "LimpetLaser", "Maelstrom", "NovaBomb", "PerfectBeing", "PhaseBomb", "Premeditation", "PsionicStorm", "PsychicScream", "QueenofBlades", "RainofBombs", "RocketBlade", "RuneofIce", "ScorpionBlade", "SealofFire", "ShadowRefuge", "Singularity", "Starburst", "StormCloudSentry", "StormCrows", "TwinFangStrike", "VampiricIcon", "WayoftheGryphon", "WayofthePhoenix", "WayoftheRaven", "WayoftheSpider", "Wychwind", "SummonDarkSpirit", "Batstrike", "ShurikenFlurry", "PsionicStorm", "ElectrofieldSentry", "FireballSentry", "TieflingForm", "ShadowDancer", "Noctule", "Backstab", "Obliteration", "PsionicStorm", ""]; //6+5 new
	skillicons[3] = ["AncientBlood", "BearClaw", "BearStance", "BerserkFury", "Bloodhatred", "BloodHatred", "DefenderSpirit", "EagleDive", "EagleStance", "Earthquake", "Fortress", "GreaterManifestations", "GuardianSpirit", "GuardTower", "HawkTalons", "Immortal", "KrakenStance", "LionStance", "MountainKing", "NephalemWeapons", "Overkill", "Predator", "ProtectorSpirit", "Rebound", "Runemaster", "ScreamingEagle", "ShamanicTrance", "ShamansPath", "ShowerofRocks", "SnakeStance", "SpiritGuide", "SpiritWalk", "Stampede", "Stormblast", "Thundergod", "ThunderSlam", "TitanStrike", "WolfCompanion", "WolfStance", "Earthquake", "Stormblast", "Iceburst", "IronSpiral", "Deathgaze", "Daedalus", "Windform", ""]; //2+5 new
	skillicons[4] = ["Blindside", "Brambles", "CallLeprechaun", "CallScavengers", "Cascade", "Charm", "CircleofLife", "CullingoftheHerd", "Cyclone", "Dominate", "EggTrap", "Elemental", "ElfinArrows", "ElfinWeapons", "Elvensong", "FaerieFire", "Ferocity", "FireFountain", "ForceofNature", "FreezingGale", "GammaField", "Goodberry", "Hailstorm", "Havoc", "HuntingBanshee", "IdolOfScosglen", "KillerInstinct", "LaughingGhost", "Lifeshield", "MarkoftheWild", "Mythal", "NovaShot", "PaganRites", "PlagueAvatar", "PoisonFlash", "Pummel", "QuillStorm", "RainofFire", "Rampage", "ShrineofExtinction", "SporeShot", "SummonAcidFiends", "ThornWall", "ThrilloftheHunt", "ToothandClaw", "TrapRatForm", "TreewardenForm", "Tremor", "Wildfire", "FreezingGale", "PoisonFlash", "TreewardenForm", "WerewolfForm", "ManaPulse", "Harbinger", "FeedthePack", "TwistedClaw", "Mythal", ""]; //2+7 new
	skillicons[5] = ["AngelofDeath", "Bane", "BendtheShadows", "BendTheShadows", "BlackMass", "BloodTideTotem", "Buckshot", "Deathlord", "DeathsFuryTotem", "Deathstrike", "DeathWard", "DragonfireOil", "ElementalTotem", "Embalming", "ExplodingTotem", "Famine", "FireheartTotem", "FlametailShot", "FragmentationShot", "FrostclawTotem", "Graveyard", "HowlingTotem", "LicheForm", "ManaTideTotem", "Massacre", "NecromanticTrance", "OathbreakerTotem", "Parasite", "RathmasChosen", "Sacrifices", "Soulshatter", "StormeyeTotem", "SummonDarklings", "SummonJinn", "SummonLamia", "SummonRampagor", "SummonShadows", "SummonVeilKing", "SummonVoidArchon", "TalonsHold", "TotemboundGuardian", "TotemicMastery", "UnholyArmor", "UnholyPrayer", "VoodooShot", "Widowmaker", "Boneyard", "FuneralPyre", "RottingFlesh", "Nightwalker", "Pestilence", ""]; //0+5 new
	skillicons[6] = ["BlackSleep", "BlessedLife", "BloodThorns", "Brimstone", "Colosseum", "DarkKing", "DivineApparition", "EdictofForbiddance", "GlitteringRegalia", "Hammerstrike", "HolyArmor", "HolyInsanity", "HolyTrap", "Hymn", "Judgement", "Lemures", "LightandShadow", "Lionheart", "Merkabah", "MindFlay", "Plague", "Punisher", "Rapture", "Resurrect", "Retaliate", "Retribute", "RingofLight", "RisingDawn", "SacredArmor", "Scourge", "SearingGlow", "SearingOrb", "Shadowfiends", "Slayer", "Sovereignty", "Stormlord", "Sunstorm", "Superbeast", "SymphonyOfDestruction", "TaintedBlood", "TerrorStrike", "VesselofJudgement", "Vindicate", "Wrath", "BlazingFury", "Winterstorm", "BlackSleep", "DragonOath", "Dragonshout", "Burnout", "Demonrend", "DevaKing", "VesselofRetribution", "SacredArmor", "Hoplite", "Dragonshout", "Burnout", "Demonrend", "Euphoria", "LifeandDeath", "Demiurge", ""]; //6+9 new
	skillicons[7] = ["Abyss", "ArcaneFury", "ArcaneTorrent", "Baneblade", "Bladestorm", "CarpetofSpiders", "Chronofield", "ColdFear", "DiseasedCattle", "Disintegrate", "Familiar", "FearofFire", "Firedance", "Flamefront", "Flamestrike", "ForceBlast", "ForkedLightning", "FrigidSphere", "FrozenSoul", "FullForce", "Hex", "Hive", "IceLance", "Illumination", "InnerFire", "LightningCascade", "LightningWall", "LivingFlame", "Lorenado", "ManaSweep", "Miasma", "Moonstrike", "MysticBlood", "NovaCharge", "Pyroblast", "ShattertheFlesh", "SnowQueen", "SpiralDance", "Starfire", "StaticOrb", "SummonIceElementals", "SymbolofEsu", "Tempest", "Thunderstone", "TimeField", "VengefulPower", "VenomousSpirit", "WarpArmor", "Wiccaning", "WitchBlood", "Bladestorm", "Chronofield", "WitchBlood", "NovaCharge", "FrigidSphere", "ArcaneTorrent", "Antimass", "Wraithsword", "Fusillade", "SummonBladeSpirits", ""]; //5+5 new
	var skillnames_199d = new Array();
	skillnames_199d[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Wraith Arrow", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Lightswarm", "Starstreak", "Ricochet", "Enfilade", "Moon Warrior", "Fairy Ring", "Death Ray", "Bloodlust", "Bloodstorm", "Bacchanalia", "Magic Missiles", "Defensive Harmony", "Blood Elementals", "Balance", "Pact of Blood", "Wings of Wrath", "Curare", "Paragon", "Spirit of Vengeance", "Leadership", "War Spirit");
	skillnames_199d[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom", "Broadside", "Seal of Fire", "Rune of Ice", "Nova Bomb", "Immolation Bomb", "Singularity", "Blink", "Starburst", "Premeditation", "Rain of Bombs", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_199d[3] = new Array("", "Titan Strike", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Earthquake", "Bear Claw", "Stampede", "Rebound", "Eagle Dive", "Hawk Talons", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Shamans Path", "Ancient Blood", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Guard Tower", "Berserk Fury", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Wolf Stance", "Thundergod");
	skillnames_199d[4] = new Array("", "Charm", "Call Leprechaun", "Havoc", "Dominate", "Elvensong", "Mark of the Wild", "Killer Instinct", "Culling of the Herd", "Brambles", "Thrill of the Hunt", "Elemental", "Hunting Banshee", "Pagan Rites", "Fire Fountain", "Hailstorm", "Poison Flash", "Circle of Life", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Arrows", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_199d[5] = new Array("", "Deaths Fury Totem", "Blood Tide Totem", "Mana Tide Totem", "Elemental Totem", "Howling Totem", "Totemic Mastery", "Frostclaw Totem", "Fireheart Totem", "Exploding Totem", "Stormeye Totem", "Buckshot", "Angel of Death", "Widowmaker", "Soulshatter", "Deathstrike", "Unholy Armor", "Sacrifices", "Famine", "Bend The Shadows", "Talons Hold", "Summon Shadows", "Summon Darklings", "Summon Rampagor", "Summon Lamia", "Summon Void Archon", "Necromantic Trance", "Rathmas Chosen", "Death Ward", "Unholy Prayer", "Liche Form");
	skillnames_199d[6] = new Array("", "Retaliate", "Holy Insanity", "Retribute", "Lionheart", "Blessed Life", "Searing Orb", "Ring of Light", "Holy Trap", "Wrath", "Vindicate", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Shadowfiends", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Judgement", "Rapture", "Light and Shadow", "Holy Armor", "Hymn", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Scourge");
	skillnames_199d[7] = new Array("", "Flamefront", "Inner Fire", "Flamestrike", "Pyroblast", "Illumination", "Frozen Soul", "Shatter the Flesh", "Cold Fear", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Static Orb", "Lightning Wall", "Warp Armor", "Nova Charge", "Diseased Cattle", "Venomous Spirit", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Starfire", "Time Field", "Full Force", "Bladestorm", "Arcane Fury", "Disintegrate");

	function check_constraints_199d()
	{
		if (classnr == 1)
		{
			raiseMax(9, Math.floor((slvl[6] + slvl[7] + slvl[8] + slvl[10]) / 2));
			j = Math.floor(energy / 100);
			raiseMax(16, j);
			raiseMax(18, j);
			raiseMax(20, j);
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[16] > 0)
			{
				slvlskillbonus += Math.floor(slvl[16] / 4) + 1
			}
			if (slvl[28] > 0)
			{
				var j = Math.floor(slvl[28] / 2);
				raiseMax(11, j);
				raiseMax(12, j);
				raiseMax(13, j)
			}
			raiseMax(17, Math.floor((slvl[18] + slvl[19] + slvl[20] + slvl[26] + slvl[29]) / 2));
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(7, Math.floor(slvl[8] / 2));
			raiseMax(8, Math.floor(slvl[10] / 2));
			raiseMax(10, Math.floor(slvl[7] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(30, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_1A9 = new Array();
	skillnames_1A9[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Dragon Force", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Lightswarm", "Starstreak", "Ricochet", "Enfilade", "Moon Warrior", "Fairy Ring", "Death Ray", "Bloodlust", "Bloodstorm", "Bacchanalia", "Magic Missiles", "Defensive Harmony", "Blood Elementals", "Balance", "Pact of Blood", "Wings of Wrath", "Curare", "Paragon", "Spirit of Vengeance", "Leadership", "War Spirit");
	skillnames_1A9[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Rocket Blade", "Broadside", "Seal of Fire", "Rune of Ice", "Nova Bomb", "Immolation Bomb", "Singularity", "Blink", "Starburst", "Premeditation", "Rain of Bombs", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_1A9[3] = new Array("", "Titan Strike", "Blood Hatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Hawk Talons", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Shamans Path", "Ancient Blood", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Companion", "Predator", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Wolf Stance", "Thundergod");
	skillnames_1A9[4] = new Array("", "Charm", "Call Leprechaun", "Havoc", "Dominate", "Elvensong", "Mark of the Wild", "Killer Instinct", "Culling of the Herd", "Brambles", "Thrill of the Hunt", "Elemental", "Hunting Banshee", "Pagan Rites", "Fire Fountain", "Hailstorm", "Poison Flash", "Circle of Life", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Arrows", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_1A9[5] = new Array("", "Deaths Fury Totem", "Blood Tide Totem", "Mana Tide Totem", "Elemental Totem", "Howling Totem", "Totemic Mastery", "Frostclaw Totem", "Fireheart Totem", "Exploding Totem", "Stormeye Totem", "Buckshot", "Angel of Death", "Widowmaker", "Soulshatter", "Deathstrike", "Unholy Armor", "Sacrifices", "Famine", "Bend The Shadows", "Talons Hold", "Summon Shadows", "Summon Darklings", "Summon Rampagor", "Summon Lamia", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Unholy Prayer", "Liche Form");
	skillnames_1A9[6] = new Array("", "Retaliate", "Holy Insanity", "Edict of Forbiddance", "Lionheart", "Blessed Life", "Searing Glow", "Ring of Light", "Holy Trap", "Wrath", "Vindicate", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Shadowfiends", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Vessel of Judgement", "Rapture", "Light and Shadow", "Holy Armor", "Hymn", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Scourge");
	skillnames_1A9[7] = new Array("", "Flamefront", "Fear of Fire", "Flamestrike", "Pyroblast", "Illumination", "Ice Lance", "Shatter the Flesh", "Frigid Sphere", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Lightning Cascade", "Warp Armor", "Nova Charge", "Diseased Cattle", "Lorenado", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Spiral Dance", "Time Field", "Full Force", "Bladestorm", "Symbol of Esu", "Arcane Fury");

	function check_constraints_1A9()
	{
		if (classnr == 1)
		{
			raiseMax(9, Math.floor((slvl[6] + slvl[7] + slvl[8] + slvl[10]) / 2));
			j = Math.floor(energy / 100);
			raiseMax(16, j);
			raiseMax(18, j);
			raiseMax(20, j);
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[16] > 0)
			{
				slvlskillbonus += Math.floor(slvl[16] / 4) + 1
			}
			if (slvl[28] > 0)
			{
				var j = Math.floor(slvl[28] / 2);
				raiseMax(11, j);
				raiseMax(12, j);
				raiseMax(13, j)
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(7, Math.floor(slvl[8] / 2));
			raiseMax(8, Math.floor(slvl[10] / 2));
			raiseMax(10, Math.floor(slvl[7] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(30, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_1D9 = new Array();
	skillnames_1D9[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Dragon Force", "Moonbeam", "Ricochet", "Enfilade", "Moon Warrior", "Fairy Ring", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Bloodlust", "Bloodstorm", "Bacchanalia", "Lava Pit", "Defensive Harmony", "Summon Fire Elementals", "Balance", "Pact of Blood", "Wings of Wrath", "Curare", "Paragon", "Spirit of Vengeance", "Leadership", "War Spirit");
	skillnames_1D9[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom2", "Broadside", "Seal of Fire", "Cryo Beam", "Nova Bomb", "Immolation Bomb", "Singularity", "Blink", "Starburst", "Premeditation", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_1D9[3] = new Array("", "Titan Strike", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Ancient Blood", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Companion", "Predator", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Wolf Stance", "Thundergod");
	skillnames_1D9[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Rampage", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Hailstorm", "Poison Flash", "Charm", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_1D9[5] = new Array("", "Deaths Fury Totem", "Blood Tide Totem", "Mana Tide Totem", "Elemental Totem", "Howling Totem", "Frostclaw Totem", "Totembound Guardian", "Fireheart Totem", "Oathbreaker Totem", "Stormeye Totem", "Buckshot", "Angel of Death", "Widowmaker", "Parasite", "Deathlord", "Unholy Armor", "Sacrifices", "Famine", "Bend the Shadows", "Talons Hold", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Unholy Prayer", "Liche Form");
	skillnames_1D9[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Blessed Life", "Searing Glow", "Ring of Light", "Brimstone", "Wrath", "Vindicate", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Shadowfiends", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Vessel of Judgement", "Rapture", "Light and Shadow", "Holy Armor", "Hymn", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Scourge");
	skillnames_1D9[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Illumination", "Ice Lance", "Shatter the Flesh", "Frigid Sphere", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Lightning Cascade", "Warp Armor", "Nova Charge", "Diseased Cattle", "Lorenado", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Time Field", "Mystic Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");

	function check_constraints_1D9()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[16] > 0)
			{
				slvlskillbonus += Math.floor(slvl[16] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(6, Math.floor(slvl[8] / 2));
			raiseMax(8, Math.floor(slvl[10] / 2));
			raiseMax(10, Math.floor(slvl[6] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(30, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_1E9 = new Array();
	skillnames_1E9[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Dragon Force", "Moonbeam", "Ricochet", "Enfilade", "Moon Warrior", "Fairy Ring", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Bloodlust", "Bloodstorm", "Bacchanalia", "Lava Pit", "Defensive Harmony", "Summon Fire Elementals", "Balance", "Pact of Blood", "Wings of Wrath", "Curare", "Paragon", "Spirit of Vengeance", "Leadership", "War Spirit");
	skillnames_1E9[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom2", "Broadside", "Seal of Fire", "Cryo Beam", "Nova Bomb", "Immolation Bomb", "Singularity", "Blink", "Starburst", "Premeditation", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_1E9[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_1E9[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Rampage", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Hailstorm", "Poison Flash", "Charm", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_1E9[5] = new Array("", "Deaths Fury Totem", "Blood Tide Totem", "Mana Tide Totem", "Elemental Totem", "Howling Totem", "Frostclaw Totem", "Totembound Guardian", "Fireheart Totem", "Oathbreaker Totem", "Stormeye Totem", "Buckshot", "Angel of Death", "Widowmaker", "Parasite", "Deathlord", "Unholy Armor", "Sacrifices", "Famine", "Bend the Shadows", "Talons Hold", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Unholy Prayer", "Liche Form");
	skillnames_1E9[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Blessed Life", "Searing Glow", "Ring of Light", "Brimstone", "Wrath", "Vindicate", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Shadowfiends", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Vessel of Judgement", "Rapture", "Light and Shadow", "Holy Armor", "Hymn", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Scourge");
	skillnames_1E9[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Illumination", "Ice Lance", "Shatter the Flesh", "Frigid Sphere", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Lightning Cascade", "Warp Armor", "Nova Charge", "Diseased Cattle", "Lorenado", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Time Field", "Mystic Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");

	function check_constraints_1E9()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(6, Math.floor(slvl[8] / 2));
			raiseMax(8, Math.floor(slvl[10] / 2));
			raiseMax(10, Math.floor(slvl[6] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(30, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_1F9 = new Array();
	skillnames_1F9[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Dragon Force", "Moonbeam", "Ricochet", "Enfilade", "Moon Warrior", "Fairy Ring", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Defensive Harmony", "Summon Fire Elementals", "Balance", "Pact of Blood", "Wings of Wrath", "Curare", "Paragon", "Spirit of Vengeance", "Leadership", "War Spirit");
	skillnames_1F9[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom2", "Broadside", "Seal of Fire", "Cryo Beam", "Storm Cloud Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Premeditation", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_1F9[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_1F9[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Rampage", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Hailstorm", "Poison Flash", "Charm", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_1F9[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Oathbreaker Totem", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Widowmaker", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Unholy Prayer", "Liche Form");
	skillnames_1F9[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Blessed Life", "Searing Glow", "Ring of Light", "Brimstone", "Wrath", "Rising Dawn", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Shadowfiends", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred  Armor", "Hymn", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Scourge");
	skillnames_1F9[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Illumination", "Ice Lance", "Shatter the Flesh", "Frigid Sphere", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Lightning Cascade", "Warp Armor", "Nova Charge", "Diseased Cattle", "Lorenado", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Time Field", "Mystic Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");

	function check_constraints_1F9()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(2, Math.floor(slvl[3] / 2));
			raiseMax(3, Math.floor(slvl[5] / 2));
			raiseMax(5, Math.floor(slvl[2] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(30, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_1G9 = new Array();
	skillnames_1G9[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Dragon Force", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Defensive Harmony", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Wings of Wrath", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_1G9[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom2", "Broadside", "Seal of Fire", "Cryo Beam", "Storm Cloud Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Premeditation", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_1G9[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_1G9[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Rampage", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Cyclone", "Poison Flash", "Charm", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_1G9[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Oathbreaker Totem", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Widowmaker", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Liche Form");
	skillnames_1G9[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Blessed Life", "Searing Glow", "Ring of Light", "Brimstone", "Wrath", "Rising Dawn", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Shadowfiends", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred  Armor", "Hymn", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Scourge");
	skillnames_1G9[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Illumination", "Ice Lance", "Shatter the Flesh", "Frigid Sphere", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Lightning Cascade", "Warp Armor", "Nova Charge", "Diseased Cattle", "Lorenado", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");

	function check_constraints_1G9()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(2, Math.floor(slvl[3] / 2));
			raiseMax(3, Math.floor(slvl[5] / 2));
			raiseMax(5, Math.floor(slvl[2] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(30, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_1Z9 = new Array();
	skillnames_1Z9[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Trinity", "Dragon Force", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Triumphant Strike", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Wings of Wrath", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Defensive Harmony", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_1Z9[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Hades Gate", "Doom", "Way of the Spider", "Shadow Refuge", "Black Lotus Strike", "Death Blossom", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom2", "Broadside", "Seal of Fire", "Cryo Beam", "Storm Cloud Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Premeditation", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Way of the Raven");
	skillnames_1Z9[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Kraken Stance", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_1Z9[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Rampage", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Freezing Gale", "Poison Flash", "Charm", "Plague Avatar", "Gamma Field", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_1Z9[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Oathbreaker Totem", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Widowmaker", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Liche Form");
	skillnames_1Z9[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Blessed Life", "Searing Glow", "Ring of Light", "Brimstone", "Wrath", "Rising Dawn", "Terror Strike", "Black Sleep", "Lemures", "Blood Thorns", "Hymn", "Tainted Blood", "Mind Flay", "Punisher", "Slayer", "Dark King", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred  Armor", "Scourge", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Sovereignty");
	skillnames_1Z9[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Illumination", "Ice Lance", "Shatter the Flesh", "Frigid Sphere", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Lightning Cascade", "Warp Armor", "Nova Charge", "Diseased Cattle", "Lorenado", "Hex", "Carpet of Spiders", "Hive", "Moonstrike", "Wiccaning", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");

	function check_constraints_1Z9()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(2, Math.floor(slvl[3] / 2));
			raiseMax(3, Math.floor(slvl[5] / 2));
			raiseMax(5, Math.floor(slvl[2] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[3] / 2);
			raiseMax(4, j);
			raiseMax(5, j);
			raiseMax(25, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	var skillnames_O001 = new Array();
	skillnames_O001[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Dragonlore", "Wyrmshot", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Takedown", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Wings of Wrath", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Defensive Harmony", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_O001[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Barrier Strike", "Doom", "Way of the Spider", "Shadow Refuge", "Twin Fang Strike", "Laserblade", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom3", "Broadside", "Cluster Mine", "Cryo Beam", "Electrofield Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Bionetic Blast", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Psychic Scream");
	skillnames_O001[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Nephalem Weapons", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_O001[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Idol Of Scosglen", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Freezing Gale", "Poison Flash", "Elvensong", "Plague Avatar", "Mythal", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_O001[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Bane", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Widowmaker", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Graveyard");
	skillnames_O001[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Colosseum", "Searing Glow", "Ring of Light", "Brimstone", "Glittering Regalia", "Rising Dawn", "Terror Strike", "Lemures", "Black Sleep", "Blood Thorns", "Hymn", "Tainted Blood", "Mind Flay", "Symphony Of Destruction", "Slayer", "Stormlord", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred Armor", "Scourge", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Blessed Life");
	skillnames_O001[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Firedance", "Shatter the Flesh", "Frigid Sphere", "Snow Queen", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Tempest", "Warp Armor", "Nova Charge", "Lorenado", "Vengeful Power", "Miasma", "Carpet of Spiders", "Hive", "Moonstrike", "Familiar", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");

	function check_constraints_O001()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(2, Math.floor(slvl[3] / 2));
			raiseMax(3, Math.floor(slvl[5] / 2));
			raiseMax(5, Math.floor(slvl[2] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[2] / 2) + Math.floor(slvl[3] / 2) + Math.floor(slvl[5] / 2);
			raiseMax(4, j);
			raiseMax(25, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			if (!d && !e)
			{
				lockout(23)
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}

	function check_constraints_O002()
	{
		if (classnr == 1)
		{
			raiseMax(14, Math.floor((slvl[11] + slvl[12] + slvl[13] + slvl[15]) / 2));
			if (slvl[4] > 0)
			{
				lockout(6, 20)
			}
			if (slvl[9] > 0)
			{
				lockout(1, 5);
				lockout(11, 20)
			}
			if (slvl[14] > 0)
			{
				lockout(1, 10);
				lockout(16, 20)
			}
			if (slvl[19] > 0)
			{
				lockout(1, 15)
			}
			for (var f = 1; f <= 3; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(9);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 6; f <= 8; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(14);
					lockout(19)
				}
			}
			for (var f = 11; f <= 13; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(19)
				}
			}
			for (var f = 16; f <= 18; f++)
			{
				if (slvl[f] > 0)
				{
					lockout(4);
					lockout(9);
					lockout(14)
				}
			}
			return
		}
		if (classnr == 3)
		{
			if (slvl[22] > 0)
			{
				slvlskillbonus += Math.floor(slvl[22] / 4) + 1
			}
			return
		}
		if (classnr == 4)
		{
			raiseMax(24, Math.floor((slvl[21] + slvl[22] + slvl[23] + slvl[25]) / 2));
			return
		}
		if (classnr == 5)
		{
			raiseMax(2, Math.floor(slvl[3] / 2));
			raiseMax(3, Math.floor(slvl[5] / 2));
			raiseMax(5, Math.floor(slvl[2] / 2));
			return
		}
		if (classnr == 6)
		{
			var j = Math.floor(slvl[1] / 2) + Math.floor(slvl[2] / 2) + Math.floor(slvl[3] / 2) + Math.floor(slvl[5] / 2);
			raiseMax(4, j);
			raiseMax(25, Math.floor(slvl[23] / 2));
			var c = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26);
			var g = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27);
			var e = false;
			var d = false;
			for (var f = 0; f < c.length - 1; f++)
			{
				if (slvl[c[f]] > 0)
				{
					e = true
				}
			}
			for (var f = 0; f < g.length - 1; f++)
			{
				if (slvl[g[f]] > 0)
				{
					d = true
				}
			}
			e = e || (slvl[c[c.length - 1]] > 0);
			d = d || (slvl[g[g.length - 1]] > 0);
			if (d)
			{
				for (var f = 0; f < c.length; f++)
				{
					lockout(c[f])
				}
			}
			if (e)
			{
				for (var f = 0; f < g.length; f++)
				{
					lockout(g[f])
				}
			}
			return
		}
		if (classnr == 7)
		{
			var b = 0;
			for (var f = 0; f < 4; f++)
			{
				for (var k = 0; k < 5; k++)
				{
					if (slvl[f * 5 + k + 1] > 0)
					{
						b++;
						break
					}
				}
			}
			if (b >= 2)
			{
				var h = 0;
				for (var f = 0; f < 4; f++)
				{
					var a = false;
					for (var k = 0; k < 5; k++)
					{
						if (slvl[f * 5 + k + 1] > 0)
						{
							a++;
							break
						}
					}
					if (!a || h >= 2)
					{
						lockout(f * 5 + 1, f * 5 + 5)
					}
					else
					{
						if (a)
						{
							h++
						}
					}
				}
			}
			return
		}
	}
	
	var skillnames_O003 = new Array();
	skillnames_O003[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Dragonlore", "Wyrmshot", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Takedown", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Wild and Free", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Defensive Harmony", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_O003[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Barrier Strike", "Doom", "Way of the Spider", "Shadow Refuge", "Twin Fang Strike", "Laserblade", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom3", "Broadside", "Cluster Mine", "Cryo Beam", "Electrofield Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Bionetic Blast", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Psychic Scream");
	skillnames_O003[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Nephalem Weapons", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_O003[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Idol Of Scosglen", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Freezing Gale", "Poison Flash", "Elvensong", "Plague Avatar", "Mythal", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_O003[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Bane", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Widowmaker", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Graveyard");
	skillnames_O003[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Colosseum", "Searing Glow", "Ring of Light", "Brimstone", "Glittering Regalia", "Rising Dawn", "Terror Strike", "Lemures", "Black Sleep", "Blood Thorns", "Hymn", "Tainted Blood", "Mind Flay", "Symphony Of Destruction", "Slayer", "Stormlord", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred Armor", "Scourge", "Resurrect", "Superbeast", "Plague", "Divine Apparition", "Blessed Life");
	skillnames_O003[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Firedance", "Shatter the Flesh", "Frigid Sphere", "Snow Queen", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Tempest", "Warp Armor", "Nova Charge", "Lorenado", "Vengeful Power", "Miasma", "Carpet of Spiders", "Hive", "Moonstrike", "Familiar", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");
	
	var skillnames_2012 = new Array();
	skillnames_2012[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Dragonlore", "Wyrmshot", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Takedown", "Prowl", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Wild and Free", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Defensive Harmony", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_2012[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Barrier Strike", "Doom", "Way of the Spider", "Shadow Refuge", "Twin Fang Strike", "Laserblade", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom4", "Broadside", "Cluster Mine", "Limpet Laser", "Electrofield Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Bionetic Blast", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Psychic Scream");
	skillnames_2012[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Nephalem Weapons", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_2012[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Idol Of Scosglen", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Freezing Gale", "Poison Flash", "Elvensong", "Plague Avatar", "Mythal", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_2012[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Bane", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Voodoo Shot", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Graveyard");
	skillnames_2012[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Colosseum", "Searing Glow", "Ring of Light", "Brimstone", "Sunstorm", "Rising Dawn", "Terror Strike", "Lemures", "Black Sleep", "Blood Thorns", "Hymn", "Tainted Blood", "Mind Flay", "Symphony Of Destruction", "Slayer", "Stormlord", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred Armor", "Scourge", "Plague", "Superbeast", "Resurrect", "Divine Apparition", "Blessed Life");
	skillnames_2012[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Firedance", "Shatter the Flesh", "Frigid Sphere", "Snow Queen", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Tempest", "Warp Armor", "Nova Charge", "Lorenado", "Vengeful Power", "Miasma", "Carpet of Spiders", "Hive", "Moonstrike", "Familiar", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Arcane Fury");
	
	var skillnames_2012004 = new Array();
	skillnames_2012004[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Dragonlore", "Wyrmshot", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Takedown", "Hyena Strike", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Wild and Free", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Defensive Harmony", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_2012004[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Barrier Strike", "Doom", "Way of the Spider", "Shadow Refuge", "Twin Fang Strike", "Laserblade", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom4", "Broadside", "Cluster Mine", "Limpet Laser", "Electrofield Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Bionetic Blast", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Psychic Scream");
	skillnames_2012004[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Nephalem Weapons", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_2012004[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Idol Of Scosglen", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Freezing Gale", "Poison Flash", "Elvensong", "Plague Avatar", "Mythal", "Summon Acid Fiends", "Blindside", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_2012004[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Bane", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Voodoo Shot", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Graveyard");
	skillnames_2012004[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Colosseum", "Searing Glow", "Ring of Light", "Brimstone", "Sunstorm", "Rising Dawn", "Terror Strike", "Lemures", "Black Sleep", "Blood Thorns", "Hymn", "Tainted Blood", "Mind Flay", "Symphony Of Destruction", "Slayer", "Stormlord", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred Armor", "Scourge", "Plague", "Superbeast", "Resurrect", "Divine Apparition", "Blessed Life");
	skillnames_2012004[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Firedance", "Shatter the Flesh", "Frigid Sphere", "Snow Queen", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Tempest", "Warp Armor", "Nova Charge", "Lorenado", "Vengeful Power", "Miasma", "Carpet of Spiders", "Hive", "Moonstrike", "Familiar", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Force Blast");
	
	var skillnames_2012005 = new Array();
	skillnames_2012005[1] = new Array("", "Ghost Arrow", "Barrage", "Phalanx", "Dragonlore", "Wyrmshot", "Moonbeam", "Ricochet", "Enfilade", "Moon Queen", "Fairy Ring", "Takedown", "Hyena Strike", "Pounce", "Lioness", "Great Hunt", "Magic Missiles", "Balefire", "Bloodstorm", "Bacchanalia", "Lava Pit", "Wild and Free", "Summon Fire Elementals", "Balance", "Ecstatic Frenzy", "Defensive Harmony", "Curare", "Paragon", "Spirit of Vengeance", "Spellbind", "War Spirit");
	skillnames_2012005[2] = new Array("", "Batstrike", "Crucify", "Queen of Blades", "Barrier Strike", "Doom", "Way of the Spider", "Shadow Refuge", "Twin Fang Strike", "Laserblade", "Way of the Phoenix", "Scorpion Blade", "Storm Crows", "Wychwind", "Maelstrom4", "Broadside", "Cluster Mine", "Limpet Laser", "Electrofield Sentry", "Fireball Sentry", "Singularity", "Blink", "Starburst", "Bionetic Blast", "Psionic Storm", "Perfect Being", "Beacon", "Way of the Gryphon", "Phase Bomb", "Vampiric Icon", "Psychic Scream");
	skillnames_2012005[3] = new Array("", "Earthquake", "Bloodhatred", "Thunder Slam", "Shower of Rocks", "Stormblast", "Bear Claw", "Stampede", "Rebound", "Screaming Eagle", "Overkill", "Guardian Spirit", "Defender Spirit", "Protector Spirit", "Greater Manifestations", "Spirit Walk", "Lion Stance", "Snake Stance", "Bear Stance", "Eagle Stance", "Wolf Stance", "Wolf Companion", "Ancient Blood", "Fortress", "Spirit Guide", "Mountain King", "Nephalem Weapons", "Runemaster", "Shamanic Trance", "Immortal", "Thundergod");
	skillnames_2012005[4] = new Array("", "Treewarden Form", "Pummel", "Circle of Life", "Wildfire", "Idol Of Scosglen", "Trap Rat Form", "Quill Storm", "Egg Trap", "Ferocity", "Thorn Wall", "Elemental", "Hunting Banshee", "Pagan Rites", "Rain of Fire", "Freezing Gale", "Poison Flash", "Elvensong", "Plague Avatar", "Mythal", "Summon Acid Fiends", "Laughing Ghost", "Cascade", "Spore Shot", "Elfin Weapons", "Nova Shot", "Force of Nature", "Faerie Fire", "Tremor", "Goodberry", "Lifeshield");
	skillnames_2012005[5] = new Array("", "Deaths Fury Totem", "Frostclaw Totem", "Fireheart Totem", "Howling Totem", "Stormeye Totem", "Embalming", "Sacrifices", "Bend the Shadows", "Bane", "Talons Hold", "Massacre", "Angel of Death", "Famine", "Parasite", "Deathlord", "Buckshot", "Flametail Shot", "Dragonfire Oil", "Fragmentation Shot", "Voodoo Shot", "Summon Shadows", "Summon Rampagor", "Summon Lamia", "Summon Veil King", "Summon Void Archon", "Summon Jinn", "Rathmas Chosen", "Death Ward", "Black Mass", "Graveyard");
	skillnames_2012005[6] = new Array("", "Retaliate", "Hammerstrike", "Merkabah", "Lionheart", "Colosseum", "Searing Glow", "Ring of Light", "Brimstone", "Sunstorm", "Rising Dawn", "Terror Strike", "Lemures", "Black Sleep", "Blood Thorns", "Hymn", "Tainted Blood", "Mind Flay", "Symphony Of Destruction", "Slayer", "Stormlord", "Vessel of Judgement", "Rapture", "Light and Shadow", "Sacred Armor", "Scourge", "Plague", "Superbeast", "Resurrect", "Divine Apparition", "Blessed Life");
	skillnames_2012005[7] = new Array("", "Flamefront", "Living Flame", "Flamestrike", "Pyroblast", "Firedance", "Shatter the Flesh", "Frigid Sphere", "Snow Queen", "Abyss", "Summon Ice Elementals", "Forked Lightning", "Thunderstone", "Tempest", "Warp Armor", "Nova Charge", "Lorenado", "Vengeful Power", "Miasma", "Carpet of Spiders", "Hive", "Moonstrike", "Familiar", "Arcane Torrent", "Mana Sweep", "Bladestorm", "Chronofield", "Witch Blood", "Baneblade", "Symbol of Esu", "Force Blast");
	
	var skillnames_uxi=new Array();
	skillnames_uxi[1]=new Array("","Ghost Arrow","Barrage","Phalanx","Dragonlore","Wyrmshot","Moonbeam","Ricochet","Enfilade","Moon Queen","Fairy Ring","Takedown","Hyena Strike","Pounce","Lioness",Array("Great Hunt",2,true),"Magic Missiles","Balefire","Bloodstorm","Bacchanalia","Lava Pit","Wild and Free","Summon Fire Elementals","Balance",Array("Ecstatic Frenzy",2,true),"Defensive Harmony","Curare","Paragon","Spirit of Vengeance","Spellbind","War Spirit");
	skillnames_uxi[2]=new Array("","Batstrike","Crucify","Queen of Blades","Barrier Strike","Doom","Way of the Spider","Shadow Refuge","Twin Fang Strike","Laserblade","Way of the Phoenix","Scorpion Blade","Storm Crows","Wychwind","Maelstrom4","Broadside","Cluster Mine","Limpet Laser","Electrofield Sentry","Fireball Sentry","Singularity","Blink","Starburst","Summon Dark Spirit","Psionic Storm","Perfect Being","Beacon","Way of the Gryphon","Phase Bomb","Vampiric Icon","Psychic Scream");
	skillnames_uxi[3]=new Array("",Array("Earthquake",2,true),"Bloodhatred","Thunder Slam","Shower of Rocks",Array("Stormblast",2,true),"Bear Claw","Stampede","Rebound","Screaming Eagle","Overkill","Guardian Spirit","Defender Spirit","Protector Spirit","Greater Manifestations","Spirit Walk","Lion Stance","Snake Stance","Bear Stance","Eagle Stance","Wolf Stance","Wolf Companion","Ancient Blood","Fortress","Spirit Guide","Mountain King","Nephalem Weapons","Runemaster","Shamanic Trance","Immortal","Thundergod");
	skillnames_uxi[4]=new Array("","Treewarden Form","Pummel","Circle of Life","Wildfire","Idol Of Scosglen","Trap Rat Form","Quill Storm","Egg Trap","Ferocity","Thorn Wall","Elemental","Hunting Banshee","Pagan Rites","Rain of Fire",Array("Freezing Gale",2,true),Array("Poison Flash",2,true),"Elvensong","Plague Avatar","Mythal","Summon Acid Fiends","Laughing Ghost","Cascade","Spore Shot","Elfin Weapons","Nova Shot","Force of Nature","Faerie Fire","Tremor","Goodberry","Lifeshield");
	skillnames_uxi[5]=new Array("","Deaths Fury Totem","Frostclaw Totem","Fireheart Totem","Howling Totem","Stormeye Totem","Embalming","Sacrifices","Bend the Shadows","Bane","Talons Hold","Massacre","Angel of Death","Famine","Parasite","Deathlord","Buckshot","Flametail Shot","Dragonfire Oil","Fragmentation Shot","Voodoo Shot","Summon Shadows","Summon Rampagor","Summon Lamia","Summon Veil King","Summon Void Archon","Summon Jinn","Rathmas Chosen","Death Ward","Black Mass","Graveyard");
	skillnames_uxi[6]=new Array("","Retaliate","Hammerstrike","Merkabah","Lionheart","Colosseum","Searing Glow","Blazing Fury","Brimstone","Winterstorm","Rising Dawn","Terror Strike","Lemures",Array("Black Sleep",2,true),"Blood Thorns","Hymn","Tainted Blood","Mind Flay","Symphony Of Destruction","Slayer","Stormlord","Vessel of Judgement","Rapture","Light and Shadow","Sacred Armor","Scourge","Plague","Superbeast","Resurrect","Divine Apparition","Blessed Life");
	skillnames_uxi[7]=new Array("","Flamefront","Living Flame","Flamestrike","Pyroblast","Firedance","Shatter the Flesh",Array("Frigid Sphere",2,true),"Snow Queen","Abyss","Summon Ice Elementals","Forked Lightning","Thunderstone","Tempest","Warp Armor",Array("Nova Charge",2,true),"Lorenado","Vengeful Power","Miasma","Carpet of Spiders","Hive","Moonstrike","Familiar","Arcane Torrent","Mana Sweep",Array("Bladestorm",2,true),Array("Chronofield",2,true),Array("Witch Blood",2,true),"Baneblade","Symbol of Esu","Force Blast");	
	
	var skillnames_uxiii=new Array();
	skillnames_uxiii[1]=new Array("","Sun Strike","Barrage","Phalanx","Dragonlore","Wyrmshot","Moonbeam","Ricochet","Enfilade","Moon Queen","Fairy Ring","Takedown","Hyena Strike","Pounce","Lioness",Array("Great Hunt",2,true),"Magic Missiles","Balefire","Bloodstorm","Bacchanalia","Lava Pit","Wild and Free","Summon Fire Elementals","Balance",Array("Ecstatic Frenzy",2,true),"Defensive Harmony","Curare","Paragon","Spirit of Vengeance","Spellbind",Array("War Spirit",2,true));
	skillnames_uxiii[2]=new Array("",Array("Batstrike",2,true),"Crucify","Queen of Blades","Barrier Strike","Doom","Way of the Spider","Shadow Refuge","Twin Fang Strike","Laserblade","Way of the Phoenix","Scorpion Blade","Storm Crows","Wychwind","Maelstrom5","Broadside","Cluster Mine","Limpet Laser",Array("Electrofield Sentry",2,true),Array("Fireball Sentry",2,true),"Singularity","Blink","Shuriken Flurry","Tiefling Form",Array("Psionic Storm",2,true),"Perfect Being","Beacon","Way of the Gryphon","Phase Bomb","Vampiric Icon","Psychic Scream");
	skillnames_uxiii[3]=new Array("",Array("Earthquake",2,true),"Bloodhatred","Thunder Slam","Shower of Rocks",Array("Stormblast",2,true),"Bear Claw","Stampede","Rebound","Screaming Eagle","Overkill","Guardian Spirit","Defender Spirit","Protector Spirit","Greater Manifestations","Spirit Walk","Lion Stance","Snake Stance","Bear Stance","Eagle Stance","Wolf Stance","Wolf Companion","Ancient Blood","Fortress","Spirit Guide","Mountain King","Nephalem Weapons","Runemaster","Shamanic Trance","Immortal","Thundergod");
	skillnames_uxiii[4]=new Array("","Treewarden Form","Pummel","Circle of Life","Wildfire","Idol Of Scosglen","Trap Rat Form","Quill Storm","Egg Trap","Ferocity","Thorn Wall","Elemental","Hunting Banshee","Pagan Rites","Rain of Fire",Array("Freezing Gale",2,true),Array("Poison Flash",2,true),"Elvensong","Plague Avatar","Mythal","Summon Acid Fiends","Laughing Ghost","Cascade","Spore Shot","Elfin Weapons","Nova Shot","Force of Nature","Faerie Fire","Tremor","Goodberry","Lifeshield");
	skillnames_uxiii[5]=new Array("","Deaths Fury Totem","Frostclaw Totem","Fireheart Totem","Howling Totem","Stormeye Totem","Embalming","Sacrifices","Bend the Shadows","Bane","Talons Hold","Massacre","Angel of Death","Famine","Parasite","Deathlord","Buckshot","Flametail Shot","Dragonfire Oil","Fragmentation Shot","Voodoo Shot","Summon Shadows","Summon Rampagor","Summon Lamia","Summon Veil King","Summon Void Archon","Summon Jinn","Rathmas Chosen","Death Ward","Black Mass","Graveyard");
	skillnames_uxiii[6]=new Array("","Retaliate","Hammerstrike","Merkabah","Lionheart","Colosseum","Dragon Oath","Dragonshout","Burnout","Demonrend","Deva King","Terror Strike","Lemures",Array("Black Sleep",2,true),"Blood Thorns","Hymn","Tainted Blood","Mind Flay","Symphony Of Destruction","Slayer","Stormlord","Vessel of Judgement","Rapture","Light and Shadow","Sacred Armor","Scourge","Plague","Superbeast","Resurrect","Divine Apparition","Blessed Life");
	skillnames_uxiii[7]=new Array("","Flamefront","Living Flame","Flamestrike","Pyroblast","Firedance","Shatter the Flesh",Array("Frigid Sphere",2,true),"Snow Queen","Abyss","Summon Ice Elementals","Forked Lightning","Thunderstone","Tempest","Warp Armor",Array("Nova Charge",2,true),"Lorenado","Vengeful Power","Miasma","Carpet of Spiders","Hive","Moonstrike","Familiar","Arcane Torrent","Mana Sweep",Array("Bladestorm",2,true),Array("Chronofield",2,true),Array("Witch Blood",2,true),"Baneblade","Symbol of Esu","Force Blast");
	
	
	var skillnames_uxiii=new Array();
	skillnames_uxiii[1]=new Array("","Sun Strike","Barrage","Phalanx","Dragonlore","Wyrmshot","Moonbeam","Ricochet","Enfilade","Moon Queen","Fairy Ring","Takedown","Hyena Strike","Pounce","Lioness",Array("Great Hunt",2,true),"Magic Missiles","Balefire","Bloodstorm","Bacchanalia","Lava Pit","Wild and Free","Summon Fire Elementals","Balance",Array("Ecstatic Frenzy",2,true),"Defensive Harmony","Curare","Paragon","Spirit of Vengeance","Spellbind",Array("War Spirit",2,true));
	skillnames_uxiii[2]=new Array("",Array("Batstrike",2,true),"Crucify","Queen of Blades","Barrier Strike","Doom","Way of the Spider","Shadow Refuge","Twin Fang Strike","Laserblade","Way of the Phoenix","Scorpion Blade","Storm Crows","Wychwind","Maelstrom5","Broadside","Cluster Mine","Limpet Laser",Array("Electrofield Sentry",2,true),Array("Fireball Sentry",2,true),"Singularity","Blink","Shuriken Flurry","Tiefling Form",Array("Psionic Storm",2,true),"Perfect Being","Beacon","Way of the Gryphon","Phase Bomb","Vampiric Icon","Psychic Scream");
	skillnames_uxiii[3]=new Array("",Array("Earthquake",2,true),"Bloodhatred","Thunder Slam","Shower of Rocks",Array("Stormblast",2,true),"Bear Claw","Stampede","Rebound","Screaming Eagle","Overkill","Guardian Spirit","Defender Spirit","Protector Spirit","Greater Manifestations","Spirit Walk","Lion Stance","Snake Stance","Bear Stance","Eagle Stance","Wolf Stance","Wolf Companion","Ancient Blood","Fortress","Spirit Guide","Mountain King","Nephalem Weapons","Runemaster","Shamanic Trance","Immortal","Thundergod");
	skillnames_uxiii[4]=new Array("","Treewarden Form","Pummel","Circle of Life","Wildfire","Idol Of Scosglen","Trap Rat Form","Quill Storm","Egg Trap","Ferocity","Thorn Wall","Elemental","Hunting Banshee","Pagan Rites","Rain of Fire",Array("Freezing Gale",2,true),Array("Poison Flash",2,true),"Elvensong","Plague Avatar","Mythal","Summon Acid Fiends","Laughing Ghost","Cascade","Spore Shot","Elfin Weapons","Nova Shot","Force of Nature","Faerie Fire","Tremor","Goodberry","Lifeshield");
	skillnames_uxiii[5]=new Array("","Deaths Fury Totem","Frostclaw Totem","Fireheart Totem","Howling Totem","Stormeye Totem","Embalming","Sacrifices","Bend the Shadows","Bane","Talons Hold","Massacre","Angel of Death","Famine","Parasite","Deathlord","Buckshot","Flametail Shot","Dragonfire Oil","Fragmentation Shot","Voodoo Shot","Summon Shadows","Summon Rampagor","Summon Lamia","Summon Veil King","Summon Void Archon","Summon Jinn","Rathmas Chosen","Death Ward","Black Mass","Graveyard");
	skillnames_uxiii[6]=new Array("","Retaliate","Hammerstrike","Merkabah","Lionheart","Colosseum","Dragon Oath","Dragonshout","Burnout","Demonrend","Deva King","Terror Strike","Lemures",Array("Black Sleep",2,true),"Blood Thorns","Hymn","Tainted Blood","Mind Flay","Symphony Of Destruction","Slayer","Stormlord","Vessel of Judgement","Rapture","Light and Shadow","Sacred Armor","Scourge","Plague","Superbeast","Resurrect","Divine Apparition","Blessed Life");
	skillnames_uxiii[7]=new Array("","Flamefront","Living Flame","Flamestrike","Pyroblast","Firedance","Shatter the Flesh",Array("Frigid Sphere",2,true),"Snow Queen","Abyss","Summon Ice Elementals","Forked Lightning","Thunderstone","Tempest","Warp Armor",Array("Nova Charge",2,true),"Lorenado","Vengeful Power","Miasma","Carpet of Spiders","Hive","Moonstrike","Familiar","Arcane Torrent","Mana Sweep",Array("Bladestorm",2,true),Array("Chronofield",2,true),Array("Witch Blood",2,true),"Baneblade","Symbol of Esu","Force Blast");

	var skillnames_uxvc=new Array();
	skillnames_uxvc[1]=new Array("",Array("Sun Strike",2,true),"Barrage","Phalanx","Dragonlore","Wyrmshot","Moonbeam","Ricochet","Enfilade","Moon Queen","Fairy Ring","Takedown","Hyena Strike","Pounce","Lioness",Array("Great Hunt",2,true),"Magic Missiles","Balefire","Bloodstorm","Bacchanalia","Lava Pit", "Thundercrack", "Stormcall", "HammerofZerae", "Asterism", "MagneticField", "Wild and Free","Summon Fire Elementals","Balance",Array("Ecstatic Frenzy",2,true),"Defensive Harmony","Curare","Paragon","Spirit of Vengeance","Spellbind",Array("War Spirit",2,true));
	skillnames_uxvc[2]=new Array("",Array("Batstrike",2,true),"Crucify", "Shadow Dancer","Barrier Strike", "Noctule","Scorpion Blade","Storm Crows","Wychwind","Maelstrom5","Broadside", "Backstab","Shadow Refuge","Twin Fang Strike","Laserblade","Hades Gate","Blink","Way of the Spider","Queen of Blades","Way of the Phoenix","Perfect Being", "Obliteration","Shuriken Flurry",Array("Psionic Storm",3,true),"Singularity","Doom","Cluster Mine","Limpet Laser",Array("Electrofield Sentry",2,true),Array("Fireball Sentry",2,true),"Tiefling Form","Beacon","Way of the Gryphon","Phase Bomb","Vampiric Icon","Psychic Scream");
	skillnames_uxvc[3]=new Array("",Array("Earthquake",2,true), "Iceburst","Thunder Slam","Shower of Rocks",Array("Stormblast",2,true),"Bloodhatred", "IronSpiral", "Deathgaze", "Daedalus", "Windform","Bear Claw","Stampede","Rebound","Screaming Eagle","Overkill","Guardian Spirit","Defender Spirit","Protector Spirit","Greater Manifestations","Spirit Walk","Wolf Companion","Ancient Blood","Fortress","Spirit Guide","Mountain King","Lion Stance","Snake Stance","Bear Stance","Eagle Stance","Wolf Stance","Nephalem Weapons","Runemaster","Shamanic Trance","Immortal","Thundergod");
	skillnames_uxvc[4]=new Array("",Array("Treewarden Form",2,true),"Pummel","Wildfire","Circle of Life","Idol Of Scosglen","Trap Rat Form","Quill Storm","Egg Trap","Ferocity","Thorn Wall","Werewolf Form", "Mana Pulse", "Harbinger", "Feed the Pack", "Twisted Claw","Elemental","Hunting Banshee","Pagan Rites","Rain of Fire",Array("Freezing Gale",2,true),Array("Poison Flash",2,true),"Elvensong","Plague Avatar",Array("Mythal",2,true),"Summon Acid Fiends","Laughing Ghost","Cascade","Spore Shot","Elfin Weapons","Nova Shot","Force of Nature","Faerie Fire","Tremor","Goodberry","Lifeshield");
	skillnames_uxvc[4]=new Array("",Array("Treewarden Form",2,true),"Pummel","Wildfire","Circle of Life","Idol Of Scosglen","Trap Rat Form","Quill Storm","Egg Trap","Ferocity","Thorn Wall","Werewolf Form", "Mana Pulse", "Harbinger", "Feed the Pack", "Twisted Claw","Elemental","Hunting Banshee","Pagan Rites","Rain of Fire",Array("Freezing Gale",2,true),Array("Poison Flash",2,true),"Elvensong","Plague Avatar",Array("Mythal",2,true),"Summon Acid Fiends","Laughing Ghost","Cascade","Spore Shot","Elfin Weapons","Nova Shot","Force of Nature","Faerie Fire","Tremor","Goodberry","Lifeshield");
	skillnames_uxvc[5]=new Array("","Deaths Fury Totem","Frostclaw Totem","Fireheart Totem","Howling Totem","Stormeye Totem","Embalming","Sacrifices","Bend the Shadows","Bane","Talons Hold","Summon Shadows","Summon Rampagor","Summon Lamia","Summon Veil King","Summon Void Archon","Massacre","Angel of Death","Famine","Parasite","Deathlord","Buckshot","Flametail Shot","Dragonfire Oil","Fragmentation Shot","Voodoo Shot","Summon Jinn","Rathmas Chosen","Death Ward","Black Mass","Graveyard");
	skillnames_uxvc[6]=new Array("","Retaliate","Hammerstrike","Merkabah","Lionheart","Colosseum","Vessel of Retribution","Rapture",Array("Solstice and Equinox",16,false),Array("Sacred Armor",2,true), "Hoplite","Dragon Oath",Array("Dragonshout",2,true),Array("Burnout",2,true),Array("Demonrend",2,true),"Deva King","Terror Strike","Lemures",Array("Black Sleep",2,true),"Blood Thorns","Hymn","Vessel of Judgement", "Euphoria", "Life and Death", "Demiurge","Scourge","Tainted Blood","Mind Flay","Symphony Of Destruction","Slayer","Stormlord","Superbeast","Plague","Resurrect","Divine Apparition","Blessed Life");
	skillnames_uxvc[7]=new Array("","Flamefront","Living Flame","Flamestrike","Pyroblast","Firedance","Forked Lightning","Thunderstone","Tempest","Warp Armor",Array("Nova Charge",2,true),"Shatter the Flesh",Array("Frigid Sphere",2,true),"Snow Queen","Abyss","Summon Ice Elementals","Lorenado","Vengeful Power","Miasma","Carpet of Spiders","Hive",Array("Immersion",11,false),"Familiar",Array("Arcane Torrent",2,true),"Mana Sweep", "Antimass","Moonstrike","Wraithsword", "Fusillade", "Summon Blade Spirits",Array("Bladestorm",2,true),Array("Chronofield",2,true),Array("Witch Blood",2,true),"Baneblade","Symbol of Esu","Force Blast");