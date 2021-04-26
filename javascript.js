myStorage = window.localStorage;

if (!localStorage.getItem("database")) {
    console.log("vykonano");
    var database = {
        day1: {
            time1: {
                kinosal: {
                    seat1: "volno",
                    seat2: "volno",
                    seat3: "volno"
                }
            },
            time2: {
                kinosal: {
                    seat4: "volno",
                    seat5: "volno",
                    seat6: "volno"
                }
            },
            time3: {
                kinosal: {
                    seat7: "volno",
                    seat8: "volno",
                    seat9: "volno"
                }
            },
            time4: {
                kinosal: {
                    seat10: "volno",
                    seat11: "volno",
                    seat12: "volno"
                }
            },
            time5: {
                kinosal: {
                    seat13: "volno",
                    seat14: "volno",
                    seat15: "volno"
                }
            },
            time6: {
                kinosal: {
                    seat16: "volno",
                    seat17: "volno",
                    seat18: "volno"
                }
            }
        },
        day2: {
            time1: {
                kinosal: {
                    seat19: "volno",
                    seat20: "volno",
                    seat21: "volno"
                }
            },
            time2: {
                kinosal: {
                    seat22: "volno",
                    seat23: "volno",
                    seat24: "volno"
                }
            },
            time3: {
                kinosal: {
                    seat25: "volno",
                    seat26: "volno",
                    seat27: "volno"
                }
            },
            time4: {
                kinosal: {
                    seat28: "volno",
                    seat29: "volno",
                    seat30: "volno"
                }
            },
            time5: {
                kinosal: {
                    seat31: "volno",
                    seat32: "volno",
                    seat33: "volno"
                }
            },
            time6: {
                kinosal: {
                    seat34: "volno",
                    seat35: "volno",
                    seat36: "volno"
                }
            }
        },
        day3: {
            time1: {
                kinosal: {
                    seat37: "volno",
                    seat38: "volno",
                    seat39: "volno"
                }
            },
            time2: {
                kinosal: {
                    seat40: "volno",
                    seat41: "volno",
                    seat42: "volno"
                }
            },
            time3: {
                kinosal: {
                    seat43: "volno",
                    seat44: "volno",
                    seat45: "volno"
                }
            },
            time4: {
                kinosal: {
                    seat46: "volno",
                    seat47: "volno",
                    seat48: "volno"
                }
            },
            time5: {
                kinosal: {
                    seat49: "volno",
                    seat50: "volno",
                    seat51: "volno"
                }
            },
            time6: {
                kinosal: {
                    seat52: "volno",
                    seat53: "volno",
                    seat54: "volno"
                }
            }
        }
    };
    localStorage.setItem("database",JSON.stringify(database));
    var data = localStorage.getItem("database");
    database = JSON.parse(data);
}  

var data = localStorage.getItem("database");
var database = JSON.parse(data);

