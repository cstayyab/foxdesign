var currentTabId = null;
var gettingCurrent = null;

function onExecuted(result) {
	console.log(`Design Mode Toggled.`);
}


function onExecuteError(error) {
	console.log(`Error: ${error}`);
}


function ba_clicked(tabInfo) {
	console.log("Tab Info: ", tabInfo);
	currentTabId = tabInfo.id;
	var executing = browser.tabs.executeScript(
		currentTabId, {
			code: `if(document.designMode==='on'){console.log('Switching Off Design Mode'); document.designMode='off';}else{console.log('Switching On Design Mode'); document.designMode='on';}`
		}
	);
	executing.then(onExecuted, onExecuteError);
}
browser.browserAction.onClicked.addListener(ba_clicked);