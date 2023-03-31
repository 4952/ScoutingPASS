var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Tes initiales",
      "code": "s",
      "gsCol": "scouter",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Évènement",
      "code": "e",
      "gsCol": "event",
      "type": "event",
      "defaultValue": "2023qcmo",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Niveau des matchs",
      "code": "l",
      "gsCol": "level",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "-<br>",
        "f": "-"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "matchNum",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "gsCol": "robot",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "gsCol": "teamNum",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Position de départ Auto",
      "code": "as",
      "gsCol": "autoStartPosition",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Scoring en mode Auto",
      "code": "asg",
      "gsCol": "autoScoringGrid",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Traversé le cache-fils",
      "code": "acc",
      "gsCol": "autoCrossedCable",
      "type": "bool"
    },
    { "name": "Traversé la balance",
      "code": "acs",
      "gsCol": "autoCrossedChargingStation",
      "type": "bool"
    },
    { "name": "Traversé la ligne rouge",
      "code": "am",
      "gsCol": "autoMobility",
      "type": "bool"
    },
    { "name": "Balance",
      "code": "ad",
      "gsCol": "autoDocked",
      "type":"radio",
      "choices": {
        "d": ".<br>",
        "e": "Réussi<br>",
        "a": "Pas réussi<br>",
        "x": "Rien fait"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Temps de cycle",
      "code": "tct",
      "gsCol": "cycleTimes",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tsg",
      "gsCol": "gridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "-<br>",
      "code": "tfc",
      "gsCol": "feedCount",
      "type": "counter"
    },
    { "name": "Un robot l'empêchait de scorer?",
      "code": "wd",
      "gsCol": "wasDefended",
      "type": "bool"
    },
    { "name": "Qui jouait la défense<br>(Team #)",
      "code": "who",
      "gsCol": "defenderTeamNum",
      "type": "text"
    },
    { "name": "-<br>",
      "code": "lnk",
      "gsCol": "smartPlacement",
      "type": "bool"
    },
    { "name": "Ramassent au sol?",
      "code": "fpu",
      "gsCol": "floorPickUp",
      "type": "radio",
      "choices": {
        "o": "Cone<br>",
        "u": "Cube<br>",
        "b": "Les deux<br>",
        "x": "Pas essayé du tout"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Temps pour se balancer",
      "code": "dt",
      "gsCol": "dockingTime",
      "type": "timer"
    },
    { "name": "Position final",
      "code": "fs",
      "gsCol": "endgameStatus",
      "type":"radio",
      "choices": {
        "p": "Stationner<br>",
        "d": "-<br>",
        "e": "Balancé<br>",
        "a": "Essai mais échoué<br>",
        "x": "Pas essayé du tout"
      },
      "defaultValue": "x"
    },
    { "name": "Combien de robot de son allaince sur la balance?<br>",
      "code": "dn",
      "gsCol": "numOfRobotsDocked",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Talent du driver",
      "code": "ds",
      "gsCol": "driverSkill",
      "type": "radio",
      "choices": {
        "n": "Mauvais<br>",
        "a": "Moyen<br>",
        "v": "Bon<br>",
        "x": "Aucune idée"
      },
      "defaultValue": "x"
    },
    { "name": "Combien de link complété?",
      "code": "ls",
      "gsCol": "linksScored",
      "type": "counter"
    },
    { "name": "Cote de défense",
      "code": "dr",
      "gsCol": "defenseRating",
      "type": "radio",
      "choices": {
        "b": "Mauvais<br>",
        "a": "Moyen<br>",
        "g": "Bon<br>",
        "e": "Super<br>",
        "x": "Pas joué en défense"
      },
      "defaultValue": "x"
    },
    { "name": "-",
      "code": "sd",
      "gsCol": "swerveDrive",
      "type": "bool"
    },
    { "name": "Leur vitesse?",
      "code": "sr",
      "gsCol": "speedRating",
      "type": "radio",
      "choices": {
        "1": "1 (lent)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (rapide)"
      },
      "defaultValue":"3"
    },
    { "name": "Se sont immobilisés?",
      "code": "die",
      "gsCol": "diedOrImmobilized",
      "type": "bool"
    },
    { "name": "Instables?<br>(Ont failli tomber)",
      "code": "tip",
      "gsCol": "tippy",
      "type": "bool"
    },
    { "name": "Ils ont perdu/échappé des cônes? (>2)",
      "code": "dc",
      "gsCol": "droppedCones",
      "type": "bool"
    },
    { "name": "-",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "gsCol": "goodPartners",
      "type": "bool"
    },
    { "name": "Commentaires généraux",
      "code": "co",
      "gsCol": "comments",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
