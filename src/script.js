var music = {},
    typeSprite = '',
    types = [],
    gameData = {}
    attackName = '',
    curAttack = {},
    randInt = 0,
    enemyAttack = {},
    characters = [],
    defendProgressInt = null,
    defendProgressComplete = 0,
    progressInt = null,
    progressComplete = 0;

function buildVars(){
  // toda a música do jogo

  // http://downloads.khinsider.com/game-soundtracks/album/pokemon-gameboy-sound-collection
  music = {
    opening: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/aipycrsoym/101-opening.mp3",
    battle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3",
    victory: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/csqodhnibz/108-victory-vs-wild-pokemon-.mp3",
    pikachu: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/hpjacpzwof/170-pikachu.mp3",
    charmander: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/wfwdwleyga/149-charmander.mp3",
    squirtle: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/soagplijvq/152-squirtle.mp3",
    bulbasaur: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/gvqmhhryki/146-bulbasaur.mp3",
    meowth: "http://66.90.91.26/ost/pokemon-gameboy-sound-collection/viaskmobgb/213-meowth.mp3"
  }



  typeSprite = 'http://orig15.deviantart.net/24d8/f/2011/057/3/5/ge___energy_type_icons_by_aschefield101-d3agp02.png';
  types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];



  // os dados para o jogo em jogo
  gameData = {
    step: 1,
    hero: {},
    enemy: {}
  }



  // variáveis de ataque
  attackName = '';
  curAttack = {};
  randInt = 0;
  enemyAttack = {};
  defendProgressInt = null;
  defendProgressComplete = 0;
  progressInt = null;
  progressComplete = 0;



  // pokemons disponiveis
  characters = [
    {
      name: "pikachu",
      type: 'electric',
      weakness: ['fighting'],
      resistance: ['steel'],
      img: {
        default: "http://www.victoryroad.net/picture.php?s=9792cadf12f01527c0ac0d6b372e8359&albumid=253&pictureid=4034",
        front: "http://rs1263.pbsrc.com/albums/ii631/Pokemon-Vampire-Knight-lover/pikachu_.gif~c200",
        back: "https://cdn2.scratch.mit.edu/get_image/gallery/4034505_170x100.png"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "thunder jolt",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "electro ball",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "volt tackle",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "thunder crack",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "charmander",
      type: 'fire',
      weakness: ['water'],
      resistance: ['grass'],
      img: {
        default: "https://lh3.googleusercontent.com/proxy/mCfc4g7_IrXM9Yr_ajg63KYet_Uv3_stVOmLdZU73g5RwF_Fa93f9kDmUO4UxUCE6VmEVL0sPn86BTdBlhaepUNJ2Wk5XWzP",
        front: "https://66.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gifv",
        back: "https://vignette.wikia.nocookie.net/pokemon/images/0/00/Charmander_Back_BW.gif/revision/latest/top-crop/width/220/height/220?cb=20101125033812"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "ember",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "flamethrower",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "burning tail",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "fire spin",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "squirtle",
      type: 'water',
      weakness: ['electric','grass'],
      resistance: ['normal','fire'],
      img: {
        default: "https://twibbon.blob.core.windows.net/twibbon/2015/293/3b376826-db5e-4038-9403-277a5c27606d.png",
        front: "https://66.media.tumblr.com/tumblr_ma4ft6OXxw1rfjowdo1_500.gif",
        back: "http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "bubble",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "water gun",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "shell attack",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "hydro pump",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "bulbasaur",
      type: 'grass',
      weakness: ['fire'],
      resistance: ['water','psychic'],
      img: {
        default: "https://www.pngkey.com/png/full/99-991992_bulbasaur-bulbasaur-pixel.png",
        front: "https://media.giphy.com/media/HH2bb3Pjq5IB2/200w.gif",
        back: "https://i.ya-webdesign.com/images/transparent-sprite-bulbasaur-15.gif",
        deranged: "http://rs522.pbsrc.com/albums/w348/Richtoon18/b3617568f13aa750c57eacc45d0b2da7.gif~c200",
        sleep: "https://31.media.tumblr.com/4dd7682db26ac687ef81f0dd06794652/tumblr_msesq5uAIk1r93jsro1_500.gif"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "tackle",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "vine whip",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "razor leaf",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "solar beam",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    // {
    //   name: "meowth",
    //   type: 'dark',
    //   weakness: [],
    //   resistance: [],
    //   img: {
    //     default: "https://www.pngitem.com/pimgs/m/165-1654006_pixel-art-pokemon-meowth-hd-png-download.png",
    //     front: "https://24.media.tumblr.com/4dc1072bdd110a27a9d0922d3a392c8e/tumblr_mrw6pugd3A1rfjowdo1_500.gif",
    //     back:  "http://pokeunlock.com/wp-content/uploads/2015/01/meowth-2.gif"
    //   },
    //   hp: {
    //     current: 500,
    //     total: 500
    //   },
    //   attacks: [
    //     {
    //       name: "bite",
    //       hp: randomNum(40,20),
    //       avail: {
    //         total: 30,
    //         remaining: 30
    //       }
    //     },
    //     {
    //       name: "body slam",
    //       hp: randomNum(60,45),
    //       avail: {
    //         total: 10,
    //         remaining: 10
    //       }
    //     },
    //     {
    //       name: "foul play",
    //       hp: randomNum(75,60),
    //       avail: {
    //         total: 5,
    //         remaining: 5
    //       }
    //     },
    //     {
    //       name: "dark pulse",
    //       hp: randomNum(160, 130),
    //       avail: {
    //         total: 2,
    //         remaining: 2
    //       }
    //     }
    //   ]
    // }
  ];
}






// GERADOR DE NÚMEROS ALEATÓRIOS
// min é opcional
function randomNum(max, min){
  // gerar um numero aleatorio

  // min não é requerido
  if(min === undefined || min === '' || min === null){
    // valor mininmo
    min = 0;
  }

  // gerar numero radom
  return Math.floor(Math.random() * (max - min) + min);
}



// construir a interface do usuário do personagem
function populateChar(container,character){
  // which img
  var facing = 'front';
  if(character === 'hero'){
    // back do heroi
    facing = 'back';
  }

  container.append('<section class="char"><img src="'+gameData[character].img[facing]+'" alt="'+gameData[character].name+'"><aside class="data"><h2>'+gameData[character].name+'</h2><div><progress max="'+gameData[character].hp.total+'"></progress><p><span>'+gameData[character].hp.current+'</span>/'+gameData[character].hp.total+'</p></div></aside></section>');
}



function attackMultiplier(attacker, curAttack){
  var defender = 'enemy';
  if(attacker === 'enemy'){
    defender = 'hero';
  }

  if(gameData[defender].weakness.indexOf(gameData[attacker].type) >= 0){
    // 
    curAttack.hp *= 2;
  }

  if(gameData[defender].resistance.indexOf(gameData[attacker].type) >= 0){
    
    curAttack.hp /= 2;
  }

  curAttack.hp = Math.floor(curAttack.hp);
  return curAttack.hp;
}





function playSound(name){
  
  $('audio.sfx').attr('src', music[name])
  
  $('audio.music')[0].pause();
  
  $('audio.sfx')[0].play();

  
  setTimeout(function(){
    
    $('audio.sfx')[0].pause();
    
    $('audio.music')[0].play();
    
    $('audio.sfx')[0].currentTime = 0;
  },2000);
}




function setHP(){
  
  clearInterval(defendProgressInt);
  clearInterval(progressInt);
  $('.stadium .enemy progress').val(gameData.enemy.hp.current);
  $('.stadium .hero progress').val(gameData.hero.hp.current);
}





/////////////////////////////////////////////

/////////////////////////////////////////////
function resetGame(){
  
  buildVars();

  
  $('.hero').empty();
  $('.enemy').empty();

  
  $('.attack-list li').unbind('click');
  $('.attack-list').empty();
  $('.stadium .enemy').css({'padding':'0'});
  $('.instructions p').text('Escolha seu Pokémon');

  
  $('audio.music').attr('src',music["opening"]);
  $('audio.music')[0].play();

  
  $('.characters').empty();
  $('.characters').removeClass('hidden');

  for(var i in characters){
    
    $(".characters").append('<div class="char-container"><img src="'+characters[i].img.default+'" alt="'+characters[i].name+'"><h2>'+characters[i].name+'</h2></div>')
  }
  characterChoice();
}
resetGame();
$('.logo').click(function(){resetGame();});





/////////////////////////////////////////////

/////////////////////////////////////////////
function characterChoice(){
  $('.characters .char-container').click(function(){
    

    
    var name = $(this).children('h2').text().toLowerCase();

    switch(gameData.step){
      

      case 1:
        
        for(var i in characters){
          if(characters[i].name === name){
            
            gameData.hero = characters[i];
          }
        }

        
        var char = $(this).remove();
        
        populateChar($('.stadium .hero'), 'hero');

        for(var i in gameData.hero.attacks){
          
          $('.attack-list').append('<li><p class="attack-name"><strong>'+gameData.hero.attacks[i].name+'</strong></p><p class="attack-count"><small><span>'+gameData.hero.attacks[i].avail.remaining+'</span>/'+gameData.hero.attacks[i].avail.total+'</small></p></li>');
        }

        $('.attack-list').addClass('disabled');

        
        $('.instructions p').text('Choose your enemy');
        
        $('.stadium .hero progress').val(gameData.hero.hp.current);

        
        playSound(name);

        
        gameData.step = 2;
        break;

      case 2:
        
        for(var i in characters){
          if(characters[i].name === name){
            
            gameData.enemy = characters[i];
          }
        }

        
        var char = $(this).remove();
        
        populateChar($('.stadium .enemy'), 'enemy');
        
        $('.stadium .enemy').css({'padding':'25px 0'});

        
        $('.instructions p').text('Fight!!!');

        
        $('.characters').children().slideUp('500', function(){
          $('.characters').addClass('hidden');
        });

        
        $('.stadium .enemy progress').val(gameData.enemy.hp.current);

        
        playSound(name);

        
        gameData.step = 3;
        attackList();
        break;
    }
  });
}





function attackEnemy(that, callback){
  

  
  attackName = that.children('.attack-name').children('strong').text().toLowerCase();

  for(var i in gameData.hero.attacks){
    if(gameData.hero.attacks[i].name === attackName){
      
      curAttack = gameData.hero.attacks[i];
    }
  }

  
  if(curAttack.avail.remaining > 0){
    
    $('.attack-list').addClass('disabled');

    $('.hero .char img').animate(
      {
        'margin-left': '-30px',
        'margin-top': '10px'
      },
      50,
      'swing'
    );
    $('.hero .char img').animate(
      {
        'margin-left': '30px',
        'margin-top': '-10px'
      },
      50,
      'swing'
    );
    $('.hero .char img').animate(
      {
        'margin-left': '0px',
        'margin-top': '0px'
      },
      50,
      'swing'
    );

    
    gameData.enemy.hp.current -= attackMultiplier('hero', curAttack);

    if(gameData.enemy.hp.current <= 0){

      clearModal();
    $('.modal-in header').append('<h1>Seu adversario perdeu a batalha</h1><span class="close">x</span>');
    $('.modal-in section').append('<p>Parabéns! Porque não tenta vencer outra batalha?</p> <span class="nes-text is-disabled">Feito com carinho por Paulinho</span>');
    $('.modal-out').slideDown('400');
      modalControls();

      gameData.enemy.hp.current = 0;
      
      $('.enemy').empty();
      
      $('.characters').removeClass('hidden');
      $('.characters').children().slideDown('500');

      gameData.enemy = {};

      
      gameData.step = 2;
      
      $('.attack-list li').unbind('click');
    }else{
      

      
      curAttack.avail.remaining--;

      
      progressInt = setInterval(function(){
        
        var val = $('.stadium .enemy progress').val();
        val--;

        
        $('.stadium .enemy progress').val(val);

        if(val === gameData.enemy.hp.current){
          
          clearInterval(progressInt);
          progressComplete = 1;
        }
      },1);

      
      $('.stadium .enemy .data p span').text(gameData.enemy.hp.current);
      that.children('.attack-count').children('small').children('span').text(curAttack.avail.remaining);

      
      setTimeout(function(){
        // now defend that attack
        defend(that);
      }, 1000);
    }
  }
}





/////////////////////////////////////////////
// ENEMY ATTACK (DEFEND)
/////////////////////////////////////////////
function defend(that){
  // random attack
  randInt = randomNum(gameData.enemy.attacks.length);
  enemyAttack = gameData.enemy.attacks[randInt];

  // enemy attack animation sequence
  $('.enemy .char img').animate(
    {
      'margin-right': '-30px',
      'margin-top': '-10px'
    },
    50,
    'swing'
  );
  $('.enemy .char img').animate(
    {
      'margin-right': '30px',
      'margin-top': '10px'
    },
    50,
    'swing'
  );
  $('.enemy .char img').animate(
    {
      'margin-right': '0px',
      'margin-top': '0px'
    },
    50,
    'swing'
  );

  // attack the hero
  gameData.hero.hp.current -= attackMultiplier('enemy', enemyAttack);

  if(gameData.hero.hp.current <= 0){
    // ding dong the hero's dead

    clearModal();
    $('.modal-in header').append('<h1>Seu Pokémon perdeu</h1><span class="close">x</span>');
    $('.modal-in section').append('<p>Que pena. Estamos torcendo para você ganhar a próxima</p> <span class="nes-text is-disabled">Feito com carinho por Paulinho</span>');
    $('.modal-out').slideDown('400');
    modalControls()

    gameData.hero.hp.current = 0;

    resetGame();
  }else{
    // the hero lives

    // subtract attack from enemy count
    gameData.enemy.attacks[randInt].avail.remaining--;

    // health bar animation
    defendProgressInt = setInterval(function(){
      // get current val of health bar
      var val = $('.stadium .hero progress').val();
      val--;

      // update health bar value
      $('.stadium .hero progress').val(val);

      if(val === gameData.hero.hp.current){
        // stop the interval when target is attained
        clearInterval(defendProgressInt);
        defendProgressComplete = 1;
      }
    },1);

    // update health value
    $('.stadium .hero .data p span').text(gameData.hero.hp.current);

    setTimeout(function(){
      if(defendProgressComplete && progressComplete){
        $('.attack-list').removeClass('disabled');
      }else{
        setHP();
        $('.attack-list').removeClass('disabled');
      }
    }, 500);
  }
}





/////////////////////////////////////////////
// ATTACK SEQUENCE
/////////////////////////////////////////////
function attackList(){
  // attack instantiation
  $('.attack-list').removeClass('disabled');

  $('.attack-list li').click(function(){
    // attack choice is clicked
    var doAttack = 1;

    if(gameData.step === 3){
      // attack step - start attack sequence
      attackEnemy($(this));
    }
  });

  setTimeout(function(){
    // characters chosen - set & start the battle music
    $('audio.music').attr('src',music["battle"]);
    $('audio.music')[0].play();
  },1500);
}





/////////////////////////////////////////////
// MODAL
/////////////////////////////////////////////
function modalControls(){
  $('.modal-out').click(function(){
    $(this).slideUp('400');
  });
  $('.modal-in .close').click(function(e){
    $('.modal-out').slideUp('400');
  });

  $('.modal-in').click(function(e){
    e.stopPropagation();
    e.preventDefault();
  });
}

function clearModal(){
  $('.modal-in header').empty();
  $('.modal-in section').empty();
  $('.modal-in footer').empty();
  setHP();
}