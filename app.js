var i = 0;
var speed = 5;
var txt = 'var Sansa = mislead(Stark,( x ) / -rule(rule(-0.26) - -mislead(protect(TABLE[( -bar(( mislead(Arya + Sansa * rule(betray(COLS),( Sansa )) * --30 / Arya * ( rule() ),ROWS) / protect(90 * -destroy(ROWS,dog - 1 + rule(--0.35,43 - -( 97 ) - 1 - mislead(( Sansa ),( ( destroy(protect(Ygritte + ( COLS ) * ROWS,( betray(dog,( -1 )) )),TABLE[-Sansa][( Jon )] + -10 * -bar(TABLE[-31][( --Jon * (-betray(ROWS - Hodor,-foo(TABLE[foo(ROWS / -1)][ROWS])) ) )],Arya,-( -COLS / foo(--COLS * betray() * -60 - ( COLS / -190.73 )) )) + ( rule(--Sansa,-( COLS ),-TABLE[Jon][( Hodor )]) ) - Ygritte) ) ) / ( bar(( rule(TABLE[---0.41][-( --1 )],protect(( ( Hodor ) ))) ) / TABLE[foo()][TABLE[Ygritte][--46]],ROWS) )))),betray(ROWS,-Ygritte,mislead())) / TABLE[-0.57][58] ) * TABLE[COLS][( -Jon )] + COLS + -Sansa) / rule(-rule(-foo(-( COLS ))),-( dog ) / bar(Sansa)) )][-foo(-0.73 - ( 63 ))])) - -betray(83,( ( bar(ROWS,( ROWS )) ) ),Jon * Sansa) - ( 1 ),dog,dog),-( dog ) * ---300.02 + dog) def rule(dog,dog){ x; y -= 1 } def TABLE[x][j] { 75 } assert ( ( -protect() ) ) :  One can not simply parse himself  def foo(Hodor){ -Stark; COLS - ROWS } assert betray(COLS) :  Winter  is coming assert  ( ROWS ) :  A mind needs books as a sword needs a whetstone, if it is to keep its edge.  def protect(Ygritte){ Stark *= -86 } assert ( -550.326 ) - TABLE[( COLS )][Arya * -dog] - 80 / Stark :  A mind needs books as a sword needs a whetstone, if it is to keep its edge.  def TABLE[( betray (-430.408,Stark + bar(Stark,COLS) + ( COLS ) - ( betray(--0.55) ),60.235))) )][k] { Stark /= mislead(x) } var Hodor = -780.817 / Sansa - rule(0.63) def TABLE[rule(( -Hodor ),-( ROWS ))][i] { Hodor *= y; dog -= Ygritte } var Ygritte = -ROWS + ( -Stark / dog ) var x = -mislead(ROWS) def TABLE[-bar(--0.76,Stark,COLS)][k] { 89 } assert -67 :  Nothing burns like the cold.  def TABLE[( -( rule(-( x ) + Ygritte + rule(betray(COLS,Jon - protect(COLS) - --Ygritte * x),mislead()) * x) ) + dog ) * 520.81][i] { if(dog - -( ( x + rule(Hodor,( betray() )) ) ) / -betray(rule(mislead(rule(-0.35,COLS),( bar(rule(ROWS - ( betray(-0.06,-( -TABLE[1][150.5] )) )),Ygritte)  )),( -foo() )) + -y)){ foo(foo(ROWS,-80,-0.08),Ygritte / ( -0.37 )) } else { if(Arya / y * -rule(foo(betray(( -betray(COLS,TABLE[( Stark ) * Sansa][betray(Stark,ROWS,protect(83,y)) + 0.71],-COLS) ),-destroy(-TABLE[ROWS][destroy(-100,COLS,dog)]),ROWS * Hodor + 3)),bar(Arya - protect() * COLS * TABLE[foo(-( ( -( ROWS ) ) ))\
    ya /= ( bar(Sansa) ); Arya *= -( 0.93 ); Ygritte /= protect assert Hodor : "Nothing burns like the cold." assert ROWS : "One can not simply parse himself" assert -TABLE[-0.66][destroy(( --0.68 ),COLS) * TABLE[betray(Stark)][betray(Arya,mislead(mislead(( Ygritte ),dog,COLS),betray() / mislead() + x,-0.9)) / TABLE[-destroy(( foo(-51 / ( COLS ) * COLS,Sansa) ) / ( ( ( mislead(-COLS - -0.05,( destroy(COLS) )) ) ) ),rule(-0.18 - ( 28 ),ROWS,dog) + rule(COLS,210.991))][destroy(protect(-130.967 * -87) + ( -( ( TABLE[--Sansa][y] ) ) )) / Hodor]]] : "What do we say to the Lord of Death?" var Hodor = y var Jon = TABLE[TABLE[TABLE[Arya][ROWS]][Hodor]][( TABLE[0.5][( ( rule(ROWS) ) )] )] var Stark = ( -COLS ) def mislead(){ y += -bar(destroy(-0.39 - COLS - --Hodor)) * -49 }';
