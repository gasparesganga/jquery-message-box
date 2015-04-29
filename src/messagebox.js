/***************************************************************************************************
MessageBox - A jQuery Plugin to replace Javascript's window.alert(), window.confirm() and window.prompt() functions
	Author			: Gaspare Sganga
	Version			: 1.0
	License			: MIT
	Documentation	: http://gasparesganga.com/labs/jquery-message-box
****************************************************************************************************/
(function($, undefined){	
	// Global Queue
	var _Queue		= [];
	
	// Default Settings
	var _defaults = {
		buttonDone	: "OK",
		buttonFail	: undefined,
		message		: "",
		input		: false,
		speed		: 200,
		top			: "25%",
		width		: undefined
	};
	
	$.MessageBoxSetup = function(options){
		$.extend(true, _defaults, options);
	};
	
	$.MessageBox = function(options){
		if (typeof options != "object") options = { message : options};
		var retDeferred	= $.Deferred();
		var settings	= $.extend(true, {}, _defaults, options);
		
		_Queue.push({
			settings	: settings,
			retDeferred	: retDeferred
		});
		_ExecuteQueue();
		
		return retDeferred.promise();
	};
	
	
	function _ExecuteQueue(){
		if (_Queue.length == 0 || $("#messagebox_overlay").length) return;
		var q			= _Queue.shift();
		var settings	= q.settings;
		var retDeferred	= q.retDeferred;
		
		// Overlay
		var overlay = $("<div>", {
			id	: "messagebox_overlay"
		}).appendTo($("body"));
		
		// Message Box
		var messageBox = $("<div>", {
			id	: "messagebox"
		}).appendTo(overlay);
		if (settings.width !== undefined) messageBox.width(settings.width);
		
		// Content
		var content = $("<div>", {
			id		: "messagebox_content",
			html	: settings.message
		}).appendTo(messageBox);
		
		// Input
		if (settings.input) $("<input>", {
			id		: "messagebox_content_input",
			type	: "text"
		}).appendTo(content)
		.trigger("focus");
		
		// Buttons
		var buttons = $("<div>", {
			id	: "messagebox_buttons"
		}).appendTo(messageBox);
		$("<button>", {
			id		: "messagebox_button_done",
			text	: settings.buttonDone
		}).on("click", _Button_Click).appendTo(buttons);
		if (settings.buttonFail) $("<button>", {
			id		: "messagebox_button_fail",
			text	: settings.buttonFail
		}).on("click", _Button_Click).prependTo(buttons);
		
		// Attach Window Events Handlers
		$(window)
			.on("resize", {messageBox : messageBox}, _Window_Resize)
			.on("keydown", _Window_KeyDown)
			.triggerHandler("resize");
		
		// Save Data
		messageBox.data("settings",		settings);
		messageBox.data("retDeferred",	retDeferred);
		
		// Show Message Box
		messageBox.animate({
			top	: settings.top
		}, settings.speed);
	}
	
	
	// ******************************
	//  EVENTS
	// ******************************
	function _Button_Click(event){
		var $this		= $(event.currentTarget);
		var messageBox	= $this.closest("#messagebox");
		var settings	= messageBox.data("settings");
		var retDeferred	= messageBox.data("retDeferred");
		messageBox.animate({
			top	: "-100%"
		}, settings.speed, function(){
			// Remove Window Events Handlers
			$(window)
				.off("resize", _Window_Resize)
				.off("keydown", _Window_KeyDown);
			// Remove Overlay
			$("#messagebox_overlay").remove();
			// Resolve or Reject retDeferred
			if ($this.attr("id") == "messagebox_button_done") {
				retDeferred.resolve(messageBox.find("#messagebox_content_input").val());
			} else {
				retDeferred.reject();
			}
			_ExecuteQueue();
		});
	}
	
	function _Window_Resize(event){
		var messageBox = event.data.messageBox;
		messageBox.css("left", ($(event.currentTarget).width() - messageBox.outerWidth()) / 2);
	}
	
	function _Window_KeyDown(event) {
		if (event.keyCode === 27) {
			if (!$("#messagebox_button_fail").trigger("click").length) $("#messagebox_button_done").trigger("click");
			return false;
		} else if (event.keyCode === 13) {
			$("#messagebox_button_done").trigger("click");
			return false;
		}
	}
	
}(jQuery));