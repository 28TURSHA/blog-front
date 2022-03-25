<template>
  <div class="about">
    <h1>Welcome to <span>Au-Pair World</span></h1>
    <div class="underline-title"></div>
    <body>
   <div class="countiner">
       <img class="scale" src="https://i.postimg.cc/QMDzcSff/one.jpg" alt="">
       <img class="translate" src="https://i.postimg.cc/s2nty7JK/two.jpg" alt="">
       <img class="scale" src="https://i.postimg.cc/02gh88pg/three.jpg" alt="">
       <img class="translate" src="https://i.postimg.cc/c4sM72Wg/four.jpg" alt="">
   </div> 
</body>
  </div>
  <div class="story">
    <h3>About Us</h3>
    <p>For a long time au-pairs have been looking for a platform to share their experiences on.That is why we as past au-pairs have decided to create a platform whereon we can do exactly that. SHARE EXPERIENCES!!
    </p>
    <p>On this website we allow you to share your experiences about au-pairing so that the au-pairs thats far away from their families don't feel like they the only ones going through certain things.
      The platform is also there for people that have been thinking about going into au-pairing. It allows them to see into an au-pair's daily life and distinguish whether or not this is something they would venture.
    </p>
  </div>

  
</template>
<style scoped>
h1,h3{
  padding-top: 70px;
}
.underline-title {
  background: #98FB98;
  height: 3px;
  margin: -1.1rem auto 0 auto;
  width: 467px;
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.countiner {
    position: absolute;
    width: 900px;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding-top: 400px;
    padding-left: 850px;
}
img {
    width: 350px;
    height: 250px;
    margin-left: 20px;
}
.scale:hover {
    transform: scale(1.5);
}
.translate:hover {
    transform: translate(10px,30px);
}

@media (min-width: 150px) and (max-width: 768px) {
    .countiner {
        position: absolute;
        width: 300px;
        height: 100px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    img {
    width: 157px;
    height: 150px;
    margin-bottom: 9px;
    }
}
span{
  color: #39a06c;
}
</style>

