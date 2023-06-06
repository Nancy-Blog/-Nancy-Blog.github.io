var sketchProc = function(processingInstance) {
  with (processingInstance) {
    size(600, 600); 
    frameRate(60);    
    smooth();
    
var app;

var Dog = function() {
    this.colors = {
        skin: color(253, 209, 185),
        eyesOuter: color(182, 96, 86),
        eyesInner: color(255, 255, 255),
        eyeBalls: color(0, 0, 0),
        nose: color(0, 0, 0),
        tounge: color(243, 116, 122),
        toungeInner: color(240, 80, 96),
        ears: color(136, 83, 76),
        mouthOuter: color(136, 83, 76),
        mouthInner: color(0, 0, 0),
        teeth: color(255, 255, 255),
        spots: color(243, 196, 173),
        legsBehind: color(235, 190, 168)
    };
    this.timerFront = 0;
    this.timerBack = 5;
    this.sinFront = 0;
    this.sinBack = 0;
    this.speed = 12;
    
    this.update = function() {
        this.timerFront++;
        this.timerBack++;
        this.sinFront = sin(radians(this.timerFront * this.speed));
        this.sinBack = sin(radians(this.timerBack * this.speed));
    };
    this.drawHead = function() {
        noStroke();

        pushMatrix();
            translate(355, 295);
            rotate(radians(-25 + this.sinFront * 15));
            translate(-355, -295);

            //ear - behind
            fill(this.colors.ears);
            beginShape();
                vertex(366, 247);
                bezierVertex(377, 242, 390, 235, 394, 235);
                bezierVertex(400, 235, 403, 238, 404, 244);
                bezierVertex(405, 254, 404, 261, 398, 265);
            endShape(CLOSE);
            
            //head
            fill(this.colors.skin);
            strokeWeight(1);
            stroke(this.colors.spots);
            beginShape();
                vertex(306, 293);
                bezierVertex(311, 269, 324, 250, 351, 245);
                bezierVertex(373, 242, 399, 256, 410, 271);
                bezierVertex(421, 295, 414, 321, 401, 338);
                bezierVertex(380, 357, 352, 359, 326, 350);
                bezierVertex(311, 340, 304, 314, 306, 293);
            endShape(CLOSE);
            noStroke();
            
            //ear - front
            fill(this.colors.ears);
            beginShape();
                vertex(284, 262);
                bezierVertex(296, 257, 310, 251, 321, 251);
                bezierVertex(331, 250, 333, 251, 331, 257);
                bezierVertex(323, 260, 314, 269, 309, 283);
                bezierVertex(308, 288, 307, 292, 304, 292);
                bezierVertex(294, 285, 286, 279, 282, 274);
                bezierVertex(280, 269, 280, 266, 284, 262);
            endShape(CLOSE);
            
            //eye - outer right
            fill(this.colors.eyesOuter);
            beginShape();
                vertex(332, 265);
                bezierVertex(340, 264, 352, 263, 357, 274);
                bezierVertex(360, 286, 360, 295, 352, 307);
                bezierVertex(341, 316, 328, 318, 318, 313);
                bezierVertex(310, 304, 310, 295, 312, 286);
                bezierVertex(316, 276, 322, 270, 332, 265);
            endShape(CLOSE);
            
            //eye - inner right
            fill(this.colors.eyesInner);
            beginShape();
                vertex(334, 268);
                bezierVertex(340, 266, 348, 269, 351, 274);
                bezierVertex(356, 280, 356, 288, 354, 294);
                bezierVertex(352, 300, 346, 303, 337, 304);
                bezierVertex(328, 304, 322, 301, 318, 294);
                bezierVertex(316, 282, 322, 274, 334, 268);
            endShape(CLOSE);
            
            //eye - outer left
            fill(this.colors.eyesOuter);
            beginShape();
                vertex(390, 263);
                bezierVertex(398, 262, 408, 268, 414, 276);
                bezierVertex(417, 286, 415, 294, 410, 303);
                bezierVertex(405, 307, 394, 308, 385, 302);
                bezierVertex(379, 294, 376, 286, 377, 277);
                bezierVertex(379, 271, 382, 266, 390, 263);
            endShape(CLOSE);
            
            //eye - inner left
            fill(this.colors.eyesInner);
            beginShape();
                vertex(396, 264);
                bezierVertex(402, 264, 409, 268, 414, 274);
                bezierVertex(416, 282, 414, 290, 407, 295);
                bezierVertex(397, 297, 390, 294, 385, 289);
                bezierVertex(382, 284, 380, 278, 382, 273);
                bezierVertex(384, 268, 388, 265, 396, 264);
            endShape(CLOSE);
            
            fill(this.colors.eyeBalls);
            ellipse(342 + this.sinBack * 2, 278 - this.sinBack * 2, 10, 10);
            ellipse(400 + this.sinBack * 2, 273 - this.sinBack * 2, 10, 10);
            
            //area around mouth/nose
            fill(this.colors.mouthOuter);
            beginShape();
                vertex(368, 282);
                bezierVertex(376, 281, 385, 284, 393, 292);
                bezierVertex(401, 302, 409, 314, 410, 326);
                bezierVertex(407, 339, 397, 345, 385, 350);
                bezierVertex(374, 354, 359, 356, 350, 354);
                bezierVertex(340, 350, 334, 342, 333, 328);
                bezierVertex(334, 316, 338, 307, 343, 298);
                bezierVertex(349, 289, 358, 284, 368, 282);
            endShape(CLOSE);
            
            //nose
            fill(this.colors.nose);
            beginShape();
                vertex(368, 279);
                bezierVertex(372, 278, 376, 280, 379, 282);
                bezierVertex(378, 286, 377, 290, 374, 294);
                bezierVertex(364, 294, 364, 292, 359, 289);
                bezierVertex(359, 284, 363, 281, 368, 279);
            endShape(CLOSE);
            
            //mouth
            fill(this.colors.mouthInner);
            beginShape();
                vertex(374, 300);
                bezierVertex(376, 300, 377, 302, 381, 307);
                bezierVertex(385, 310, 389, 310, 394, 309);
                bezierVertex(398, 310, 400, 315, 400, 322);
                bezierVertex(395, 332, 387, 342, 378, 344);
                bezierVertex(366, 348, 354, 345, 347, 342);
                bezierVertex(341, 337, 338, 330, 338, 324);
                bezierVertex(340, 316, 341, 312, 345, 309);
                bezierVertex(352, 310, 353, 312, 358, 314);
                bezierVertex(364, 315, 366, 313, 368, 310);
                bezierVertex(370, 306, 370, 302, 374, 300);
            endShape(CLOSE);
            
            //teeth
            fill(this.colors.teeth);
            triangle(391, 309, 386, 316, 386, 309);
            triangle(363, 313, 360, 318, 356, 313);
            
            //creases on forehead
            noFill();
            stroke(this.colors.spots);
            bezier(353, 251, 356, 252, 360, 253, 364, 251);
            bezier(349, 255, 356, 258, 364, 258, 372, 255);
            bezier(346, 259, 356, 263, 369, 264, 380, 259);
            
            //tounge
            noStroke();
            fill(this.colors.tounge);
            beginShape();
                vertex(360, 329);
                bezierVertex(366, 329, 373, 331, 379, 338);
                bezierVertex(382, 346, 382, 354, 381, 361);
                bezierVertex(
                    379 - this.sinFront * 10, 371, 
                    378 - this.sinFront * 10, 378, 
                    374 - this.sinFront * 10, 383);
                bezierVertex(
                    369 - this.sinFront * 10, 384, 
                    362 - this.sinFront * 10, 380, 
                    358 - this.sinFront * 10, 374);
                bezierVertex(
                    354 - this.sinFront * 10, 367, 
                    351 - this.sinFront * 5, 353, 
                    349 - this.sinFront * 5, 343);
                bezierVertex(345, 340, 344, 338, 344, 335);
                bezierVertex(347, 332, 352, 330, 360, 329);
            endShape(CLOSE);
            
            //tounge - stripe
            fill(this.colors.toungeInner);
            beginShape();
                vertex(364, 329);
                bezierVertex(367, 341, 368, 351, 367, 357);
                bezierVertex(364, 348, 362, 336, 358, 329);
            endShape(CLOSE);
        popMatrix();
    };
    this.drawBody = function() {
        noStroke();
                        
        pushMatrix();
            translate(20, -47);
            
            //shadow
            fill(0, 20);
            ellipse(220, 505, 250 + this.sinFront * 15, 30);
            
            translate(200, 385);
            rotate(radians(this.sinBack * 8));
            translate(-200, -385);
            translate(0, this.sinBack * 20);

            //front leg - behind
            pushMatrix();
                translate(304, 411);
                rotate(radians(this.sinBack * 45));
                
                pushStyle();
                    noFill();
                    stroke(this.colors.legsBehind);
                    strokeWeight(25);
                    bezier(
                        0, -5, 
                        -10, 15,
                        -10, 45,
                        0, 65);
                popStyle();
                
                translate(-304, -411);
            popMatrix();
            
            //back leg - behind
            pushMatrix();
                translate(132, 425);
                rotate(radians(20 - this.sinBack * 45));
                
                pushStyle();
                    noFill();
                    stroke(this.colors.legsBehind);
                    strokeWeight(25);
                    bezier(
                        0, -5, 
                        10, 5,
                        10, 35,
                        0, 55);
                popStyle();
                
                translate(-132, -425);
            popMatrix();
            
            //tail
            pushStyle();
                noFill();
                stroke(this.colors.skin);
                strokeWeight(10);
                bezier(
                    115, 372, 
                    102, 364, 
                    93, 358, 
                    86 + this.sinFront * 5, 347);
                strokeWeight(1);
            popStyle();
            
            //body
            noStroke();
            fill(this.colors.skin);
            beginShape();
                vertex(231, 338);
                bezierVertex(250, 339, 280, 339, 303, 345);
                bezierVertex(320, 352, 333, 374, 332, 390);
                bezierVertex(330, 409, 322, 426, 306, 434);
                bezierVertex(288, 440, 266, 440, 248, 436);
                bezierVertex(219, 435, 200, 436, 174, 440);
                bezierVertex(148, 440, 130, 442, 112, 430);
                bezierVertex(99, 416, 94, 393, 100, 372);
                bezierVertex(113, 353, 136, 344, 168, 340);
                bezierVertex(198, 337, 216, 338, 231, 338);
            endShape(CLOSE);
            
            //front leg - close
            pushMatrix();
                translate(260, 410);
                rotate(radians(-20 + this.sinFront * 45));
                
                pushStyle();
                    noFill();
                    stroke(this.colors.skin);
                    strokeWeight(25);
                    bezier(
                        0, 0, 
                        -10, 20,
                        -10, 50,
                        0, 70);
                popStyle();
                
                translate(-260, -410);
            popMatrix();
            
            //back leg - close
            pushMatrix();
                translate(150, 420);
                rotate(radians(20 - this.sinFront * 45));
                
                pushStyle();
                    noFill();
                    stroke(this.colors.skin);
                    strokeWeight(25);
                    bezier(
                        0, -10, 
                        10, 10,
                        10, 40,
                        0, 60);
                popStyle();
                
                translate(-150, -420);
            popMatrix();
            
            //spots
            fill(this.colors.spots);
            beginShape();
                vertex(226, 376);
                bezierVertex(232, 373, 237, 374, 238, 380);
                bezierVertex(235, 386, 231, 390, 228, 390);
                bezierVertex(222, 387, 220, 383, 225, 375);
            endShape(CLOSE);
            beginShape();
                vertex(248, 385);
                bezierVertex(250, 389, 250, 393, 248, 397);
                bezierVertex(244, 397, 240, 392, 240, 388);
                bezierVertex(242, 385, 246, 385, 248, 385);
            endShape(CLOSE);
            beginShape();
                vertex(150, 390);
                bezierVertex(154, 392, 157, 398, 155, 402);
                bezierVertex(152, 405, 147, 405, 142, 399);
                bezierVertex(143, 393, 146, 391, 150, 390);
            endShape(CLOSE);
            beginShape();
                vertex(137, 406);
                bezierVertex(140, 407, 141, 410, 141, 414);
                bezierVertex(138, 416, 134, 416, 132, 412);
                bezierVertex(132, 408, 134, 407, 137, 406);
            endShape(CLOSE);
            beginShape();
                vertex(124, 374);
                bezierVertex(132, 378, 136, 386, 136, 394);
                bezierVertex(133, 402, 128, 406, 122, 407);
                bezierVertex(115, 406, 111, 400, 108, 395);
                bezierVertex(108, 388, 109, 384, 112, 378);
                bezierVertex(117, 376, 120, 375, 124, 374);
            endShape(CLOSE);
            
            pushMatrix();
                translate(-60, 40);
                this.drawHead();
            popMatrix();
            
        popMatrix();
    };
    this.draw = function() {
        this.drawBody();
    };
    this.run = function() {
        this.draw();
        this.update();
    };
};

var Butterfly = function() {
    this.timer = 0;
    this.sin = 0;
    this.bsin = 0;
    this.speed = 8;
    this.wingSpeed = 6;
    this.wing = undefined;
    this.colors = {
        pink: color(236, 85, 96),
        yellow: color(255, 215, 122)
    };
    
    this.update = function() {
        this.timer++;
        
        this.sin = sin(radians(this.timer * this.speed));
        this.bsin = sin(radians(this.timer * this.wingSpeed));
    };
    this.getWing = function() {
        background(0, 0);
        noStroke();
        
        pushMatrix();
            translate(-228, -754);
            scale(2);
            fill(this.colors.pink);
            beginShape();
                vertex(228, 454);
                bezierVertex(235, 444, 246, 437, 255, 442);
                bezierVertex(260, 448, 256, 461, 244, 471);
                bezierVertex(250, 478, 248, 486, 242, 490);
                bezierVertex(237, 492, 232, 490, 228, 484);
            endShape(CLOSE);
        popMatrix();

        return get(225, 124, 62, 105);
    };
    this.wing = this.getWing();
    this.draw = function() {

        pushMatrix();
            translate(450, 130 + this.sin * 20);            
            scale(0.7);            
            rotate(radians(-40));            
            scale(abs(this.bsin), 1);
            
            //wings
            image(this.wing, -2, 0);
            scale(-1, 1);
            image(this.wing, -2, 0);
            
            //body
            noFill();
            stroke(0);
            strokeWeight(3);
            bezier(
                0, 30, 
                2, 50, 
                1, 70, 
                0, 85);
            
            //feelers
            strokeWeight(1);
            bezier(
                0, 30, 
                2, 20, 
                3, 10, 
                2, 0);
            bezier(
                0, 30, 
                -2, 20, 
                -3, 10, 
                -2, -3);
            
            //ends of feelers
            strokeWeight(3);
            point(2, 0);
            point(-2, -3);
            
            //dots on wings
            strokeWeight(1);
            noStroke();
            fill(this.colors.yellow);
            ellipse(-40, 25, 22, 22);
            ellipse(40, 25, 22, 22);
            ellipse(-22, 85, 17, 17);
            ellipse(22, 85, 17, 17);
            
        popMatrix();
    };
    this.fly = function() {
        this.draw();
        this.update();
    };
};

var App = function() {
    this.page = "load";
    this.spots = [];
    this.speed = 15;
    this.clouds = [];
    this.images = undefined;
    this.imageIndex = 0;
    this.loaded = false;
    this.dog = new Dog();
    this.butterfly = new Butterfly();
    
    this.init = function() {
        for(var i = 0; i < 5; i++) {
            var w = random(100, 150);
            this.spots.push({
               x: random(width),
               y: random(430, 600),
               w: w,
               h: w * 0.2
            });
        }    
    };
    this.init();
    this.setup = function() {
        this.images = {
            cloud1: function() {
                background(0, 0);
                
                pushMatrix();
                    scale(1.2);
                    noStroke();
                    fill(235, 232, 235);
                    beginShape();
                        vertex(290, 184);
                        bezierVertex(293, 180, 296, 177, 306, 179);
                        bezierVertex(310, 169, 314, 166, 322, 169);
                        bezierVertex(324, 160, 327, 151, 330, 150);
                        bezierVertex(337, 145, 347, 148, 355, 165);
                        bezierVertex(365, 163, 377, 165, 383, 176);
                        bezierVertex(388, 176, 392, 177, 396, 184);
                    endShape(CLOSE);
                popMatrix();
                
                return get(345, 173, 132, 52);
            },
            cloud2: function() {
                background(0, 0);
                
                pushMatrix();
                    scale(2);
                    noStroke();
                    fill(240, 237, 240);
                    beginShape();
                        vertex(44, 177);
                        bezierVertex(46, 172, 52, 169, 60, 171);
                        bezierVertex(61, 165, 65, 156, 71, 154);
                        bezierVertex(77, 152, 82, 157, 84, 162);
                        bezierVertex(88, 161, 94, 162, 98, 168);
                        bezierVertex(103, 169, 109, 170, 113, 177);
                    endShape(CLOSE);
                popMatrix();
                
                return get(84, 304, 144, 53);
            },
            sky: function() {
                background(0, 0);

                noStroke();
                for(var i = 0; i <= 400; i++) { 
                    fill(lerpColor(color(9, 152, 184), color(55, 191, 212), i/400));
                    rect(0, i, width, i);
                }
                
                return get(0, 0, width, 400);
            },
            ground: function() {
                background(0, 0);

                noStroke();
                for(var i = 0; i <= 200; i++) { 
                    fill(lerpColor(color(93, 138, 107), color(113, 166, 128), i/200));
                    rect(0, i, width, i);
                }
                
                return get(0, 0, width, 200);
            }
        };
        
        //add clouds
        for(var i = 0; i < 5; i++) {
            this.clouds.push({
               x: random(i * 120, i * 120 + 50),
               y: random(50, 300),
               scale: random(0.7, 1),
               type: random() < 0.5 ? 1 : 2,
               speed: random(5, 6)
            });
        }
    };
    this.setup();
    this.load = function (s) {
        var obj = Object.keys(this.images);
        this.images[obj[this.imageIndex]] = this.images[obj[this.imageIndex]]();
        this.imageIndex++;
        
        background(74, 168, 231);
        pushStyle();
            fill(240, 200);
            textAlign(CENTER, CENTER);
            textSize(40);
            text('LOADING', 300, 300);
            noFill();
            stroke(240, 150);
            strokeWeight(10);
            arc(300, 300, 300, 300, 0, map(this.imageIndex / obj.length, 0, 1, 0, 360));
            strokeWeight(1);
        popStyle();
    
        if(this.imageIndex < obj.length){
            this.loaded = false;
        }
        else {
            this.loaded = true;
            this.page = s;
        }
    };
    this.runClouds = function() {
        for(var i = 0; i < this.clouds.length; i++) {
            var cloud = this.clouds[i];
            var img = cloud.type === 1 ? this.images.cloud1 : this.images.cloud2;
            image(img, cloud.x, cloud.y, img.width * cloud.scale, img.height * cloud.scale);
            
            cloud.x-= cloud.speed;
            
            if(cloud.x < -img.width) {
                cloud.x = random(width * 1.1, width * 1.3);
                cloud.y = random(50, 300);
                cloud.scale = random(0.7, 1);
                cloud.type = random() < 0.5 ? 1 : 2;
                cloud.speed = random(5, 6);
            }
        }  
    };
    this.update = function() {
        for(var i = 0; i < this.spots.length; i++) {
            var spot = this.spots[i];
            
            if(spot.x + spot.w < 0) {
                spot.x = random(width + 100, width + 200);
                spot.y = random(430, 600);
                spot.w = random(100, 150);
                spot.h = spot.w * 0.2;
            }
            else {
                spot.x-= this.speed;
            }
        }
    };
    this.draw = function() {
        image(this.images.sky, 0, 0);
        image(this.images.ground, 0, 400);
        noStroke();
        fill(97, 135, 97);
        for(var i = 0; i < this.spots.length; i++) {
            var spot = this.spots[i];
            ellipse(spot.x, spot.y, spot.w, spot.h);
        }
    };
    this.go = function() {
        this.draw();
        this.runClouds();
        this.update();
        this.dog.run();
        this.butterfly.fly();
    };
};

app = new App();

draw = function() {
    background(74, 168, 231);
    
    switch(app.page) {
        case "load":
            app.load("go");
            break;
        case "go":
            app.go();
            break;
    }
};
    
  }
}

var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc);