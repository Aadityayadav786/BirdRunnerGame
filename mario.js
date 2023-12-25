
 var heading1 = document.createElement("h1");
 var heading2 = document.createElement("h1");
 var heading3 = document.createElement("h1");
 heading1.textContent = "Right-Left key for motion";
 heading2.textContent = "Space key for Jump";
 heading3.textContent = "Press Down /Enter on Green Pipe for new level";
 document.body.appendChild(heading1);
 document.body.appendChild(heading2);
 document.body.appendChild(heading3);






const{Client , Account , Databases , ID , Query} = Appwrite
 const projectId = '64f5f0e4bdae3cad4c1d'    
const databaseId = '65892e4bb3ecfc5eb17b'
const collectionId = '65892f1ba10c183a5742'

const client = new Client()
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject(projectId)

const account = new Account(client)
const database = new Databases(client)

async function isLoggedIn(){
    return account.get().then(response=>{
        if(response){
            return true
        }
        return false
    }).catch(error=>console.error(error))
}

function register(event){
    Account.create(
        ID.unique(),
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['register-username'].value
    ).then(response=>{
        console.log(response)
        database,createDocument(
                  databaseId,
                  collectionId,
                  response.$id,
                  {
                    "userId": response.$id,
                    "highscore":0
                  }
        )
    
    account.createEmailSession(
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
).then(()=>{
    showDisplay()
})
}).catch(error=>console.error(error))
    event.preventDefault()
}

function login(event){


}

function showDisplay(){
   const modalElement =  document.getElementById('modal')
   modalElement.classList.add('hidden')
   isLoggedIn().then(isLogIn=>{
    if(isLogin){
        const modalElement = document.getElementById('modal')
        modalElement.classList.add('hidden')
        const logoutButton = document.getElementById('logout-button')
        logoutButton.className.remove('hidden')
       const highscoreTag= document.getElementById('highscore-tag')
       highscoreTag.className.remove('hidden')
       startGame()
    } else{
        const modalElement = document.getElementById('modal')
        modalElement.classList.remove('hidden')
        const logoutButton = document.getElementById('logout-button')
        logoutButton.className.add('hidden')
       const highscoreTag= document.getElementById('highscore-tag')
       highscoreTag.className.add('hidden')
    const usernameElement =    document.getElementById('username')
    usernameElement.textContent=""
   const canvas =  document.querySelector('canvas')
   if (canvas) canvas.remove()
    }
   }).catch(error=>console.log(error))
}

showDisplay()