function vypis() {
    document.getElementById("seat1").innerHTML = database.day1.time1.kinosal.seat1;
    document.getElementById("seat2").innerHTML = database.day1.time1.kinosal.seat2;
    document.getElementById("seat3").innerHTML = database.day1.time1.kinosal.seat3;
    document.getElementById("seat4").innerHTML = database.day1.time2.kinosal.seat4;
    document.getElementById("seat5").innerHTML = database.day1.time2.kinosal.seat5;
    document.getElementById("seat6").innerHTML = database.day1.time2.kinosal.seat6;
    document.getElementById("seat7").innerHTML = database.day1.time3.kinosal.seat7;
    document.getElementById("seat8").innerHTML = database.day1.time3.kinosal.seat8;
    document.getElementById("seat9").innerHTML = database.day1.time3.kinosal.seat9;
    document.getElementById("seat10").innerHTML = database.day1.time4.kinosal.seat10;
    document.getElementById("seat11").innerHTML = database.day1.time4.kinosal.seat11;
    document.getElementById("seat12").innerHTML = database.day1.time4.kinosal.seat12;
    document.getElementById("seat13").innerHTML = database.day1.time5.kinosal.seat13;
    document.getElementById("seat14").innerHTML = database.day1.time5.kinosal.seat14;
    document.getElementById("seat15").innerHTML = database.day1.time5.kinosal.seat15;
    document.getElementById("seat16").innerHTML = database.day1.time6.kinosal.seat16;
    document.getElementById("seat17").innerHTML = database.day1.time6.kinosal.seat17;
    document.getElementById("seat18").innerHTML = database.day1.time6.kinosal.seat18;

    document.getElementById("seat19").innerHTML = database.day2.time1.kinosal.seat19;
    document.getElementById("seat20").innerHTML = database.day2.time1.kinosal.seat20;
    document.getElementById("seat21").innerHTML = database.day2.time1.kinosal.seat21;
    document.getElementById("seat22").innerHTML = database.day2.time2.kinosal.seat22;
    document.getElementById("seat23").innerHTML = database.day2.time2.kinosal.seat23;
    document.getElementById("seat24").innerHTML = database.day2.time2.kinosal.seat24;
    document.getElementById("seat25").innerHTML = database.day2.time3.kinosal.seat25;
    document.getElementById("seat26").innerHTML = database.day2.time3.kinosal.seat26;
    document.getElementById("seat27").innerHTML = database.day2.time3.kinosal.seat27;
    document.getElementById("seat28").innerHTML = database.day2.time4.kinosal.seat28;
    document.getElementById("seat29").innerHTML = database.day2.time4.kinosal.seat29;
    document.getElementById("seat30").innerHTML = database.day2.time4.kinosal.seat30;
    document.getElementById("seat31").innerHTML = database.day2.time5.kinosal.seat31;
    document.getElementById("seat32").innerHTML = database.day2.time5.kinosal.seat32;
    document.getElementById("seat33").innerHTML = database.day2.time5.kinosal.seat33;
    document.getElementById("seat34").innerHTML = database.day2.time6.kinosal.seat34;
    document.getElementById("seat35").innerHTML = database.day2.time6.kinosal.seat35;
    document.getElementById("seat36").innerHTML = database.day2.time6.kinosal.seat36;

    document.getElementById("seat37").innerHTML = database.day3.time1.kinosal.seat37;
    document.getElementById("seat38").innerHTML = database.day3.time1.kinosal.seat38;
    document.getElementById("seat39").innerHTML = database.day3.time1.kinosal.seat39;
    document.getElementById("seat40").innerHTML = database.day3.time2.kinosal.seat40;
    document.getElementById("seat41").innerHTML = database.day3.time2.kinosal.seat41;
    document.getElementById("seat42").innerHTML = database.day3.time2.kinosal.seat42;
    document.getElementById("seat43").innerHTML = database.day3.time3.kinosal.seat43;
    document.getElementById("seat44").innerHTML = database.day3.time3.kinosal.seat44;
    document.getElementById("seat45").innerHTML = database.day3.time3.kinosal.seat45;
    document.getElementById("seat46").innerHTML = database.day3.time4.kinosal.seat46;
    document.getElementById("seat47").innerHTML = database.day3.time4.kinosal.seat47;
    document.getElementById("seat48").innerHTML = database.day3.time4.kinosal.seat48;
    document.getElementById("seat49").innerHTML = database.day3.time5.kinosal.seat49;
    document.getElementById("seat50").innerHTML = database.day3.time5.kinosal.seat50;
    document.getElementById("seat51").innerHTML = database.day3.time5.kinosal.seat51;
    document.getElementById("seat52").innerHTML = database.day3.time6.kinosal.seat52;
    document.getElementById("seat53").innerHTML = database.day3.time6.kinosal.seat53;
    document.getElementById("seat54").innerHTML = database.day3.time6.kinosal.seat54;
}
vypis();

