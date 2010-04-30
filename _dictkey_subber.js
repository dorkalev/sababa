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