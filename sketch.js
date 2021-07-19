var bg1,clickhere,o,oo,s1,ch,s33,bg4,bg2,c3,gs,sate,sb,co1,c1,sun,s,bg2,bg3,il1,gg,g,e1,s22,q2,qg2,ssp,j,jg,score=0,fww,fw
var m1sg,m2sg,map,m3sg,cc,s12,ccc,ib1,ib2,ib3,ib11,ibb,wbp,db=0,db1=0,db2=0,ibb1,gto=0,d2,d3,a2,a3,a4,a5,a6,bg5,lb,rr,rb,rrr,star
var fun=0,funn=0,gamestate=0,ggg=0,tw=0,wa1,w2,wa2,aa,j1,jg1,ene1,swb1,a1,tt,sbb,o1,oo1,g1,wa,swb,ene,gg1,pb,qg,q,w1,q1,qg1,pb1,td
var t,map_count=3,bg10,bg13,music1
function preload(){
ib3=loadImage("ibg3.png");bg10=loadImage("bg10.jpg");
bg13=loadImage("dbvb.jpg")
   music1 = loadSound("bb.mp3");
    
cc=loadImage("chm.gif");ib1=loadImage("ibg1.png")
wbp=loadImage("wbp.png");ib2=loadImage("ibg33.jpg")
d=loadImage("g1.png");swbb=loadImage("mm.png")
d2=loadImage("g2.png");bg5=loadImage("bg5.jpg")
d3=loadImage("g3.png");lb=loadImage("wb.png")
rr=loadImage("rr.png");rrr=loadImage("next.png")
fww=loadImage("freeze.png");wa1=loadImage("fwater.jpg")
swb=loadImage("sb.png");ene=loadImage("e.png")
swb1=loadImage("sb1.png");ene1=loadImage("e1.png");wa=loadImage("water.gif")
bg1=loadImage("mp1.jpg");bg3=loadImage("bggg.png");star=loadImage("ssss.png")
bg4=loadImage("hh.png");ch=loadImage("ssp.png")
bg2=loadImage("l.png");sbi=loadImage("Idle (1).png")
ssp=loadAnimation("s1.png","s2.png","s3.png","s4.png","s3.png","s2.png","s1.png")
sb=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png")

c1=loadImage("i1.png");c2=loadImage("i2.png")
c3=loadImage("ikm.png");s2=loadImage("ki.png")
s22=loadImage("hc1.png");s3=loadImage("bgii.jpg")
sbb=loadAnimation("Jump (1).png","Jump (2).png","Jump (3).png","Jump (4).png","Jump (5).png","Jump (6).png","Jump (8).png","Jump (7).png","Jump (9).png","Jump (10).png")
sbb1=loadAnimation("w1.png","w2.png","w3.png");bb1=loadAnimation("pb1.png","pb2.png","pb3.png")
}
function setup (){
createCanvas(1000,600)
map=0

jg=new Group()
jg1=new Group()
ib11=createSprite(800,300,100,100)
ib11.addImage(ib1)
ib11.scale=0.9
ib11.visible=false
ib22=createSprite(600,300,100,100)
ib22.addImage(ib2)
ib22.scale=0.9
ib22.visible=false
ib33=createSprite(600,300,100,100)
ib33.addImage(ib3)
ib33.scale=0.7
ib33.visible=false
ibb=createSprite(1000,100,100,100)
ibb.addImage(wbp)
ibb.scale=0.8
ibb.visible=false
ibb1=createSprite(900,120,100,100)
ibb1.addImage(wbp)
ibb1.scale=0.8
ibb1.visible=false
gs=createSprite(2000,530,100,100)
gs.visible=false
gs=createSprite(3500,490,6500,20)
gs.visible=false
gs2=createSprite(0,520,7600,20)
gs2.visible=false
aa=createSprite(4170,520,1000,20)
aa.visible=false
w1=createSprite(4170,500,500,50)
w1.addImage(wa)
w1.scale=0.8
w1.visible=false
wa2=createSprite(4170,580,1000,50)
wa2.addImage(wa1)
wa2.scale=1.2
wa2.visible=false
fw=createSprite(3800,300,50,50)
fw.addImage(fww)
fw.scale=0.2
fw.visible=false
clickhere=createSprite(width-200,height-100,50,50)
clickhere.addImage(ch)
clickhere.scale=0.5
clickhere.visible=false
s=createSprite(350,450,50,50)
s.addAnimation("stop",sbi)
s.addAnimation("jump",sbb)
s.addAnimation("run",sb)
s.scale=0.2
s.visible=false
s1=createSprite(200,250,50,50)
s1.addAnimation("stop",sbi)
s1.addAnimation("jump",sbb)
s1.addAnimation("run",sb)
s1.scale=0.2
s1.visible=false
s12=createSprite(200,250,50,50)
s12.addAnimation("stop",sbi)
s12.addAnimation("jump",sbb)
s12.addAnimation("run",sb)
s12.scale=0.2
s12.visible=false
co1=createSprite(500,200,50,50)
co1.addImage(c1)
co1.scale=0.8
co1.visible=false
il1=createSprite(250,250,50,50)
il1.addImage(c2)
il1.scale=0.8
il1.visible=false
il2=createSprite(750,270,50,50)
il2.addImage(c3)
il2.scale=0.8
il2.visible=false
gg=new Group()

m1sg=new Group()

oo=new Group()
oo1=new Group()
tt=new Group()
gg1=new Group()
qg=new Group()
qg1=new Group()
qg2=new Group()
m2sg=new Group()
m3sg=new Group()
m1s()
m3s()
m2s()
cg1()
cg2()
mgs()
mgs1()
makeGroundSprites()
rb=createSprite(380,440,50,50)
rb.addImage(rr)
rb.scale=0.3;rb.visible=false
nl=createSprite(550,440,50,50)
nl.addImage(rrr)
nl.scale=0.6;nl.visible=false
context = new AudioContext();
}
function draw(){
 
if(gamestate==0){ 
 background(225)
 camera.position.x=500
 camera.position.y=300
 rb.visible=false
nl.visible=false
 clickhere.visible=true
 s12.visible=false
  s.visible=false;
s1.visible=false
fw.visible=false
if(mousePressedOver(clickhere)){
gamestate=1
music1.play()
}
drawSprites ();
image(bg1,0,0,width,height)
fill("black")
textSize(50)      
textFont("algerian")
text("CASITA TRAIL",250,300)
drawSprites ();
}
if(gamestate==1){

 background(225)
 image(s3,0,0,width,height)
 rb.visible=false
 nl.visible=false
 clickhere.visible=false
 co1.visible=true
 il1.visible=true
 fw.visible=false
 il2.visible=true
 s12.visible=false
  s.visible=false;
s1.visible=false
wa2.visible=false
w1.visible=false
if(map==1){
il1.destroy()
gto+=1
}
if(map==2){
  co1.destroy()
}
if(map==3){
  il2.destroy()
}

m1sg.destroyEach()
m2sg.destroyEach()
m3sg.destroyEach()
if(map_count==0){
  gamestate=6
}
 if(mousePressedOver(co1)){
map_count--;
   m1s()
    gamestate=2
    }
    if(mousePressedOver(il2)){
      m3s()
      map_count--;
      s1.x=200
      s1.y=240
      gamestate=4
      }
    if(mousePressedOver(il1)){
      m2s()
      gamestate=3
      s.x=430
      s.y=240
      map_count--;
      }
    
 drawSprites ();
}
if(gamestate==2){
  map=2
background(225)
image(bg2,0,0,6500,height) 
m1sg.setVisibleEach(true)
fw.visible=false
wa2.visible=false;ibb1.visible=true
w1.visible=false;ib22.visible=true
s1.visible=false;s.visible=false
rb.visible=false;nl.visible=false
co1.visible=false;il1.visible=false
il2.visible=false;s12.visible=true  
clickhere.visible=false;s12.velocityX=0
image(swb,camera.position.x-100,50,270,50)
if(funn!=0) { 
image(ene,camera.position.x-65,55,(funn/2)*50,32)}
image(swbb,camera.position.x-400,50,270,60)
if(score<46){
if(score!=0)
image(ene1,camera.position.x-325,67,(score/10)*40,25)}

if(score>45){ 
gamestate=7
}
if(keyDown("right")){
s12.changeAnimation("run")
s12.velocityX=10  }
if(mousePressedOver(ibb1)){
  ib22.visible=false
  db1+=1
    }
    if(db1!=0){
      ib22.visible=false
      ibb1.visible=false  
    }
if(s12.collide(qg1,callback2)){
score+=1}  
if(s12.collide(gg1)){
score+=1 }   
if(s12.x>6000){
gamestate=5}
s12.velocityY+=0.5
if(s12.collide(gs)){
  if(keyDown("space")){
    s12.changeAnimation("jump")
    s12.velocityY=-15}
}
if(s12.collide(gg)){
  if(keyDown("space")){
    s12.changeAnimation("jump")
    s12.velocityY=-15}
}

if(s12.overlap(m1sg,callback2)){
funn+=1}
if (frameCount % 130 == 0){
td()}
if(frameCount<99){
  tw+=1
}
if(s12.x<5500)
camera.position.x=s12.x+400 
drawSprites()
fill("black") 
}
if(gamestate==3){

map=1;background(225)
image(bg3,0,0,6500,height) 
ib11.visible=true;ibb.visible=true
if(mousePressedOver(ibb)){
db+=1;m2sg.setVisibleEach(true)
}
if(db!=0){
ib11.visible=false;ibb.visible=false
}
rb.visible=false;;nl.visible=false
jg.visible=true;fw.visible=true
co1.visible=false;w1.visible=true;w1.shapeColor="green"
il1.visible=false;s1.visible=false
s.visible=true;s12.visible=false
clickhere.visible=false;il2.visible=false


s.velocityX=0
image(swb,camera.position.x-400,40,270,50)
if(funn!=0) { 
image(ene,camera.position.x-365,45,(funn/2)*50,32)}
image(swbb,camera.position.x-400,120,270,60)
if(score<30){         
if(score!=0) { 
image(ene1,camera.position.x-325,140,(score/10)*60,25)}
}
if(score>29){  
gamestate=7
}
if(keyDown("right")){
s.changeAnimation("run")
s.velocityX=7
}
s.velocityY+=0.5
if (s.collide(gs2)){ 
if(keyDown("space")){
s.changeAnimation("jump")
s.velocityY=-15   
}}
if(s.y>595){
gamestate=7
}
if( s.collide(oo)){
if(keyDown("space")){
 s.changeAnimation("jump")
 s.velocityY=-15       
}}
if(s.x>6000){
gamestate=5
}
if(s.overlap(m2sg,callback2)){
  funn+=1
}
if(s.collide(qg,callback2)){
score+=1
} 
if(s.collide(oo1)){
score+=1
}     
if(s.collide(fw,callback2)){
wa2.visible=true;
w1.visible=false
fun+=1
}
if(fun!=0)  {
s.collide(aa)
w1.visible=false
} 
else{
w1.visible=true 
fw.visible=true
wa2.visible=false
}
if (frameCount % 150 == 0){
pb()
}
if(frameCount<99){
  tw+=1
}
if(s.x<5500)
camera.position.x=s.x+430
drawSprites()
}
if(gamestate==4){
s12.visible=false
 s.visible=false;
fw.visible=false
wa2.visible=false
w1.visible=false
wa2.visible=false
w1.visible=false;ibb1.visible=true
ib33.visible=true
  map=3
      background(225)
      image(bg4,0,0,6500,height)
     
      rb.visible=false
nl.visible=false
      il2.visible=false
     co1.visible=false
    il1.visible=false
      s1.visible=true
    clickhere.visible=false
    image(swbb,camera.position.x-400,50,270,60)
    if(score!=0)
    image(ene1,camera.position.x-325,67,(score/10)*400,25)
    image(swb1,camera.position.x-110,50,350,65)
    if(score<30){ 
if(funn!=0) { 
image(ene1,camera.position.x-20,67,(funn/2)*50,32)}
    }
    if(score>4){ 
      gamestate=5
    }
  
    if(mousePressedOver(ibb1)){
      ib33.visible=false
      db2+=1
        }
        if(db2!=0){
          ib33.visible=false
          ibb1.visible=false
          m3sg.setVisibleEach(true)  
        }
  
   
if(s1.x>5900){
gamestate=5} 
   s1.velocityX=0
      if(keyDown("right")){
      s1.changeAnimation("run")
      s1.velocityX=7    
       }
      
      s1.velocityY+=0.5
     
      if (frameCount % 90 == 0){
        pb1()
          }
         
    if(s1.collide(tt)){
    if(keyDown("space")){
    s1.changeAnimation("jump") 
    s1.velocityY=-15 }}

    if(s1.collide(qg2,callback2)){
     score+=1
    } 
        if(s1.overlap(m3sg,callback2))  {
        funn+=1
      } 
    if(s1.y>595){
      gamestate=7
    }
    if(frameCount<10){
      tw+=1
    }
  
      textSize(20)
      fill("black")
       if(s1.x<5600)
      camera.position.x=s1.x+400
        drawSprites()
}
if(gamestate==5){
background(225)
s12.visible=false
s.visible=false;
s1.visible=false
image(bg5,0,0,width,height)
imageMode(CENTER)
image(lb,width/2,height/2,600,500)
textSize(30)
rb.visible=true
nl.visible=true
camera.position.x=500
camera.position.y=300
fill("black")
textFont("impact")
text("LEADERBOARD",415,130)
if(funn>=3){
image(star,430,260,70,70);}
if(funn>=6){  
image(star,500,200,70,70)
}
if(funn>=9){     
image(star,560,260,70,70)
textSize(40)
text("Awesome",410,340)
}
if(map==2)
m1sg.destroyEach()
if(map==1){ 
fun=0;
m2sg.destroyEach()
wa2.destroy()
aa.destroy()
w1.destroy()
}
if(map==3)
m3sg.destroyEach()
if(mouseIsOver(rb)&&mouseWentDown("leftButton")){
score=0
funn=0; 
fun=0;
s.x=430
s12.x=400
if(map==2){ 
m1s()
gamestate=2
s12.x=400
s12.y=200}
if(map==1){ 
m2s()
w1=createSprite(4170,500,500,50)
w1.addImage(wa)
w1.scale=0.8
w1.visible=false
fw=createSprite(3800,300,50,50)
fw.addImage(fww)
fw.scale=0.2
fw.visible=false
wa2=createSprite(4170,580,1000,50)
wa2.addImage(wa1)
wa2.scale=1.2
wa2.visible=false
aa=createSprite(4170,520,1000,20)
aa.visible=false
gamestate=3
m2sg.setVisibleEach(true)
s.x=430
s.y=240}
if(map==3){ 
m3s()
s1.x=200;s1.y=240 
m3sg.setVisibleEach(true)
gamestate=4
}
}

if(mouseIsOver(nl)&&mouseWentDown("leftButton")){
gamestate=1
score=0
funn=0
s.visible=false
s1.visible=false
s12.visible=false
}
drawSprites()
}
if(gamestate==6){
  background(225)
  s12.visible=false
  s.visible=false;
  s1.visible=false
  image(bg10,0,0,width,height)
  imageMode(CENTER)
  camera.position.x=500
  camera.position.y=300
  if(map==2)
  m1sg.destroyEach()
  if(map==1){ 
  m2sg.destroyEach()
  }
  if(map==3)
  m3sg.destroyEach()
  drawSprites()
  fill("black")
  textFont("impact")
  textSize(70)
  text("GAME OVER",350,300)
}
if(gamestate==7){
background(225)
s12.visible=false
s.visible=false;
s1.visible=false
image(bg13,0,0,width,height)
imageMode(CENTER)
image(lb,width/2,height/2,600,500)
textSize(30)
rb.visible=true
nl.visible=true
camera.position.x=500
camera.position.y=300
textSize(50)
fill("black")
textFont("impact")
fill("#511281")
text("YOU LOSE",410,230)
fill("#4CA1A3")
text("TRY AGAIN",400,310)
if(map==2)
m1sg.destroyEach()
if(map==1){ 
fun=0;
m2sg.destroyEach()
wa2.destroy()
aa.destroy()
w1.destroy()
}
if(map==3)
m3sg.destroyEach()
if(mousePressedOver(rb)){
score=0
funn=0; 
fun=0;
s1.x=400;
s.x=430
s12.x=400
if(map==2){ 
m1s()
gamestate=2}
if(map==1){ 
m2s()
w1=createSprite(4170,500,500,50)
w1.addImage(wa)
w1.scale=0.8
w1.visible=false
fw=createSprite(3800,300,50,50)
fw.addImage(fww)
fw.scale=0.2
fw.visible=false
wa2=createSprite(4170,580,1000,50)
wa2.addImage(wa1)
wa2.scale=1.2
wa2.visible=false
aa=createSprite(4170,520,1000,20)
aa.visible=false
gamestate=3
m2sg.setVisibleEach(true)
s.x=430
s.y=240}
if(map==3){ 
  m3s()
  s1.x=200;s1.y=240 
  m3sg.setVisibleEach(true)
  gamestate=4
  }
}
if(mouseIsOver(nl)&&mouseWentDown("leftButton")){
gamestate=1
score=0
funn=0
s.visible=false
s1.visible=false
s12.visible=false
}
drawSprites()
}
}
function callback2(s1, s2) {
  s2.remove();
}
function pb() {
  q=createSprite(3200,470,30,30)
 q.addAnimation("run",sbb1)
 q.scale=0.5
 q.lifetime=250
 q.velocityX = -5;
  qg.add(q)
}
function pb1() {
  q2=createSprite(5200,430,30,30)
 q2.addImage(s22)
 q2.scale=0.3
 q2.lifetime=160
 q2.velocityX = -5;
  qg2.add(q2)
}
function td() {
  e1=createSprite(3200,450,30,30)
 e1.addImage(s2)
 e1.scale=0.3
 e1.lifetime=160
 e1.velocityX = -5;
  qg1.add(e1)
}
function m1s(){
a18=createSprite(900,290,30,30)
a18.addImage(d2)
a18.scale=0.3
a18.visible=false
m1sg.add(a18)
a10=createSprite(1000,290,30,30)
a10.addImage(d)
a10.scale=0.3
a10.visible=false
m1sg.add(a10)
a11=createSprite(1300,220,30,30)
a11.addImage(d3)
a11.scale=0.3
a11.visible=false
m1sg.add(a11)
a12=createSprite(1350,220,30,30)
a12.addImage(d)
a12.scale=0.3
a12.visible=false
m1sg.add(a12)
a13=createSprite(2050,430,30,30)
a13.addImage(d2)
a13.scale=0.3
a13.visible=false
m1sg.add(a13)
a14=createSprite(2700,230,30,30)
a14.addImage(d3)
a14.scale=0.3
a14.visible=false
m1sg.add(a14)
a15=createSprite(3400,230,30,30)
a15.addImage(d)
a15.scale=0.3
a15.visible=false
m1sg.add(a15)
a16=createSprite(4200,290,30,30)
a16.addImage(d3)
a16.scale=0.3
a16.visible=false
m1sg.add(a16)
a17=createSprite(4450,230,30,30)
a17.addImage(d2)
a17.scale=0.3
a17.visible=false
m1sg.add(a17)
}
function m2s(){
a1=createSprite(640,400,30,30)
a1.addImage(d)
a1.scale=0.3
a1.visible=false
m2sg.add(a1)
a2=createSprite(760,350,30,30)
a2.addImage(d3)
a2.scale=0.3
a2.visible=false
m2sg.add(a2)
a3=createSprite(930,290,30,30)
a3.addImage(d2)
a3.scale=0.3
a3.visible=false
m2sg.add(a3)
a4=createSprite(1110,350,30,30)
a4.addImage(d3)
a4.scale=0.3
a4.visible=false
m2sg.add(a4)
a5=createSprite(1270,400,30,30)
a5.addImage(d)
a5.scale=0.3
a5.visible=false
m2sg.add(a5)
a6=createSprite(2300,300,30,30)
a6.addImage(d3)
a6.scale=0.3
a6.visible=false
m2sg.add(a6)
a7=createSprite(2500,200,30,30)
a7.addImage(d)
a7.scale=0.3
a7.visible=false
m2sg.add(a7)
a8=createSprite(5080,380,30,30)
a8.addImage(d2)
a8.scale=0.3
a8.visible=false
m2sg.add(a8)
a9=createSprite(5160,330,30,30)
a9.addImage(d3)
a9.scale=0.3
a9.visible=false
m2sg.add(a9)
}
function m3s(){
  z=createSprite(615,210,30,30)
z.addImage(d)
z.scale=0.3
z.visible=false
m3sg.add(z)
z1=createSprite(750,280,30,30)
z1.addImage(d2)
z1.scale=0.3
z1.visible=false
m3sg.add(z1)
z2=createSprite(890,370,30,30)
z2.addImage(d3)
z2.scale=0.3
z2.visible=false
m3sg.add(z2)
z3=createSprite(1030,460,30,30)
z3.addImage(d)
z3.scale=0.3
z3.visible=false
m3sg.add(z3)
z4=createSprite(1150,370,30,30)
z4.addImage(d3)
z4.scale=0.3
z4.visible=false
m3sg.add(z4)
z5=createSprite(1250,280,30,30)
z5.addImage(d2)
z5.scale=0.3
z5.visible=false
m3sg.add(z5)
z6=createSprite(1390,210,30,30)
z6.addImage(d)
z6.scale=0.3
z6.visible=false
m3sg.add(z6)
z7=createSprite(2520,280,30,30)
z7.addImage(d2)
z7.scale=0.3
z7.visible=false
m3sg.add(z7)
z8=createSprite(2820,280,30,30)
z8.addImage(d3)
z8.scale=0.3
z8.visible=false
m3sg.add(z8)
z9=createSprite(3650,230,30,30)
z9.addImage(d)
z9.scale=0.3
z9.visible=false
m3sg.add(z9)
}