function obsadit(id){
    switch (id) {
        case "seat1":
        database.day1.time1.kinosal.seat1 = "obsazeno";
        alert("obsadit");
        break;
        case "seat2":
        database.day1.time1.kinosal.seat2 = "obsazeno";
        alert("obsadit");
        break;
        case "seat3":
        database.day1.time1.kinosal.seat3 = "obsazeno";
        alert("obsadit");
        break;
        case "seat4":
        database.day1.time2.kinosal.seat4 = "obsazeno";
        alert("obsadit");
        break;
        case "seat5":
        database.day1.time2.kinosal.seat5 = "obsazeno";
        alert("obsadit");
        break;
        case "seat6":
        database.day1.time2.kinosal.seat6 = "obsazeno";
        alert("obsadit");
        break;    
        case "seat7":
        database.day1.time3.kinosal.seat7 = "obsazeno";
        alert("obsadit");
        break;
        case "seat8":
        database.day1.time3.kinosal.seat8 = "obsazeno";
        alert("obsadit");
        break;
        case "seat9":
        database.day1.time3.kinosal.seat9 = "obsazeno";
        alert("obsadit");
        break;    
        case "seat10":
        database.day1.time4.kinosal.seat10 = "obsazeno";
        alert("obsadit");
        break;
        case "seat11":
        database.day1.time4.kinosal.seat11 = "obsazeno";
        alert("obsadit");
        break;
        case "seat12":
        database.day1.time4.kinosal.seat12 = "obsazeno";
        alert("obsadit");
        break;
        case "seat13":
        database.day1.time5.kinosal.seat13 = "obsazeno";
        alert("obsadit");
        break;
        case "seat14":
        database.day1.time5.kinosal.seat14 = "obsazeno";
        alert("obsadit");
        break;
        case "seat15":
        database.day1.time5.kinosal.seat15 = "obsazeno";
        alert("obsadit");
        break;
        case "seat16":
        database.day1.time6.kinosal.seat16 = "obsazeno";
        alert("obsadit");
        break;
        case "seat17":
        database.day1.time6.kinosal.seat17 = "obsazeno";
        alert("obsadit");
        break;
        case "seat18":
        database.day1.time6.kinosal.seat18 = "obsazeno";
        alert("obsadit");
        break;

        case "seat19":
        database.day2.time1.kinosal.seat19 = "obsazeno";
        alert("obsadit");
        break;
        case "seat20":
        database.day2.time1.kinosal.seat20 = "obsazeno";
        alert("obsadit");
        break;
        case "seat21":
        database.day2.time1.kinosal.seat21 = "obsazeno";
        alert("obsadit");
        break;
        case "seat22":
        database.day2.time2.kinosal.seat22 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat23":
        database.day2.time2.kinosal.seat23 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat24":
        database.day2.time2.kinosal.seat24 = "obsazeno";
        alert("obsadit");
        break;
        case "seat25":
        database.day2.time3.kinosal.seat25 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat26":
        database.day2.time3.kinosal.seat26 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat27":
        database.day2.time3.kinosal.seat27 = "obsazeno";
        alert("obsadit");
        break;
        case "seat28":
        database.day2.time4.kinosal.seat28 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat29":
        database.day2.time4.kinosal.seat29 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat30":
        database.day2.time4.kinosal.seat30 = "obsazeno";
        alert("obsadit");
        break;
        case "seat31":
        database.day2.time5.kinosal.seat31 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat32":
        database.day2.time5.kinosal.seat32 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat33":
        database.day2.time5.kinosal.seat33 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat34":
        database.day2.time6.kinosal.seat34 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat35":
        database.day2.time6.kinosal.seat35 = "obsazeno";
        alert("obsadit");
        break;  
        case "seat36":
        database.day2.time6.kinosal.seat36 = "obsazeno";
        alert("obsadit");
        break;
        case "seat37":
        
        

        default: 
        alert("Jiz nelze zmenit");       

    }

    localStorage.setItem("database",JSON.stringify(database));
    var data = localStorage.getItem("database");
    database = JSON.parse(data);
    location.reload();
}
