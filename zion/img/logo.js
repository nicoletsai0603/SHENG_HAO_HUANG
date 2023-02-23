(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1526,484);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj3D4QhnhnAAiRQAAiQBnhnQBnhnCQABQCRgBBnBnQBnBnAACQQAACRhnBnQhnBmiRABQiQgBhnhmg");
	mask.setTransform(42.3,44.8);

	// 圖層 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.185,0.185);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(7.3,9.7,70.2,70.1), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghgJIAbgVIAoAlIgeAYg");
	this.shape.setTransform(34.5,18.4,1.027,1.027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgggKIAXgRIAEgBIADABIAjAgIgfAYg");
	this.shape_1.setTransform(31.5,29.2,1.027,1.027);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAMIAAgDQADgPAFgDQAGgDAVACQgDAQgEADQgDADgQAAg");
	this.shape_2.setTransform(32.2,50.1,1.027,1.027);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLgKQABgEAEAAIAagBIgHAbQgCADgDAAIgbABg");
	this.shape_3.setTransform(149.5,62.2,1.027,1.027);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAPIAIgdIAfAAIgHAZQgBAEgFAAg");
	this.shape_4.setTransform(191,62.2,1.027,1.027);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA1IgWAAIAAgHIAahbQADgHAGAAIAYAAIgbBhQgDAIgGAAIgBAAg");
	this.shape_5.setTransform(29.9,58.3,1.027,1.027);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKAKAAAOQAAAOgKAKQgKAKgPABQgNAAgLgKg");
	this.shape_6.setTransform(16.9,3.6,1.027,1.027);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAjQgOgBgKgKQgKgKAAgOQABgOAKgKQAKgKAOAAQAOABAKAKQAKAKAAAOQgBAOgKAKQgJAKgMAAIgDAAg");
	this.shape_7.setTransform(80,3.6,1.027,1.027);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAZQgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAALAKQAKALAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape_8.setTransform(135.7,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQABgOAKgKQAKgKANAAQAPAAAKALQAKAKAAAOQAAAOgKAKQgKAKgPAAQgNAAgLgLg");
	this.shape_9.setTransform(132.1,19.5,1.027,1.027);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWBCQgTgDAEgSIAThAIgRgBIAFgQQAAAAAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAFgBQAKABADgLQAEgMACgCQADgCALAAIAOAAIgGAZIATABIgEAPQgDAFgFgBQgIgCgEAEQgEADgCAJIgKAnQgDALACADQACADAKgBIAEAAQAAAMgDADQgCACgKAAIgUAAg");
	this.shape_10.setTransform(173.5,57,1.027,1.027);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBCQgWgCAGgVIASg/IgRAAIADgKQAAgLALACQAJABACgIQAEgOAEgDQACgCAPAAIAKAAIgGAaIATAAIgCALQgCAKgJgCQgMgCgEANIgMAsQgCAJACADQACACAJAAIAFAAQAAAMgCADQgDACgKAAg");
	this.shape_11.setTransform(132.7,57,1.027,1.027);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA0QgcgHAFgiQAEgSAGgNQALgVAVgJQAUgIAXAHQASAHABAQQABAJgIAAIgOAAIgHgBQgDgBgBgGQAAgCgEgDQgEgCgDAAQgKACgFAHQgNAQgCAbIABAJQACAFADABQAEABAGAAQAFAAACgDQAHgIALgBIAVAAQgHATgRAIQgOAGgOAAQgJAAgJgDg");
	this.shape_12.setTransform(90.2,58.3,1.027,1.027);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKhEIAeAAIgfBzIA9AAIgIASQAAADgEAAIhXABg");
	this.shape_13.setTransform(162.9,56.7,1.027,1.027);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBFIgXAAIAhh1IglAAIAFgUIBqAAIAAACQgDANgDADQgDACgOAAQgPAAgDACQgDACgEAOIgYBaQgDAJgIAAIgBAAg");
	this.shape_14.setTransform(70,56.7,1.027,1.027);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BDIALgqQADgKgCgJIgUhKIAcAAQAEAAABAGIAMA4IAmg0QAIgMAMACIAWAAIhCBPIgHANIgGAVQgFATgGAEQgDABgGAAQgHAAgLgCg");
	this.shape_15.setTransform(41.6,56.7,1.027,1.027);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AghAyQgSgGgCgVQgBgaANgVQANgVAYgGQANgEAVAEQAaAFgCAdIgBAEQgCANgDADQgDACgNAAIg1AAIgBAEQgFASALAGQAFADAHgCQAHgCAGgFQADgEAFAAIAYAAQgFAOgOAIQgQAJgQAAQgLAAgMgEgAgGgcQgHAGgCALIAhAAQAEAAABgEQADgIgEgGQgFgGgIAAQgJAAgGAHg");
	this.shape_16.setTransform(141.8,58.4,1.027,1.027);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbA1QgMgBgHgJQgHgJAAgMQAAgqAfgWQAYgSAiAMQAQAGACAUIAAAFQAAAQgFAEQgFAEgQAAIgmAAIgIAAQgEABgBAFQgBAUAKACQAOACAFgGQAGgHAPAAIAPAAQgJAXgVAEQgLADgNAAIgOgBgAgFgbQgHAGgDALIAgABQAFgBABgCQADgIgDgGQgEgHgJAAIgBAAQgIAAgGAGg");
	this.shape_17.setTransform(78,58.2,1.027,1.027);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2AjQgCgKAEgKQAEgKAIgEQAJgDAfgIIALgBIAJgBQAEgCAAgGQgBgMgCgCQgFgEgGABQgHAAgDAEQgEAJgLABQgNgBgHABQAIgZAZgEQASgCATADQAaAFgGAbIgTBCQgCAEgFABQgGABgNgBIgGgDIggAEQgWAAgEgSgAgPAMQgFACgCAFQgDAFADAFQADAFAKABQAVABAEghQgZAGgGADg");
	this.shape_18.setTransform(20.3,58.3,1.027,1.027);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA1QgcgFAHgZIAUhFQABgHAHAAIAYAAIgTBDIgCAKQAAAFAFADQAFADAIgBQAIgCACgFQAGgIADgKQAJgaAGgaQADgLALABIAUAAIgbBiQgCAIgIgBIgVAAIgBgIQgNAKgQAAIgIgBg");
	this.shape_19.setTransform(51,58.4,1.027,1.027);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhCBFIAliBQACgIAIAAIAZABIAaABQAhADACAdQABAOgIAMQgJALgOAFQgOAGghAAIgJAAIgOAwQgCAHgHAAgAgCgrIgLAnIAVgBQANgCAHgFQAJgHgBgLQAAgMgKgEIgMgCIgOAAQgBAAgBAFg");
	this.shape_20.setTransform(120.8,56.7,1.027,1.027);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAHBIIAThGQADgJgFgEQgEgFgLACQgNAEgGASIgQA5QgCAHgIAAIgXAAIAoiPIAfAAIgMArIAjgFQAPAAAGAIQAHAJgEAOIgRA5QgDANgDACQgDACgNAAg");
	this.shape_21.setTransform(102,56.3,1.027,1.027);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqBIQgWgEgBgVQgCgsAdgZQAMgLASgCQAQgBAOAJIAOgtIAeAAIgmCHQgCAJgIgBIgUAAIgBgIIgDABQgMAJgOAAIgKgBgAgEgOQgMAEgGAKIgNAiIADALQACAFAFACQALAFAKgJIAGgIQAKgeACgJQACgJgGgFQgDgCgFAAIgGABg");
	this.shape_22.setTransform(183.7,56.4,1.027,1.027);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBFIgXgBIAkh/QADgJAJAAIAWAAIgPA3IApAAQADAAADgHIAMgpQABgHAHAAIAZAAIglCCQgCAHgGAAIgZAAIARg/IgqABQgCAAgDAGIgNAvQgCAJgIAAIgBAAg");
	this.shape_23.setTransform(8,56.7,1.027,1.027);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AimAnQBIgsAjg/IAiAPIgSAaIAKABIC2AAQAGAAAMgFIgKAnQgBADgHAAIjYABQgHAAgHAFIg7A0g");
	this.shape_24.setTransform(35.6,7.1,1.027,1.027);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhMCcQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgDgEIgDgkQAmgCAOgqIBGjXQACgGACgCQADgDAGABIAmAAQgKARgIAbIgMAtQghBsgZA4QgOAfgWAPQgRAMgRAAIgFAAg");
	this.shape_25.setTransform(9,25.5,1.027,1.027);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AivA5IgfAAIAMgzIAOg2QACgIAHAAIB+ABQAGAAACAFQAMAYAZAAQAZABANgZQACgFAFAAICeAAIAEAAIgaBpIgDAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgoABIAShIIknAAQgMAtgDAOQgBAIgEADQgDACgFAAIgEAAg");
	this.shape_26.setTransform(80,10.7,1.027,1.027);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASDNIgbAAIAch3IiWAVIAEgjQAAgDAGgCICMgTQALgBACgKIA6joQABgKAKABIAfAAIg8DzQAUACATgNIgGApQgBAEgFABIggAGQgFABgDAFIgZBqQgCAIgDACQgDADgFAAIgDAAg");
	this.shape_27.setTransform(135.3,21.3,1.027,1.027);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhqDLIAAgrIAYADQANAAAGgCQAHgBACgGIAXhcIg4ARIAGgtQABgBAIgCIAugMQAFgBACgEIAXhiIg2AAIAJgjQABgDAGABIAoAAQAIAAACgJQALgqAFgWQACgIAJAAIAhAAIgUBQIAaABQAPgBAKgIQgFAXgGATQgBAEgGAAIgiAAQgJAAgBAIIgTBMIA1gZIgLAqQgBADgGACIgoATQgGAEgCAFIgaBsQgGAZgNAKQgNAKgZAAg");
	this.shape_28.setTransform(162.5,21.1,1.027,1.027);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglDJIgcgBIAui4QgyA/grAlIgEgqQAAgBAGgGQA0guAug9IAGgIIhJAAIAJgiQABgDAGAAIA9AAQAIAAACgIIAMgyIg9AGIACghQAAgDAIgBIB9gVIATgFIAEAhIgCADIgEACIgsALQgHACgBAFIgPA7IAgABQATAAANgDIgIAiQgBAEgHAAIgwABQgIAAgBADQgCAIADAGIAqBFIgfAhIgZg+IgCABIgrC0QgDALgKAAIgBAAg");
	this.shape_29.setTransform(115.5,21.6,1.027,1.027);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah+BkIAkACQAbAAAIgBQADAAAEgCQAEgDAAgDIAWhUIi6AAIAKgnICwAAQAGAAACgCQAEgCABgHIAKgwIhxAAIAKgnIDaAAIAXAAQANgCAHgLIABADIgNAtQgBADgHABQgpABgqgBQgJgBgCAKIgMAxIAJABICSgBQAFAAAFgDIALgHIgMAyIiuAAIgWBVQgDAQgIAMQgLASgfABIhMABg");
	this.shape_30.setTransform(76.5,27,1.027,1.027);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgzBwIAqgBQAUgBARgEQAEgBAFgEIAIgHIgBgDIjNAAIAqhmIglAAIAIgfQABgEAGAAIAbAAQAIAAACgHIAfhhIDoAAIgcBoIAfgDIgKAmIgZAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBABAAAAIgDADIgTA9QAVADAJgKIgKAmIgCADQgBAAAAABQgBAAgBAAQAAAAAAAAQgBAAAAAAQgPgCgKAFQgJAGgGAOQgMAdgkADIhIAGgAhMgKQgEACgCAIIgFALIgSArIADACICbAAQAFAAABgEIAVg/IiEAAIgNgBIgCAAQgGAAgDACgAgohyQgDACgCAHIgDAMIgPAtIACABICSAAQAFAAABgEIAThBIh/AAIgMAAIgDAAQgFAAgDACg");
	this.shape_31.setTransform(32.7,26.9,1.027,1.027);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("ABgDQQhKgigkgfQgFgEgHADIiFA6IgJACIgHgnQBUgaAwgZIgYgvIgRgyIApgSQAMA3AbAjQAXgSAYgaQARgSAYggIitAAIAKglQAAgDAIAAIBGAAQAGAAADgIIALgxIhTAAIAJgkQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIAFgBIBEAAQAJAAACgIIAMgwQABgIAIABIAkAAIgQA+IAGABIBJgBQAEAAAKgHIAKgIIgNA0QgBACgHACIhSgBQgKAAgDAKIgLAwIBaAAQgIAlgMAPQgxBFgwAkIgCAEIANAJIANAJQAuAYAZAKQAGADAQAAIgiAlQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAIgDAAg");
	this.shape_32.setTransform(181.6,21.6,1.027,1.027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,199.7,64), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(138.2,35.9,1.027,1.027,0,0,0,141.8,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-7.4,-9.9,289.2,91.7), null);


// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 6
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(123.8,127.1,1,1,0,0,0,99.9,31.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(10).to({alpha:0},12).wait(1));

	// 元件 5
	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.3,49.9,1,1,0,0,0,36,36);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360,x:126.3,alpha:1},12).wait(10).to({alpha:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116.3,94,289.2,91.7);
// library properties:
lib.properties = {
	width: 247,
	height: 180,
	fps: 24,
	color: "#175982",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1540655171320", id:"Image"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;