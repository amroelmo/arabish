/*
ARABISH
Copyright (C) 2016 a7aezay corp

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//Arabic Unicode
var COMMA = String.fromCharCode(0x060c);
var SEMI_COLON = String.fromCharCode(0x061b);
var QUESTION_MARK = String.fromCharCode(0x061f);
var HAMZA = String.fromCharCode(0x0621);
var ALEF_MADDA_ABOVE = String.fromCharCode(0x0622);
var ALEF_HAMZA_ABOVE = String.fromCharCode(0x0623);
var WAW_HAMZA_ABOVE = String.fromCharCode(0x0624);
var ALEF_HAMZA_BELOW = String.fromCharCode(0x0625);
var YEH_HAMZA_ABOVE = String.fromCharCode(0x0626);
var ALEF = String.fromCharCode(0x0627);
var BEH = String.fromCharCode(0x0628);
var TEH_MARBUTA = String.fromCharCode(0x0629);
var TEH = String.fromCharCode(0x062a);
var THEH = String.fromCharCode(0x062b);
var JEEM = String.fromCharCode(0x062c);
var HAH = String.fromCharCode(0x062d);
var KHAH = String.fromCharCode(0x062e);
var DAL = String.fromCharCode(0x062f);
var THAL = String.fromCharCode(0x0630);
var REH = String.fromCharCode(0x0631);
var ZAIN = String.fromCharCode(0x0632);
var SEEN = String.fromCharCode(0x0633);
var SHEEN = String.fromCharCode(0x0634);
var SAD = String.fromCharCode(0x0635);
var DAD = String.fromCharCode(0x0636);
var TAH = String.fromCharCode(0x0637);
var ZAH = String.fromCharCode(0x0638);
var AIN = String.fromCharCode(0x0639);
var GHAIN = String.fromCharCode(0x063a);
var TATWEEL = String.fromCharCode(0x0640);
var FEH = String.fromCharCode(0x0641);
var QAF = String.fromCharCode(0x0642);
var KAF = String.fromCharCode(0x0643);
var LAM = String.fromCharCode(0x0644);
var MEEM = String.fromCharCode(0x0645);
var NOON = String.fromCharCode(0x0646);
var HEH = String.fromCharCode(0x0647);
var WAW = String.fromCharCode(0x0648);
var ALEF_MAKSURA = String.fromCharCode(0x0649);
var YEH = String.fromCharCode(0x064a);
var FATHATAN = String.fromCharCode(0x064b);
var DAMMATAN = String.fromCharCode(0x064c);
var KASRATAN = String.fromCharCode(0x064d);
var FATHA = String.fromCharCode(0x064e);
var DAMMA = String.fromCharCode(0x064f);
var KASRA = String.fromCharCode(0x0650);
var SHADDA = String.fromCharCode(0x0651);
var SUKUN = String.fromCharCode(0x0652);

//Arabic Map
var ARABIC = {};
ARABIC[COMMA] = [","];
ARABIC[SEMI_COLON] = [";"];
ARABIC[QUESTION_MARK] = ["?"];
ARABIC[HAMZA] = ["2"];
ARABIC[ALEF_MADDA_ABOVE] = ["~"];
ARABIC[ALEF_HAMZA_ABOVE] = ["A"];
ARABIC[WAW_HAMZA_ABOVE] = ["W"];
ARABIC[ALEF_HAMZA_BELOW] = ["e"];
ARABIC[YEH_HAMZA_ABOVE] = ["I"];
ARABIC[ALEF] = ["a"];
ARABIC[BEH] = ["b"];
ARABIC[TEH_MARBUTA] = ["O"];
ARABIC[TEH] = ["t"];
ARABIC[THEH] = ["T"];
ARABIC[JEEM] = ["j"];
ARABIC[HAH] = ["7"];
ARABIC[KHAH] = ["5"];
ARABIC[DAL] = ["d"];
ARABIC[THAL] = ["D"];
ARABIC[REH] = ["r"];
ARABIC[ZAIN] = ["z"];
ARABIC[SEEN] = ["s"];
ARABIC[SHEEN] = ["S"];
ARABIC[SAD] = ["c"];
ARABIC[DAD] = ["C"];
ARABIC[TAH] = ["y"];
ARABIC[ZAH] = ["Y"];
ARABIC[AIN] = ["3"];
ARABIC[GHAIN] = ["9"];
ARABIC[TATWEEL] = ["-"];
ARABIC[FEH] = ["f"];
ARABIC[QAF] = ["q"];
ARABIC[KAF] = ["k"];
ARABIC[LAM] = ["l"];
ARABIC[MEEM] = ["m"];
ARABIC[NOON] = ["n"];
ARABIC[HEH] = ["o"];
ARABIC[WAW] = ["w"];
ARABIC[ALEF_MAKSURA] = ["#"];
ARABIC[YEH] = ["i"];
ARABIC[FATHATAN] = ["#"];
ARABIC[DAMMATAN] = ["#"];
ARABIC[KASRATAN] = ["#"];
ARABIC[FATHA] = ["#"];
ARABIC[DAMMA] = ["#"];
ARABIC[KASRA] = ["#"];
ARABIC[SHADDA] = ["#"];
ARABIC[SUKUN] = ["#"];

//English Map
var ENGLISH = {};
ENGLISH[","] = [COMMA];
ENGLISH[";"] = [SEMI_COLON];
ENGLISH["?"] = [QUESTION_MARK];
ENGLISH["2"] = [HAMZA];
ENGLISH["~"] = [ALEF_MADDA_ABOVE];
ENGLISH["A"] = [ALEF_HAMZA_ABOVE];
ENGLISH["W"] = [WAW_HAMZA_ABOVE];
ENGLISH["e"] = [ALEF_HAMZA_BELOW];
ENGLISH["I"] = [YEH_HAMZA_ABOVE];
ENGLISH["a"] = [ALEF];
ENGLISH["b"] = [BEH];
ENGLISH["O"] = [TEH_MARBUTA];
ENGLISH["H"] = [TEH_MARBUTA];
ENGLISH["t"] = [TEH];
ENGLISH["T"] = [THEH];
ENGLISH["j"] = [JEEM];
ENGLISH["7"] = [HAH];
ENGLISH["5"] = [KHAH];
ENGLISH["d"] = [DAL];
ENGLISH["D"] = [THAL];
ENGLISH["r"] = [REH];
ENGLISH["z"] = [ZAIN];
ENGLISH["s"] = [SEEN];
ENGLISH["S"] = [SHEEN];
ENGLISH["c"] = [SAD];
ENGLISH["C"] = [DAD];
ENGLISH["y"] = [TAH];
ENGLISH["Y"] = [ZAH];
ENGLISH["3"] = [AIN];
ENGLISH["9"] = [GHAIN];
ENGLISH["-"] = [TATWEEL];
ENGLISH["f"] = [FEH];
ENGLISH["q"] = [QAF];
ENGLISH["k"] = [KAF];
ENGLISH["l"] = [LAM];
ENGLISH["m"] = [MEEM];
ENGLISH["n"] = [NOON];
ENGLISH["o"] = [HEH];
ENGLISH["h"] = [HEH];
ENGLISH["w"] = [WAW];
ENGLISH["u"] = [WAW];
ENGLISH["#"] = [ALEF_MAKSURA];
ENGLISH["i"] = [YEH];
ENGLISH["#"] = [FATHATAN];
ENGLISH["#"] = [DAMMATAN];
ENGLISH["#"] = [KASRATAN];
ENGLISH["#"] = [FATHA];
ENGLISH["#"] = [DAMMA];
ENGLISH["#"] = [KASRA];
ENGLISH["#"] = [SHADDA];
ENGLISH["#"] = [SUKUN];
ENGLISH["#"] = [SUKUN];

//Word Cache 
var CACHE = {};

/*
* Function responsible for converting arabish text to arabic.
*
* @param input The arabish string of text 
* @return Arabic text
*/
function arabiz(input) {
    var output = [];
    var words = input.split(" ");
    for (var i = 0; i < words.length; i++) {
        var arabicWord = CACHE[words[i]];
        if (!arabicWord) {
            arabicWord = toArabic(words[i]);
            if (i < (words.length - 1)) {
                CACHE[words[i]] = arabicWord;
            }
        }
        output.push(arabicWord);
    }
    return output.join(" ");
}

function toArabic(word) {
    var arabicWord = "";
    for (var i = 0; i < word.length; i++) {
        if (ENGLISH[word.charAt(i)]) {
            arabicWord = arabicWord.concat(ENGLISH[word.charAt(i)]);
        }
        else {
            arabicWord = arabicWord.concat(word.charAt(i));
        }
    }
    return arabicWord;
}
