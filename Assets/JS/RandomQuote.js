const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeBtn").style.background = "url(../icon/sun.svg) no-repeat center";
}
else{
    document.getElementById("darkModeBtn").style.background = "url(../icon/moon.svg) no-repeat center";
}

// Define Listener for click on  dark mode btn
btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")
    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});

window.onload = function(){
    document.getElementById("darkModeBtn").onclick = changeIcon;
}

function changeIcon(){
    var btn = document.getElementsByName("darkModeBtn")
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark"){
        document.getElementById("darkModeBtn").style.background = "url(../icon/sun.svg) no-repeat center";
    }
    else{
        document.getElementById("darkModeBtn").style.background = "url(../icon/moon.svg) no-repeat center";
    }
}


class RandomQuote {
    constructor() {
        var self = this;
        self.quotes = [
            "“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.”<br><span> Thomas A. Ediso</span>",
            "“You are never too old to set another goal or to dream a new dream.”<br><span> C.S. Lewi</span>",
            "“Doubt whom you will but never yourself.”<br><span> Christian Nestell Bove</span>",
            "“Every artist was first an amateur.”<br><span> Ralph Waldo Emerso</span>",
            "“In any project the important factor is your belief. Without belief there can be no successful outcome.”<br><span> William Jame</span>",
            "“We can do anything we want to do if we stick to it long enough.”<br><span> Helen Kelle</span>",
            "“No great man ever complains of want of opportunities.”<br><span> Ralph Waldo Emerso</span>",
            "“We are all faced with a series of great opportunities  brilliantly disguised as insoluable problems.”<br><span> John Gardne</span>",
            "“First say to yourself what you would be; and then do what you have to do.”<br><span> Epictetu</span>",
            "“You miss 100% of the shots you dont take.”<br><span>Wayne Gretzk</span>",
            "“Take calculated risks. That is quite different from being rash.”<br><span> George S. Patto</span>",
            "“Storms make oaks take roots.”<br><span> Prover</span>",
            "“Well begun is half done.”<br><span> Greek Prover</span>",
            "“And all may do what has by man been done.”<br><span> Edward Youn</span>",
            "“Hope is like the sun which as we journey toward it casts the shadow of our burden behind us.”<br><span> Samuel Smile</span>",
            "“Work spares us from three evils: boredom vice and need”. Voltair</span>",
            "“Do not wait to strike till the iron is hot; but make it hot by striking.”<br><span> William B. Spragu</span>",
            "“Fortune favors the brave. Publius Terenc</span>",
            "“When the best things are not possible the best may be made of those that are.”<br><span> Richard Hooke</span>",
            "“In doubtful matters boldness is everything.”<br><span> Publilius Syru</span>",
            "“Two roads diverged in a wood and I—I took the one less traveled by And that has made all the difference.”<br><span>  Robert Fros</span>",
            "“I attribute my success to this: I never gave or took any excuse.”<br><span> Florence Nightingal</span>",
            "“The most difficult thing is the decision to act the rest is merely tenacity.”<br><span> Amelia Earhar</span>",
            "“Every strike brings me closer to the next home run.”<br><span> Babe Rut</span>",
            "“Definiteness of purpose is the starting point of all achievement.”<br><span> W. Clement Ston</span>",
            "“We must balance conspicuous consumption with conscious capitalism.”<br><span> Kevin Krus</span>",
            "“Life is what happens to you while you’re busy making other plans.”<br><span> John Lenno</span>",
            "“We become what we think about. Earl Nightingal</span>",
            "“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do so throw off the bowlines sail away from safe harbor catch the trade winds in your sails.  Explore Dream Discover.”<br><span> Mark Twai</span>",
            "“Life is 10% what happens to me and 90% of how I react to it.”<br><span> Charles Swindol</span>",
            "“The most common way people give up their power is by thinking they don’t have any.”<br><span> Alice Walke</span>",
            "“The best time to plant a tree was 20 years ago. The second best time is now.”<br><span> Chinese Prover</span>",
            "“An unexamined life is not worth living.”<br><span> Socrate</span>",
            "“Eighty percent of success is showing up.”<br><span> Woody Alle</span>",
            "“Your time is limited so don’t waste it living someone else’s life.”<br><span> Steve Job</span>",
            "“Winning isn’t everything but wanting to win is.”<br><span> Vince Lombard</span>",
            "“I am not a product of my circumstances. I am a product of my decisions.”<br><span> Stephen Cove</span>",
            "“Every child is an artist.  The problem is how to remain an artist once he grows up.”<br><span> Pablo Picass</span>",
            "“You can never cross the ocean until you have the courage to lose sight of the shore.”<br><span> Christopher Columbu</span>",
            "“I’ve learned that people will forget what you said people will forget what you did but people will never forget how you made them feel.”<br><span> Maya Angelo</span>",
            "“Either you run the day or the day runs you.”<br><span> Jim Roh</span>",
            "“Whether you think you can or you think you can’t you’re right.”<br><span> Henry For</span>",
            "“The two most important days in your life are the day you are born and the day you find out why.”<br><span> Mark Twai</span>",
            "“Whatever you can do or dream you can begin it.  Boldness has genius power and magic in it.”<br><span> Johann Wolfgang von Goeth</span>",
            "“The best revenge is massive success.”<br><span> Frank Sinatr</span>",
            "“People often say that motivation doesn’t last. Well neither does bathing.  That’s why we recommend it daily.”<br><span> Zig Zigla</span>",
            "“Life shrinks or expands in proportion to one’s courage.”<br><span> Anais Ni</span>",
            "“If you hear a voice within you say “you cannot paint” then by all means paint and that voice will be silenced.”<br><span> Vincent Van Gog</span>",
            "“There is only one way to avoid criticism: do nothing say nothing and be nothing.”<br><span> Aristotl</span>",
            "“The only person you are destined to become is the person you decide to be.”<br><span> Ralph Waldo Emerso</span>",
            "“Go confidently in the direction of your dreams.  Live the life you have imagined.”<br><span> Henry David Thorea</span>",
            "“When I stand before God at the end of my life I would hope that I would not have a single bit of talent left and could say I used everything you gave me.”<br><span> Erma Bombec</span>",
            "“Few things can help an individual more than to place responsibility on him and to let him know that you trust him.”<br><span>  Booker T. Washingto</span>",
            "“Certain things catch your eye but pursue only those that capture the heart.”<br><span> Ancient Indian Prover</span>",
            "“Believe you can and you’re halfway there.”<br><span> Theodore Roosevel</span>",
            "“Everything you’ve ever wanted is on the other side of fear.”<br><span> George Addai</span>",
            "“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.”<br><span> Plat</span>",
            "“Teach thy tongue to say “I do not know” and thous shalt progress.”<br><span> Maimonide</span>",
            "“Start where you are. Use what you have.  Do what you can.”<br><span> Arthur Ash</span>",
            "“Fall seven times and stand up eight.”<br><span> Japanese Prover</span>",
            "“When one door of happiness closes another opens but often we look so long at the closed door that we do not see the one that has been opened for us.”<br><span> Helen Kelle</span>",
            "“Everything has beauty but not everyone can see.”<br><span> Confuciu</span>",
            "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”<br><span> Anne Fran</span>",
            "“When I let go of what I am I become what I might be.”<br><span> Lao Tz</span>",
            "“Life is not measured by the number of breaths we take but by the moments that take our breath away.”<br><span> Maya Angelo</span>",
            "“Happiness is not something readymade.  It comes from your own actions.”<br><span> Dalai Lam</span>",
            "“If you’re offered a seat on a rocket ship don’t ask what seat! Just get on.”<br><span> Sheryl Sandber</span>",
            "“Too many of us are not living our dreams because we are living our fears.”<br><span> Les Brow</span>",
            "“You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.”<br><span> Unknow</span>",
            "“Challenges are what make life interesting and overcoming them is what makes life meaningful.”<br><span> Joshua J. Marin</span>",
            "“If you want to lift yourself up lift up someone else.”<br><span> Booker T. Washingto</span>",
            "“I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.”<br><span> Leonardo da Vinc</span>",
            "“Limitations live only in our minds.  But if we use our imaginations our possibilities become limitless.”<br><span> Jamie Paolinett</span>",
            "“You take your life in your own hands and what happens? A terrible thing no one to blame.”<br><span> Erica Jon</span>",
            "“What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.”<br><span> Bob Dyla</span>",
            "“I didn’t fail the test. I just found 100 ways to do it wrong.”<br><span> Benjamin Frankli</span>",
            "“A person who never made a mistake never tried anything new.”<br><span> Albert Einstei</span>",
            "“The person who says it cannot be done should not interrupt the person who is doing it.”<br><span> Chinese Prover</span>",
            "“The person who says it cannot be done should not interrupt the person who is doing it.”<br><span> Chinese Prover</span>",
            "“There are no traffic jams along the extra mile.”<br><span> Roger Staubac</span>",
            "“It is never too late to be what you might have been.”<br><span> George Elio</span>",
            "“I would rather die of passion than of boredom.”<br><span> Vincent van Gog</span>",
            "“A truly rich man is one whose children run into his arms when his hands are empty. Unknow</span>",
            "“It is not what you do for your children but what you have taught them to do for themselves that will make them successful human beings.”<br><span>  Ann Lander</span>",
            "“If you want your children to turn out well spend twice as much time with them and half as much money.”<br><span> Abigail Van Bure</span>",
            "“Build your own dreams or someone else will hire you to build theirs.”<br><span> Farrah Gra</span>",
            "“The battles that count aren’t the ones for gold medals. The struggles within yourselfthe invisible battles inside all of usthat’s where it’s at.”<br><span> Jesse Owen</span>",
            "“Education costs money.  But then so does ignorance.”<br><span> Sir Claus Mose</span>",
            "“I have learned over the years that when one’s mind is made up this diminishes fear.”<br><span> Rosa Park</span>",
            "“It does not matter how slowly you go as long as you do not stop.”<br><span> Confuciu</span>",
            "“If you look at what you have in life you’ll always have more. If you look at what you don’t have in life you’ll never have enough.”<br><span> Oprah Winfre</span>",
            "“Remember that not getting what you want is sometimes a wonderful stroke of luck.”<br><span> Dalai Lam</span>",
            "“You can’t use up creativity.  The more you use the more you have.”<br><span> Maya Angelo</span>",
            "“Dream big and dare to fail.”<br><span> Norman Vaugha</span>",
            "“Our lives begin to end the day we become silent about things that matter. Martin Luther King Jr.</span>",
            "“Do what you can where you are with what you have.”<br><span> Teddy Roosevel</span>",
            "“If you do what you’ve always done you’ll get what you’ve always gotten.”<br><span> Tony Robbin</span>",
            "“Dreaming after all is a form of planning.”<br><span> Gloria Steine</span>",
            "“It’s your place in the world; it’s your life. Go on and do all you can with it and make it the life you want to live.”<br><span> Mae Jemiso</span>",
            "“You may be disappointed if you fail but you are doomed if you don’t try.”<br><span> Beverly Sill</span>",
            "“Remember no one can make you feel inferior without your consent.”<br><span> Eleanor Roosevel</span>",
            "“Life is what we make it always has been always will be.”<br><span> Grandma Mose</span>",
            "“The question isn’t who is going to let me; it’s who is going to stop me.”<br><span> Ayn Ran</span>",
            "“When everything seems to be going against you remember that the airplane takes off against the wind not with it.”<br><span>Henry For</span>",
            "“It’s not the years in your life that count. It’s the life in your years.”<br><span>Abraham Lincol</span>",
            "“Change your thoughts and you change your world. Norman Vincent Peale</span>",
            "“Either write something worth reading or do something worth writing.”<br><span>Benjamin Frankli</span>",
            "“The only way to do great work is to love what you do. Steve Jobs</span>",
            "“Life isn’t about getting and having it’s about giving and being.”<br><span>Kevin Krus</span>",
            "“Whatever the mind of man can conceive and believe it can achieve.”<br><span>Napoleon Hil</span>",
            "“Strive not to be a success but rather to be of value.”<br><span>Albert Einstei</span>",
            "“Two roads diverged in a wood and I—I took the one less traveled by And that has made all the difference.”<br><span>Robert Fros</span>",
            "“I attribute my success to this: I never gave or took any excuse.”<br><span>Florence Nightingal</span>",
            "“You miss 100% of the shots you don’t take.”<br><span>Wayne Gretzk</span>",
            "“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.”<br><span>Michael Jorda</span>",
            "“The most difficult thing is the decision to act the rest is merely tenacity.”<br><span>Amelia Earhar</span>",
            "“Every strike brings me closer to the next home run.”<br><span>Babe Rut</span>",
            "“Definiteness of purpose is the starting point of all achievement.”<br><span>W. Clement Ston</span>",
            "“We must balance conspicuous consumption with conscious capitalism.”<br><span>Kevin Krus</span>",
            "“Life is what happens to you while you’re busy making other plans.”<br><span>John Lenno</span>",
            "“We become what we think about.”<br><span>Earl Nightingal</span>",
            "“14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do so throw off the bowlines sail away from safe harbor catch the trade winds in your sails.  Explore Dream Discover.”<br><span>Mark Twai</span>",
            "“15.Life is 10% what happens to me and 90% of how I react to it.”<br><span>Charles Swindol</span>",
            "“The most common way people give up their power is by thinking they don’t have any.”<br><span>Alice Walke</span>",
            "“The mind is everything. What you think you become.”<br><span>Buddh</span>",
            "“The best time to plant a tree was 20 years ago. The second best time is now.”<br><span>Chinese Prover</span>",
            "“An unexamined life is not worth living.”<br><span>Socrate</span>",
            "“Eighty percent of success is showing up.”<br><span>Woody Alle</span>",
            "“Your time is limited so don’t waste it living someone else’s life.”<br><span>Steve Job</span>",
            "“Winning isn’t everything but wanting to win is.”<br><span>Vince Lombard</span>",
            "“I am not a product of my circumstances. I am a product of my decisions.”<br><span>Stephen Cove</span>",
            "“Every child is an artist.  The problem is how to remain an artist once he grows up.”<br><span>Pablo Picass</span>",
            "“You can never cross the ocean until you have the courage to lose sight of the shore.”<br><span>Christopher Columbu</span>",
            "“I’ve learned that people will forget what you said people will forget what you did but people will never forget how you made them feel.”<br><span>Maya Angelo</span>",
            "“Either you run the day or the day runs you.”<br><span>Jim Roh</span>",
            "“Whether you think you can or you think you can’t you’re right.”<br><span>Henry For</span>",
            "“The two most important days in your life are the day you are born and the day you find out why.”<br><span>Mark Twai</span>",
            "“Whatever you can do or dream you can begin it.  Boldness has genius power and magic in it.”<br><span>Johann Wolfgang von Goeth</span>",
            "“The best revenge is massive success.”<br><span>Frank Sinatr</span>",
            "“People often say that motivation doesn’t last. Well neither does bathing.  That’s why we recommend it daily.”<br><span>Zig Zigla</span>",
            "“Life shrinks or expands in proportion to one’s courage.”<br><span>Anais Ni</span>",
            "“If you hear a voice within you say “you cannot paint” then by all means paint and that voice will be silenced.”<br><span>Vincent Van Gog</span>",
            "“There is only one way to avoid criticism: do nothing say nothing and be nothing.”<br><span>Aristotl</span>",
            "“Ask and it will be given to you; search and you will find; knock and the door will be opened for you.”<br><span>Jesu</span>",
            "“The only person you are destined to become is the person you decide to be.”<br><span>Ralph Waldo Emerso</span>",
            "“Go confidently in the direction of your dreams.  Live the life you have imagined.”<br><span>Henry David Thorea</span>",
            "“When I stand before God at the end of my life I would hope that I would not have a single bit of talent left and could say I used everything you gave me.”<br><span>Erma Bombec</span>",
            "“Few things can help an individual more than to place responsibility on him and to let him know that you trust him.”<br><span>Booker T. Washingto</span>",
            "“Certain things catch your eye but pursue only those that capture the heart.”<br><span> Ancient Indian Prover</span>",
            "“Believe you can and you’re halfway there.”<br><span>Theodore Roosevel</span>",
            "“Everything you’ve ever wanted is on the other side of fear.”<br><span>George Addai</span>",
            "“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.”<br><span>Plat</span>",
            "“Teach thy tongue to say “I do not know” and thous shalt progress.”<br><span>Maimonide</span>",
            "“Start where you are. Use what you have.  Do what you can.”<br><span>Arthur Ash</span>",
            "“When I was 5 years old my mother always told me that happiness was the key to life.  When I went to school they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment and I told them they didn’t understand life.”<br><span>John Lenno</span>",
            "“Fall seven times and stand up eight.”<br><span>Japanese Prover</span>",
            "“When one door of happiness closes another opens but often we look so long at the closed door that we do not see the one that has been opened for us.”<br><span>Helen Kelle</span>",
            "“Everything has beauty but not everyone can see.”<br><span>Confuciu</span>",
            "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”<br><span>Anne Fran</span>",
            "“When I let go of what I am I become what I might be.”<br><span>Lao Tz</span>",
            "“Life is not measured by the number of breaths we take but by the moments that take our breath away.”<br><span>Maya Angelo</span>",
            "“Happiness is not something readymade.  It comes from your own actions.”<br><span>Dalai Lam</span>",
            "“If you’re offered a seat on a rocket ship don’t ask what seat! Just get on.”<br><span>Sheryl Sandber</span>",
            "“First have a definite clear practical ideal; a goal an objective. Second have the necessary means to achieve your ends; wisdom money materials and methods. Third adjust all your means to that end.”<br><span>Aristotl</span>",
            "“If the wind will not serve take to the oars.”<br><span>Latin Prover</span>",
            "“You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.”<br><span>Unknow</span>",
            "“We must believe that we are gifted for something and that this thing at whatever cost must be attained.”<br><span>Marie Curi</span>",
            "“Too many of us are not living our dreams because we are living our fears.”<br><span>Les Brow</span>",
            "“Challenges are what make life interesting and overcoming them is what makes life meaningful.”<br><span>Joshua J. Marin</span>",
            "“If you want to lift yourself up lift up someone else.”<br><span>Booker T. Washingto</span>",
            "“I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.”<br><span>Leonardo da Vinc</span>",
            "“Limitations live only in our minds.  But if we use our imaginations our possibilities become limitless.”<br><span>Jamie Paolinett</span>",
            "“You take your life in your own hands and what happens? A terrible thing no one to blame.”<br><span>Erica Jon</span>",
            "“What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.”<br><span>Bob Dyla</span>",
            "“I didn’t fail the test. I just found 100 ways to do it wrong.”<br><span>Benjamin Frankli</span>",
            "“In order to succeed your desire for success should be greater than your fear of failure.”<br><span>Bill Cosb</span>",
            "“A person who never made a mistake never tried anything new.”<br><span> Albert Einstei</span>",
            "“The person who says it cannot be done should not interrupt the person who is doing it.”<br><span>Chinese Prover</span>",
            "“There are no traffic jams along the extra mile.”<br><span>Roger Staubac</span>",
            "“It is never too late to be what you might have been.”<br><span>George Elio</span>",
            "“You become what you believe.”<br><span>Oprah Winfre</span>",
            "“I would rather die of passion than of boredom.”<br><span>Vincent van Gog</span>",
            "“A truly rich man is one whose children run into his arms when his hands are empty.”<br><span>Unknow</span>",
            "“It is not what you do for your children but what you have taught them to do for themselves that will make them successful human beings.”<br><span>Ann Lander</span>",
            "“If you want your children to turn out well spend twice as much time with them and half as much money.”<br><span>Abigail Van Bure</span>",
            "“Build your own dreams or someone else will hire you to build theirs.”<br><span>Farrah Gra</span>",
            "“The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.”<br><span>Jesse Owen</span>",
            "“Education costs money.  But then so does ignorance.”<br><span>Sir Claus Mose</span>",
            "“I have learned over the years that when one’s mind is made up this diminishes fear.”<br><span>Rosa Park</span>",
            "“It does not matter how slowly you go as long as you do not stop.”<br><span>Confuciu</span>",
            "“If you look at what you have in life you’ll always have more. If you look at what you don’t have in life you’ll never have enough.”<br><span>Oprah Winfre</span>",
            "“Remember that not getting what you want is sometimes a wonderful stroke of luck.”<br><span>Dalai Lam</span>",
            "“You can’t use up creativity.  The more you use the more you have.”<br><span>Maya Angelo</span>",
            "“Dream big and dare to fail.”<br><span>Norman Vaugha</span>",
            "“Our lives begin to end the day we become silent about things that matter.”<br><span>Martin Luther King Jr</span>",
            "“Do what you can where you are with what you have.”<br><span>Teddy Roosevel</span>",
            "“If you do what you’ve always done you’ll get what you’ve always gotten.”<br><span>Tony Robbin</span>",
            "“Dreaming after all is a form of planning.”<br><span>Gloria Steine</span>",
            "“It’s your place in the world; it’s your life. Go on and do all you can with it and make it the life you want to live.”<br><span>Mae Jemiso</span>",
            "“You may be disappointed if you fail but you are doomed if you don’t try.”<br><span>Beverly Sill</span>",
            "“Remember no one can make you feel inferior without your consent.”<br><span>Eleanor Roosevel</span>",
            "“Life is what we make it always has been always will be.”<br><span>Grandma Mose</span>",
            "“The question isn’t who is going to let me; it’s who is going to stop me.”<br><span>Ayn Ran</span>",
            "“When everything seems to be going against you remember that the airplane takes off against the wind not with it.”<br><span>Henry For</span>",
            "“It’s not the years in your life that count. It’s the life in your years.”<br><span>Abraham Lincol</span>",
            "“Change your thoughts and you change your world.”<br><span>Norman Vincent Peal</span>",
            "“Either write something worth reading or do something worth writing.”<br><span>Benjamin Frankli</span>",
            "“Nothing is impossible the word itself says “I’m possible!”–Audrey Hepbur</span>",
            "“The only way to do great work is to love what you do.”<br><span>Steve Job</span>",
            "“If you can dream it you can achieve it.”<br><span>Zig Ziglar“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.”<br><span> Thomas A. Ediso</span>",
            "“You are never too old to set another goal or to dream a new dream.”<br><span> C.S. Lewi</span>",
            "“Doubt whom you will but never yourself.”<br><span> Christian Nestell Bove</span>",
            "“Every artist was first an amateur.”<br><span> Ralph Waldo Emerso</span>",
            "“In any project the important factor is your belief. Without belief there can be no successful outcome.”<br><span> William Jame</span>",
            "“We can do anything we want to do if we stick to it long enough.”<br><span> Helen Kelle</span>",
            "“No great man ever complains of want of opportunities.”<br><span> Ralph Waldo Emerso</span>",
            "“We are all faced with a series of great opportunities  brilliantly disguised as insoluable problems.”<br><span> John Gardne</span>",
            "“First say to yourself what you would be; and then do what you have to do.”<br><span> Epictetu</span>",
            "“You miss 100% of the shots you dont take.”<br><span>Wayne Gretzk</span>",
            "“Take calculated risks. That is quite different from being rash.”<br><span> George S. Patto</span>",
            "“Storms make oaks take roots.”<br><span> Prover</span>",
            "“Well begun is half done.”<br><span> Greek Prover</span>",
            "“And all may do what has by man been done.”<br><span> Edward Youn</span>",
            "“Hope is like the sun which as we journey toward it casts the shadow of our burden behind us.”<br><span> Samuel Smile</span>",
            "“Work spares us from three evils: boredom vice and need”. Voltair</span>",
            "“Do not wait to strike till the iron is hot; but make it hot by striking.”<br><span> William B. Spragu</span>",
            "“Fortune favors the brave. Publius Terenc</span>",
            "“When the best things are not possible the best may be made of those that are.”<br><span> Richard Hooke</span>",
            "“In doubtful matters boldness is everything.”<br><span> Publilius Syru</span>",
            "“Two roads diverged in a wood and I—I took the one less traveled by And that has made all the difference.”<br><span>  Robert Fros</span>",
            "“I attribute my success to this: I never gave or took any excuse.”<br><span> Florence Nightingal</span>",
            "“The most difficult thing is the decision to act the rest is merely tenacity.”<br><span> Amelia Earhar</span>",
            "“Every strike brings me closer to the next home run.”<br><span> Babe Rut</span>",
            "“Definiteness of purpose is the starting point of all achievement.”<br><span> W. Clement Ston</span>",
            "“We must balance conspicuous consumption with conscious capitalism.”<br><span> Kevin Krus</span>",
            "“Life is what happens to you while you’re busy making other plans.”<br><span> John Lenno</span>",
            "“We become what we think about. Earl Nightingal</span>",
            "“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do so throw off the bowlines sail away from safe harbor catch the trade winds in your sails.  Explore Dream Discover.”<br><span> Mark Twai</span>",
            "“Life is 10% what happens to me and 90% of how I react to it.”<br><span> Charles Swindol</span>",
            "“The most common way people give up their power is by thinking they don’t have any.”<br><span> Alice Walke</span>",
            "“The best time to plant a tree was 20 years ago. The second best time is now.”<br><span> Chinese Prover</span>",
            "“An unexamined life is not worth living.”<br><span> Socrate</span>",
            "“Eighty percent of success is showing up.”<br><span> Woody Alle</span>",
            "“Your time is limited so don’t waste it living someone else’s life.”<br><span> Steve Job</span>",
            "“Winning isn’t everything but wanting to win is.”<br><span> Vince Lombard</span>",
            "“I am not a product of my circumstances. I am a product of my decisions.”<br><span> Stephen Cove</span>",
            "“Every child is an artist.  The problem is how to remain an artist once he grows up.”<br><span> Pablo Picass</span>",
            "“You can never cross the ocean until you have the courage to lose sight of the shore.”<br><span> Christopher Columbu</span>",
            "“I’ve learned that people will forget what you said people will forget what you did but people will never forget how you made them feel.”<br><span> Maya Angelo</span>",
            "“Either you run the day or the day runs you.”<br><span> Jim Roh</span>",
            "“Whether you think you can or you think you can’t you’re right.”<br><span> Henry For</span>",
            "“The two most important days in your life are the day you are born and the day you find out why.”<br><span> Mark Twai</span>",
            "“Whatever you can do or dream you can begin it.  Boldness has genius power and magic in it.”<br><span> Johann Wolfgang von Goeth</span>",
            "“The best revenge is massive success.”<br><span> Frank Sinatr</span>",
            "“People often say that motivation doesn’t last. Well neither does bathing.  That’s why we recommend it daily.”<br><span> Zig Zigla</span>",
            "“Life shrinks or expands in proportion to one’s courage.”<br><span> Anais Ni</span>",
            "“If you hear a voice within you say “you cannot paint” then by all means paint and that voice will be silenced.”<br><span> Vincent Van Gog</span>",
            "“There is only one way to avoid criticism: do nothing say nothing and be nothing.”<br><span> Aristotl</span>",
            "“The only person you are destined to become is the person you decide to be.”<br><span> Ralph Waldo Emerso</span>",
            "“Go confidently in the direction of your dreams.  Live the life you have imagined.”<br><span> Henry David Thorea</span>",
            "“When I stand before God at the end of my life I would hope that I would not have a single bit of talent left and could say I used everything you gave me.”<br><span> Erma Bombec</span>",
            "“Few things can help an individual more than to place responsibility on him and to let him know that you trust him.”<br><span>  Booker T. Washingto</span>",
            "“Certain things catch your eye but pursue only those that capture the heart.”<br><span> Ancient Indian Prover</span>",
            "“Believe you can and you’re halfway there.”<br><span> Theodore Roosevel</span>",
            "“Everything you’ve ever wanted is on the other side of fear.”<br><span> George Addai</span>",
            "“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.”<br><span> Plat</span>",
            "“Teach thy tongue to say “I do not know” and thous shalt progress.”<br><span> Maimonide</span>",
            "“Start where you are. Use what you have.  Do what you can.”<br><span> Arthur Ash</span>",
            "“Fall seven times and stand up eight.”<br><span> Japanese Prover</span>",
            "“When one door of happiness closes another opens but often we look so long at the closed door that we do not see the one that has been opened for us.”<br><span> Helen Kelle</span>",
            "“Everything has beauty but not everyone can see.”<br><span> Confuciu</span>",
            "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”<br><span> Anne Fran</span>",
            "“When I let go of what I am I become what I might be.”<br><span> Lao Tz</span>",
            "“Life is not measured by the number of breaths we take but by the moments that take our breath away.”<br><span> Maya Angelo</span>",
            "“Happiness is not something readymade.  It comes from your own actions.”<br><span> Dalai Lam</span>",
            "“If you’re offered a seat on a rocket ship don’t ask what seat! Just get on.”<br><span> Sheryl Sandber</span>",
            "“Too many of us are not living our dreams because we are living our fears.”<br><span> Les Brow</span>",
            "“You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.”<br><span> Unknow</span>",
            "“Challenges are what make life interesting and overcoming them is what makes life meaningful.”<br><span> Joshua J. Marin</span>",
            "“If you want to lift yourself up lift up someone else.”<br><span> Booker T. Washingto</span>",
            "“I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.”<br><span> Leonardo da Vinc</span>",
            "“Limitations live only in our minds.  But if we use our imaginations our possibilities become limitless.”<br><span> Jamie Paolinett</span>",
            "“You take your life in your own hands and what happens? A terrible thing no one to blame.”<br><span> Erica Jon</span>",
            "“What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.”<br><span> Bob Dyla</span>",
            "“I didn’t fail the test. I just found 100 ways to do it wrong.”<br><span> Benjamin Frankli</span>",
            "“A person who never made a mistake never tried anything new.”<br><span> Albert Einstei</span>",
            "“The person who says it cannot be done should not interrupt the person who is doing it.”<br><span> Chinese Prover</span>",
            "“The person who says it cannot be done should not interrupt the person who is doing it.”<br><span> Chinese Prover</span>",
            "“There are no traffic jams along the extra mile.”<br><span> Roger Staubac</span>",
            "“It is never too late to be what you might have been.”<br><span> George Elio</span>",
            "“I would rather die of passion than of boredom.”<br><span> Vincent van Gog</span>",
            "“A truly rich man is one whose children run into his arms when his hands are empty. Unknow</span>",
            "“It is not what you do for your children but what you have taught them to do for themselves that will make them successful human beings.”<br><span>  Ann Lander</span>",
            "“If you want your children to turn out well spend twice as much time with them and half as much money.”<br><span> Abigail Van Bure</span>",
            "“Build your own dreams or someone else will hire you to build theirs.”<br><span> Farrah Gra</span>",
            "“The battles that count aren’t the ones for gold medals. The struggles within yourselfthe invisible battles inside all of usthat’s where it’s at.”<br><span> Jesse Owen</span>",
            "“Education costs money.  But then so does ignorance.”<br><span> Sir Claus Mose</span>",
            "“I have learned over the years that when one’s mind is made up this diminishes fear.”<br><span> Rosa Park</span>",
            "“It does not matter how slowly you go as long as you do not stop.”<br><span> Confuciu</span>",
            "“If you look at what you have in life you’ll always have more. If you look at what you don’t have in life you’ll never have enough.”<br><span> Oprah Winfre</span>",
            "“Remember that not getting what you want is sometimes a wonderful stroke of luck.”<br><span> Dalai Lam</span>",
            "“You can’t use up creativity.  The more you use the more you have.”<br><span> Maya Angelo</span>",
            "“Dream big and dare to fail.”<br><span> Norman Vaugha</span>",
            "“Our lives begin to end the day we become silent about things that matter. Martin Luther King Jr.</span>",
            "“Do what you can where you are with what you have.”<br><span> Teddy Roosevel</span>",
            "“If you do what you’ve always done you’ll get what you’ve always gotten.”<br><span> Tony Robbin</span>",
            "“Dreaming after all is a form of planning.”<br><span> Gloria Steine</span>",
            "“It’s your place in the world; it’s your life. Go on and do all you can with it and make it the life you want to live.”<br><span> Mae Jemiso</span>",
            "“You may be disappointed if you fail but you are doomed if you don’t try.”<br><span> Beverly Sill</span>",
            "“Remember no one can make you feel inferior without your consent.”<br><span> Eleanor Roosevel</span>",
            "“Life is what we make it always has been always will be.”<br><span> Grandma Mose</span>",
            "“The question isn’t who is going to let me; it’s who is going to stop me.”<br><span> Ayn Ran</span>",
            "“When everything seems to be going against you remember that the airplane takes off against the wind not with it.”<br><span>Henry For</span>",
            "“It’s not the years in your life that count. It’s the life in your years.”<br><span>Abraham Lincol</span>",
            "“Change your thoughts and you change your world. Norman Vincent Peale</span>",
            "“Either write something worth reading or do something worth writing.”<br><span>Benjamin Frankli</span>",
            "“The only way to do great work is to love what you do. Steve Jobs</span>",
            "“Life isn’t about getting and having it’s about giving and being.”<br><span>Kevin Krus</span>",
            "“Whatever the mind of man can conceive and believe it can achieve.”<br><span>Napoleon Hil</span>",
            "“Strive not to be a success but rather to be of value.”<br><span>Albert Einstei</span>",
            "“Two roads diverged in a wood and I—I took the one less traveled by And that has made all the difference.”<br><span>Robert Fros</span>",
            "“I attribute my success to this: I never gave or took any excuse.”<br><span>Florence Nightingal</span>",
            "“You miss 100% of the shots you don’t take.”<br><span>Wayne Gretzk</span>",
            "“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.”<br><span>Michael Jorda</span>",
            "“The most difficult thing is the decision to act the rest is merely tenacity.”<br><span>Amelia Earhar</span>",
            "“Every strike brings me closer to the next home run.”<br><span>Babe Rut</span>",
            "“Definiteness of purpose is the starting point of all achievement.”<br><span>W. Clement Ston</span>",
            "“We must balance conspicuous consumption with conscious capitalism.”<br><span>Kevin Krus</span>",
            "“Life is what happens to you while you’re busy making other plans.”<br><span>John Lenno</span>",
            "“We become what we think about.”<br><span>Earl Nightingal</span>",
            "“14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do so throw off the bowlines sail away from safe harbor catch the trade winds in your sails.  Explore Dream Discover.”<br><span>Mark Twai</span>",
            "“15.Life is 10% what happens to me and 90% of how I react to it.”<br><span>Charles Swindol</span>",
            "“The most common way people give up their power is by thinking they don’t have any.”<br><span>Alice Walke</span>",
            "“The mind is everything. What you think you become.”<br><span>Buddh</span>",
            "“The best time to plant a tree was 20 years ago. The second best time is now.”<br><span>Chinese Prover</span>",
            "“An unexamined life is not worth living.”<br><span>Socrate</span>",
            "“Eighty percent of success is showing up.”<br><span>Woody Alle</span>",
            "“Your time is limited so don’t waste it living someone else’s life.”<br><span>Steve Job</span>",
            "“Winning isn’t everything but wanting to win is.”<br><span>Vince Lombard</span>",
            "“I am not a product of my circumstances. I am a product of my decisions.”<br><span>Stephen Cove</span>",
            "“Every child is an artist.  The problem is how to remain an artist once he grows up.”<br><span>Pablo Picass</span>",
            "“You can never cross the ocean until you have the courage to lose sight of the shore.”<br><span>Christopher Columbu</span>",
            "“I’ve learned that people will forget what you said people will forget what you did but people will never forget how you made them feel.”<br><span>Maya Angelo</span>",
            "“Either you run the day or the day runs you.”<br><span>Jim Roh</span>",
            "“Whether you think you can or you think you can’t you’re right.”<br><span>Henry For</span>",
            "“The two most important days in your life are the day you are born and the day you find out why.”<br><span>Mark Twai</span>",
            "“Whatever you can do or dream you can begin it.  Boldness has genius power and magic in it.”<br><span>Johann Wolfgang von Goeth</span>",
            "“The best revenge is massive success.”<br><span>Frank Sinatr</span>",
            "“People often say that motivation doesn’t last. Well neither does bathing.  That’s why we recommend it daily.”<br><span>Zig Zigla</span>",
            "“Life shrinks or expands in proportion to one’s courage.”<br><span>Anais Ni</span>",
            "“If you hear a voice within you say “you cannot paint” then by all means paint and that voice will be silenced.”<br><span>Vincent Van Gog</span>",
            "“There is only one way to avoid criticism: do nothing say nothing and be nothing.”<br><span>Aristotl</span>",
            "“Ask and it will be given to you; search and you will find; knock and the door will be opened for you.”<br><span>Jesu</span>",
            "“The only person you are destined to become is the person you decide to be.”<br><span>Ralph Waldo Emerso</span>",
            "“Go confidently in the direction of your dreams.  Live the life you have imagined.”<br><span>Henry David Thorea</span>",
            "“When I stand before God at the end of my life I would hope that I would not have a single bit of talent left and could say I used everything you gave me.”<br><span>Erma Bombec</span>",
            "“Few things can help an individual more than to place responsibility on him and to let him know that you trust him.”<br><span>Booker T. Washingto</span>",
            "“Certain things catch your eye but pursue only those that capture the heart.”<br><span> Ancient Indian Prover</span>",
            "“Believe you can and you’re halfway there.”<br><span>Theodore Roosevel</span>",
            "“Everything you’ve ever wanted is on the other side of fear.”<br><span>George Addai</span>",
            "“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.”<br><span>Plat</span>",
            "“Teach thy tongue to say “I do not know” and thous shalt progress.”<br><span>Maimonide</span>",
            "“Start where you are. Use what you have.  Do what you can.”<br><span>Arthur Ash</span>",
            "“When I was 5 years old my mother always told me that happiness was the key to life.  When I went to school they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment and I told them they didn’t understand life.”<br><span>John Lenno</span>",
            "“Fall seven times and stand up eight.”<br><span>Japanese Prover</span>",
            "“When one door of happiness closes another opens but often we look so long at the closed door that we do not see the one that has been opened for us.”<br><span>Helen Kelle</span>",
            "“Everything has beauty but not everyone can see.”<br><span>Confuciu</span>",
            "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”<br><span>Anne Fran</span>",
            "“When I let go of what I am I become what I might be.”<br><span>Lao Tz</span>",
            "“Life is not measured by the number of breaths we take but by the moments that take our breath away.”<br><span>Maya Angelo</span>",
            "“Happiness is not something readymade.  It comes from your own actions.”<br><span>Dalai Lam</span>",
            "“If you’re offered a seat on a rocket ship don’t ask what seat! Just get on.”<br><span>Sheryl Sandber</span>",
            "“First have a definite clear practical ideal; a goal an objective. Second have the necessary means to achieve your ends; wisdom money materials and methods. Third adjust all your means to that end.”<br><span>Aristotl</span>",
            "“If the wind will not serve take to the oars.”<br><span>Latin Prover</span>",
            "“You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.”<br><span>Unknow</span>",
            "“We must believe that we are gifted for something and that this thing at whatever cost must be attained.”<br><span>Marie Curi</span>",
            "“Too many of us are not living our dreams because we are living our fears.”<br><span>Les Brow</span>",
            "“Challenges are what make life interesting and overcoming them is what makes life meaningful.”<br><span>Joshua J. Marin</span>",
            "“If you want to lift yourself up lift up someone else.”<br><span>Booker T. Washingto</span>",
            "“I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.”<br><span>Leonardo da Vinc</span>",
            "“Limitations live only in our minds.  But if we use our imaginations our possibilities become limitless.”<br><span>Jamie Paolinett</span>",
            "“You take your life in your own hands and what happens? A terrible thing no one to blame.”<br><span>Erica Jon</span>",
            "“What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.”<br><span>Bob Dyla</span>",
            "“I didn’t fail the test. I just found 100 ways to do it wrong.”<br><span>Benjamin Frankli</span>",
            "“In order to succeed your desire for success should be greater than your fear of failure.”<br><span>Bill Cosb</span>",
            "“A person who never made a mistake never tried anything new.”<br><span> Albert Einstei</span>",
            "“The person who says it cannot be done should not interrupt the person who is doing it.”<br><span>Chinese Prover</span>",
            "“There are no traffic jams along the extra mile.”<br><span>Roger Staubac</span>",
            "“It is never too late to be what you might have been.”<br><span>George Elio</span>",
            "“You become what you believe.”<br><span>Oprah Winfre</span>",
            "“I would rather die of passion than of boredom.”<br><span>Vincent van Gog</span>",
            "“A truly rich man is one whose children run into his arms when his hands are empty.”<br><span>Unknow</span>",
            "“It is not what you do for your children but what you have taught them to do for themselves that will make them successful human beings.”<br><span>Ann Lander</span>",
            "“If you want your children to turn out well spend twice as much time with them and half as much money.”<br><span>Abigail Van Bure</span>",
            "“Build your own dreams or someone else will hire you to build theirs.”<br><span>Farrah Gra</span>",
            "“The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.”<br><span>Jesse Owen</span>",
            "“Education costs money.  But then so does ignorance.”<br><span>Sir Claus Mose</span>",
            "“I have learned over the years that when one’s mind is made up this diminishes fear.”<br><span>Rosa Park</span>",
            "“It does not matter how slowly you go as long as you do not stop.”<br><span>Confuciu</span>",
            "“If you look at what you have in life you’ll always have more. If you look at what you don’t have in life you’ll never have enough.”<br><span>Oprah Winfre</span>",
            "“Remember that not getting what you want is sometimes a wonderful stroke of luck.”<br><span>Dalai Lam</span>",
            "“You can’t use up creativity.  The more you use the more you have.”<br><span>Maya Angelo</span>",
            "“Dream big and dare to fail.”<br><span>Norman Vaugha</span>",
            "“Our lives begin to end the day we become silent about things that matter.”<br><span>Martin Luther King Jr</span>",
            "“Do what you can where you are with what you have.”<br><span>Teddy Roosevel</span>",
            "“If you do what you’ve always done you’ll get what you’ve always gotten.”<br><span>Tony Robbin</span>",
            "“Dreaming after all is a form of planning.”<br><span>Gloria Steine</span>",
            "“It’s your place in the world; it’s your life. Go on and do all you can with it and make it the life you want to live.”<br><span>Mae Jemiso</span>",
            "“You may be disappointed if you fail but you are doomed if you don’t try.”<br><span>Beverly Sill</span>",
            "“Remember no one can make you feel inferior without your consent.”<br><span>Eleanor Roosevel</span>",
            "“Life is what we make it always has been always will be.”<br><span>Grandma Mose</span>",
            "“The question isn’t who is going to let me; it’s who is going to stop me.”<br><span>Ayn Ran</span>",
            "“When everything seems to be going against you remember that the airplane takes off against the wind not with it.”<br><span>Henry For</span>",
            "“It’s not the years in your life that count. It’s the life in your years.”<br><span>Abraham Lincol</span>",
            "“Change your thoughts and you change your world.”<br><span>Norman Vincent Peal</span>",
            "“Either write something worth reading or do something worth writing.”<br><span>Benjamin Frankli</span>",
            "“Nothing is impossible the word itself says “I’m possible!”Audrey Hepbur</span>",
            "“The only way to do great work is to love what you do.”<br><span>Steve Job</span>",
            "“If you can dream it you can achieve it.”<br><span>Zig Zigla</span>",
            "“Success is not final; failure is not fatal: It is the courage to continue that counts.”<br><span>Winston S. Churchill</span>",
            "“It is better to fail in originality than to succeed in imitation.”<br><span>Herman Melville</span>",
            "“The road to success and the road to failure are almost exactly the same.”<br><span>Colin R. Davis</span>",
            "“Success usually comes to those who are too busy looking for it.”<br><span>Henry David Thoreau</span>",
            "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”<br><span>Dale Carnegie</span>",
            "“Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.”<br><span>Calvin Coolidge</span>",
            "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”<br><span>Mister Rogers</span>",
            "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”<br><span>John Wooden</span>",
            "“I never dreamed about success. I worked for it.”<br><span>Este Lauder</span>",
            "“Success is getting what you want, happiness is wanting what you get.”<br><span>W.P. Kinsella</span>",
            "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”<br><span>Winston Churchill</span>",
            "“Don’t let yesterday take up too much of today.”<br><span>Will Rogers</span>",
            "“You learn more from failure than from success. Don’t let it stop you. Failure builds character.”<br><span></span>",
            "“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”<br><span>Steve Jobs</span>",
            "“Experience is a hard teacher because she gives the test first, the lesson afterwards.”<br><span>ernon Sanders Law</span>",
            "“To know how much there is to know is the beginning of learning to live.”<br><span>Dorothy West</span>",
            "“Goal setting is the secret to a compelling future.”<br><span>Tony Robbins</span>",
            "“Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.”<br><span> Alexander Graham Bell</span>",
            "“Either you run the day or the day runs you.”<br><span>Jim Rohn</span>",
            "“I’m a greater believer in luck, and I find the harder I work the more I have of it.”<br><span>Thomas Jefferson</span>",
            "“Opportunity is missed by most people because it is dressed in overalls and looks like work.”<br><span>Thomas Edison</span>",
            "“You've got to get up every morning with determination if you're going to go to bed with satisfaction.”<br><span>George Lorimer</span>",
            "“The elevator to success is out of order. You’ll have to use the stairs, one step at a time.”<br><span>Joe Girard</span>",
            "“Be a positive energy trampoline – absorb what you need and rebound more back.”<br><span>Dave Carolan</span>",
            "“Opportunities don't happen, you create them.”<br><span>Chris Grosser</span>",
            "“It is never too late to be what you might have been.”<br><span>George Eliot</span>",
            "“If you’re not positive energy, you’re negative energy.”<br><span>Mark Cuban</span>",
            "“Don't look at your feet to see if you are doing it right. Just dance.”<br><span>Anne Lamott</span>",
            "“Small is not just a stepping-stone. Small is a great destination itself.”<br><span>Jason Fried</span>",
            "“Live out of your imagination, not your history.”<br><span>Stephen Covey</span>",
            "“Failure is simply the opportunity to begin again, this time more intelligently.”<br><span>Henry Ford</span>",
            "“If you change the way you look at things, the things you look at change.”<br><span>Wayne Dyer</span>",
            "“We must reach out our hand in friendship and dignity both to those who would befriend us and those who would be our enemy.”<br><span>Arthur Ashe</span>",
            "“It's fine to celebrate success but it is more important to heed the lessons of failure.”<br><span>Bill Gates</span>"
        ];

        function init() {
        }
        /**
         * @return - random item from the given array.
         */
        self.getRandom = function (array) {
            if (!array) {
                throw new Error("An array is required.");
            }
            return array[Math.floor(Math.random() * (array.length))];
        };


        /**
         * @param {string} quote
         * @return {object} quote element object
         */
        self.setQuote = function (quote) {
            var element = document.getElementById("quote");

            if (!quote) {
                quote = self.getRandom(self.quotes);
            }

            if (element) {
                element.innerHTML = quote;
            } else {
                throw new Error("The element with id 'quote' is not defined.");
            }

            return element;
        };


        init();
        return self;
    }
}

function showTime() {

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "&nbspAM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "&nbspPM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "&nbspAM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + " : " +
        min + " : " + sec + am_pm;
    document.getElementById("clock").innerHTML = currentTime;
}

function showDate() {
    let d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let todayDate = d.getFullYear() + " " + months[d.getMonth()] + " " + d.getDate() + ",&nbsp" + days[d.getDay()];
    document.getElementById("date").innerHTML = todayDate;
}



setInterval(showTime, 1000);
setInterval(showDate, 1000);

// Give new random qoute from list
var randomQoute = new RandomQuote();
randomQoute.setQuote();