const linesOfCode = ["var Sansa = mislead(Stark,( x ) / -rule(rule(-0.26) - -mislead(protect(TABLE[( -bar(( mislead(Arya + Sansa * rule(betray(COLS),( Sansa )) * --30 / Arya * ( rule() ),ROWS) / protect(90 * -destroy(ROWS,dog - 1 + rule(--0.35,43 - -( 97 ) - 1 - mislead(( Sansa ),( ( destroy(protect(Ygritte + ( COLS ) * ROWS,( betray(dog", "COLS - -0.05,( destroy(COLS) )) ) ) ),rule(-0.18 - ( 28 ),ROWS,dog) + rule(COLS,210.991))][destroy(protect(-130.967 * -87) + ( -( ( TABLE[--Sansa][y] ) ) )) / Hodor]]] : What do we say to the Lord of Death? var Hodor = y var Jon = TABLE[TABLE[TABLE[Arya][ROWS]][Hodor]][( TABLE[0.5][( ( rule(ROWS) ) )] )] var Stark = ( -COLS ) def mislead(){ y += -bar(destroy(-0.39 - COLS - --Hodor))"];
const introWords = [" these ", "words", "should", "say", "something", "important"];
let startTL = gsap.timeline();
startTL.to(".text", {y:"0%", duration: 1.5, ease: 'sine.out'});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randomCodeLines(numOfLines){

    for(var x=0; x <=numOfLines; x++){

        var ul = document.getElementById("coding-text");
        var li = document.createElement("li");
        var span = document.createElement("span");
        var paragraph = document.createElement('p');
        span.style.cssText = "color:rgb(88, 209, 255);";
        span.appendChild(document.createTextNode(introWords[0]));
        paragraph.innerHTML = "<p id='hackertxt' style='white-space:nowrap;' >"+ linesOfCode[getRandomInt(2)] +"</p> ";
        li.appendChild(paragraph);
        ul.appendChild(li);

    }

    startTL.to("#hackertxt", {duration: 2, text: {
        value: "This is the new text",
        delimiter: " "
    }, ease: "none"}, "-=2");

}
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("coding-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function activateLanding(){
    var screendrop = 0;

    var width = screen.width;
    if (width > 1000) {
        screendrop = 2.5
        speed = 0.01;
    }else{
        screendrop = 2.5
        speed = 15;
    }
    startTL.to(".slider", {y: "100%", duration: screendrop});
    startTL.to(".intro", {y: "100%", duration: screendrop}, "-=2.5");
    startTL.fromTo(".nav", {opacity: .1, y:"-100"}, {y:"0", opacity: 1, duration: 1.5});
    startTL.to(".nav-menu li:first-child", {rotation:1080, duration: 1})

    randomCodeLines(15);

    //typeWriter();
}