//Kabbom Game
function startGame(){
    kaboom({
        global:true,
        fullscreen:true,
        scale:2,
        clearColor:[0,0,0,1]
    })

    //SpeedIdentifiers
    const moveSpeed = 120
    const jumpForce = 360
    const bigJumpForce = 550
    let currentJumpforce = jumpForce
    const fallDeath = 400
    const enemySpeed = 20

    //Game Variable
    let isJumping = true

    loadRoot('https://i.imgur.com/')
    loadSprite('coin','wbKxhcd.png')
    loadSprite('evil-shroom', 'KPO3fR9.png')
    loadSprite('brick','pogC9x5.png')
    loadSprite('block','M6rwarW.png')

    loadSprite('mushroom','0wMd92p.png')
    loadSprite('surprise','gesQ1KP.png')
    loadSprite('unboxed','bdrLpi6.png')
    loadSprite('pipe-top-left','RetPiWY.png')
    loadSprite('pipe-top-right','hj2GK4n.png')
    loadSprite('pipe-bottom-left','c1cYSbt.png')
    loadSprite('pipe-bottom-right','nqQ79eI.png')
    loadSprite('blue-block','fVscIbn.png')
    loadSprite('blue-brick','3e5YRQd.png')
    loadSprite('blue-steel','gqVoI2b.png')
    loadSprite('blue-evil-mushroom','SvV4ueD.png')
    loadSprite('blue-surprise','RMqCc1G.png')

    scene("game",({level,score})=>{
        layers(["bg","obj","ui"],"obj")

        const maps = [
            [
                '                                          ',
                '                                          ',
                '                                          ',
                '                                          ',
                '                                          ',
                '   %  =*=%=                               ',
                '                                          ',
                '                           -+             ',
                '                   ^     ^     ()         ',
                '==============================    ====='
    
    
    
            ],
            [      '                                                            ',
            '                                                                   ',
            '                     z======z=======                                ',
            '                                          =====   # xx    x  %     ',
            '                                          ',
            '   %  =*=%=                 "!!!!!!!zzz^^====="     %               ',
            '                                                                    ',
            '                           -+             ',
            '                   ^     ^                               ()         ',
            '==========      =zz=======      ======    ======    ==          ===',
                '£                                                              £',
                '£                                                    %%        £',
                '£                                                              £',
                '£                      !                                       £',
                '£                                                              £',
                '£   @@@@@@                   **    x x                         £',
                '£                                x x x     %                   £',
                '£                              x x x x      x                -+£',
                '£                   z     z   x x x x       x                ()£',
                '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    
            ],
            [

                '£                                                              £',
                '£                 %                                   %%        £',
                '£    xxxxxxx                                                         £',
                '£         xxx             !                                       £',
                '£                                                              £',
                '£   @@@@@@        xxx           **    x x                         £',
                '£                                x x x     %                   £',
                '£      xxxxxx                        x x x x      x                -+£',
                '£                   z     z   x x x x       x                  £',
                '!!!!!    !!!!!  !!!!!!!!       !!!!!!!!!!!!!!   !!  !! z!!!!!!!!',
                '£                                                              £',
                '£   xxxxx                   **    x x                         £',
                '£                                x x x     %                 ()£',
                '£                              x x x x      x    zzz         -+£',
                '£                   z     z  @@@@@@@@@     x                 ()£',
                '!!!!!!!!!!     !!!!!!!!       !!!!!!!!!!!!!!   !!  !!  z!!!!!!!!'


            ],


            [      '                                                            ',
            '                                                                   ',
            '                     z======z=======                                ',
            '                                          =====   # xx    x  %     ',
            '                                          ',
            '   %  =*=%=                 "!!!!!!!zzz^^====="     %               ',
            '              zzzzzzzzz                                                      ',
            '                           -+             ',
            '                   ^     ^                               ()         ',
            '==========      =zz=======      ======    ======    ==          ===',
                '£                                                              £',
                '£                                                    %%        £',
                '£            ###         %                                                  £',
                '£                      !                                       £',
                '£                                                              £',
                '£   @@@@@@                   **    x x                         ()£',
                '£                                x x x     %                   £',
                '£                              x x x x      x                -+£',
                '£                   z     z   x x x x       x                  ()£',
                '!!!!!!!!!!     !!!!!! !!!!!!!!!!!! !!!!!!!!!!!!!!!!         zzz    !!'
    
            ],


            [      '                                                            ',
            '                                                                   ',
            '                     z======z=======                                ',
            '                                          =====   # xx    x  %     ',
            '                                          ',
            '   %  =*=%=                 "!!!!!!!zzz^^====="     %               ',
            '                                                                    ',
            '                           -+             ',
            '                   ^     ^                               ()         ',
            '==========      =zz=======      ======    ======    ==          ===',
                '£                                                              £',
                '£                                                    %%        £',
                '£                                                              £',
                '£                      !                                       £',
                '£                                                              £',
                '£   @@@@@@                   **    x x                         £',
                '£                                x x x     %                   £',
                '£                              x x x x      x                -+£',
                '£                   z     z   x x x x       x                  £',
                '!!!!!!!      !!!!!!!!!!!!!      zz!!!!!!!!!!!!!!!!                  !!!!!!!!!!'],
                [      '                                                            ',
                '                                                                   ',
                '                     z======z=======                                ',
                '                                          =====   # xx    x  %     ',
                '                                          ',
                '   %  =*=%=                 "!!!!!!!zzz^^====="     %               ',
                '                                                                    ',
                '                           -+             ',
                '                   ^     ^                               ()         ',
                '==========      =zz=======      ======    ======    ==          ===',
                    '£                                                              £',
                    '£                       zzzzzzzzzzzzzzzzz                             %%        £',
                    '£                    zzzzzzzzzz                                          £',
                    '£                      !                                       £',
                    'zzzzzzzz£                                                              £',
                    '£   @@@@@@                   **    x zzzzzzzzzx                         £',
                    '£                                x x x     zzzz%                   £',
                    '£                              x x x x      x                -+£',
                    '£                   z     z   x x x x       x             zz          ()£',
                    '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
        
                ],
    
            ]
        

        const  levelCfg = {
            width:20,
            height:20,
            '=' : [sprite('block'),solid()],
            '$' : [sprite('coin'),'coin'],
            '%' : [sprite('surprise'),solid(),'coin-surprise'],
            '*' : [sprite('surprise'),solid(),'mushroom-surprise'],
            '}' : [sprite('unboxed'),solid()],
            '(' : [sprite('pipe-bottom-left'),solid(),scale(0.5)],
            ')' : [sprite('pipe-bottom-right'),solid(),scale(0.5)],
            '-' : [sprite('pipe-top-left'),solid(),scale(0.5),'pipe'],
            '+' : [sprite('pipe-top-right'),solid(),scale(0.5),'pipe'],
            '^' : [sprite('surprise'),solid(),'dangerous'],
            '#' : [sprite('mushroom'),solid(),'mushroom',body()],
            '!' : [sprite('blue-block'),solid(),scale(0.5)],
            '£' : [sprite('blue-brick'),solid(),scale(0.5)],
            'z' : [sprite('blue-evil-mushroom'),solid(),scale(0.5),'dangerous'],
            '@' : [sprite('blue-surprise'),solid(),scale(0.5),'coin-surprise'],
            'x' : [sprite('blue-brick'),solid(),scale(0.5)],


        }

        const gameLevel = addLevel(maps[level],levelCfg)

        const scoreLabel = add([
            text(score),
            pos(30,6),
            layer('ui'),
            {
                value:score
            }
        ])

        add([text(' level ' + parseInt(level+1)),pos(40,6)])

       const player = add([
        sprite('evil-shroom',solid()),
        pos(30,0),
        body(),
        origin('bot'),
        big()
       ])

       function big(){
        let timer=0
        let isBig = false
        return {
            update(){
                if(isBig){
                    currentJumpforce=bigJumpForce
                    timer -= dt()
                    if(timer<=0){
                        this.smallify()
                    }
                }
            },
            isBig(){
                return isBig
            },
            smallify(){
                this.scale = vec2(1)
                currentJumpforce=jumpForce
                timer=0
                isBig=false
            },
            biggify(time){
                this.scale=vec2(2)
                timer=time
                isBig = true
            }
        }
       }

       player.on("headbump",(obj)=>{
        if(obj.is('coin-surprise')){
            gameLevel.spawn('$',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.add(0,0) )
        }
        if(obj.is('mushroom-surprise')){
            gameLevel.spawn('#',obj.gridPos.sub(0,1))
            destroy(obj)
            gameLevel.spawn('}',obj.gridPos.add(0,0) )
        }
       })

       action('mushroom',(m)=>{
        m.move(20,0)
       })

       player.collides('mushroom',(m)=>{
        destroy(m)
        player.biggify(6)
       })

       //chat gpt code
       player.collides('coin', (obj) => {
        destroy(obj);  // Use obj instead of undefined variable c
        scoreLabel.value++;
        scoreLabel.text = scoreLabel.value;
    })
//code ends here    
    
       player.collides('coin',()=>{
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
       })
        
action('dangerous',(d)=>{
    d.move(-enemySpeed,0)
})
       player.collides('dangerous',(d)=>{
        if(isJumping){
            destroy(d)
        }
        else{
            go('lose',{score: scoreLabel.value})
        }
     
       })
       player.action(()=>{
        camPos(player.pos)
        if(player.pos.y>= fallDeath){
            go('lose',{score: scoreLabel.value})
        }
       })

       player.collides('pipe',()=>{
        keyPress('down',()=>{
            go('game',{
                level:(level+1)%maps.length,
                score:scoreLabel.value
            })
        })
        keyPress('enter',()=>{
            go('game',{
                level:(level+2)%maps.length,
                score:scoreLabel.value
            })
        })
       })
       keyDown('left',()=>{
        player.move(-moveSpeed,0)
       })

       keyDown('right',()=>{
        player.move(moveSpeed,0)
       })

       player.action(()=>{
        if(player.grounded()){
            isJumping = false
        }
        
       })

       keyPress('space',()=>{
        if(player.grounded()){
            isJumping = true
            player.jump(currentJumpforce)
        }
       })

       scene('lose',({score})=>{
        add([text(score,32),origin('center'),pos(width()/2,height()/2)])
       })
    })


start("game",{ level:0 , score:0})

}



startGame()