var dictionary = {"hebrew":{"hello":"\u05e9\u05dc\u05d5\u05dd","goodbye":"\u05dc\u05d4\u05ea\u05e8\u05d0\u05d5\u05ea","love":"\u05d0\u05d4\u05d1\u05d4","submit":"\u05dc\u05da \u05e2\u05dc \u05d6\u05d4"},"italian":{"hello":"ciao","goodbye":"arrivederci","love":"amore","submit":"vai"}};
function dictkey_replacer() {

	var current_dictionary = dictionary[current_language];  // you have to set current_language on your HTML!

	if (current_dictionary == null) return;

	var dictkeys = document.getElementsByTagName("dictkey"); // replacing all <dictkey>hello</dictkey> with <dictkey>'hello' in desired language</dictkey>
	for (var i=0;i<dictkeys.length;i++) {
		dictkeys[i].innerHTML = current_dictionary[dictkeys[i].innerHTML];
	}

	for(i = 0; i < document.all.length; i++) {
		var ce = document.all(i);
    if (ce_dictkeyatt = ce.getAttribute("dictkeyatt")) {
			ce.setAttribute(ce_dictkeyatt, current_dictionary[ce.getAttribute(ce_dictkeyatt)])
		}
  }
}

window.onload = dictkey_replacer;
