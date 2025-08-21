document.querySelector(".slideFinder").style.display="none";
document.querySelector(".finder").addEventListener("click",function(){
    document.querySelector(".slideFinder").classList.toggle("slidegoFinder")
    document.querySelector(".slideFinder").style.display="inline-block";
})

document.querySelector(".slideFile").style.display="none";
document.querySelector(".file").addEventListener("click",function(){
    document.querySelector(".slideFile").style.display="inline-block";
    document.querySelector(".slideFile").classList.toggle("slidegoFile")
})

document.querySelector(".slideEdit").style.display="none";
document.querySelector(".edit").addEventListener("click",function(){
    document.querySelector(".slideEdit").style.display="inline-block";
    document.querySelector(".slideEdit").classList.toggle("slidegoEdit")
})

document.querySelector(".slideGo").style.display="none";
document.querySelector(".go").addEventListener("click",function(){
    document.querySelector(".slideGo").style.display="inline-block";
    document.querySelector(".slideGo").classList.toggle("slidegoGo")
})

document.querySelector(".slideHelp").style.display="none";
document.querySelector(".help").addEventListener("click",function(){
    document.querySelector(".slideHelp").style.display="inline-block";
    document.querySelector(".slideHelp").classList.toggle("slidegoHelp")
})



document.querySelector(".slideFinderLogo").style.display="none";
document.querySelector("#finderlogo").addEventListener("click",function(){
    document.querySelector(".slideFinderLogo").classList.toggle("slidegoFinderLogo")
    document.querySelector(".slideFinderLogo").style.display="inline-block";
})
